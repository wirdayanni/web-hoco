import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

const removeFile = (urlPath) => {
  try {
    if (!urlPath) return;
    // urlPath expected "/uploads/filename.ext"
    const filename = path.basename(urlPath);
    const full = path.join(process.cwd(), "uploads", filename);
    if (fs.existsSync(full)) fs.unlinkSync(full);
  } catch (err) {
    console.error("removeFile error:", err.message);
  }
};

export const createEvent = async (req, res) => {
  try {
    const { title, shortDescription, description, date, locationId, status } = req.body;

    // files -> array jika ada
    const files = req.files || [];

    const event = await prisma.event.create({
      data: {
        title,
        shortDescription,
        description,
        date: new Date(date),
        status: status === undefined ? true : Boolean(status),
        locationId: locationId ? parseInt(locationId) : undefined,
        // image optional legacy: take first uploaded as cover if you want
        image: files.length ? `/uploads/${files[0].filename}` : null,
        images: {
          create: files.map(f => ({ url: `/uploads/${f.filename}` }))
        }
      },
      include: { images: true, location: true }
    });

    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    // include images and location
    const events = await prisma.event.findMany({
      orderBy: { date: "asc" },
      include: { images: true, location: true }
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const event = await prisma.event.findUnique({
      where: { id },
      include: { images: true, location: true }
    });
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, shortDescription, description, date, locationId, status, removeImageIds } = req.body;
    // removeImageIds can be a JSON array string => parse
    let toRemove = [];
    if (removeImageIds) {
      try { toRemove = JSON.parse(removeImageIds); } catch { toRemove = []; }
    }

    // delete specified images (both DB & filesystem)
    if (Array.isArray(toRemove) && toRemove.length) {
      for (const imgId of toRemove) {
        const img = await prisma.eventImage.findUnique({ where: { id: parseInt(imgId) }});
        if (img) {
          removeFile(img.url);
          await prisma.eventImage.delete({ where: { id: img.id }});
        }
      }
    }

    // add new uploaded files
    const files = req.files || [];
    const newImagesData = files.map(f => ({ url: `/uploads/${f.filename}`, eventId: id }));

    // update event fields (without images)
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        title,
        shortDescription,
        description,
        date: date ? new Date(date) : undefined,
        locationId: locationId ? parseInt(locationId) : undefined,
        status: status !== undefined ? Boolean(status) : undefined,
        image: files.length ? `/uploads/${files[0].filename}` : undefined
      },
      include: { images: true, location: true }
    });

    // insert new EventImage rows if any
    if (newImagesData.length) {
      await prisma.eventImage.createMany({ data: newImagesData });
    }

    // return fresh event with images
    const fresh = await prisma.event.findUnique({ where: { id }, include: { images: true, location: true }});
    res.json(fresh);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const event = await prisma.event.findUnique({ where: { id }, include: { images: true }});
    if (!event) return res.status(404).json({ message: "Event not found" });

    // delete files
    for (const img of event.images) removeFile(img.url);

    // delete images rows
    await prisma.eventImage.deleteMany({ where: { eventId: id }});

    // delete event
    await prisma.event.delete({ where: { id }});

    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};