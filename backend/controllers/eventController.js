import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

// 🔹 Helper untuk hapus file fisik
const removeFile = (urlPath) => {
  if (!urlPath) return;
  const filename = path.basename(urlPath);
  const full = path.join(process.cwd(), "uploads", filename);
  if (fs.existsSync(full)) fs.unlinkSync(full);
};

// 🔹 Create Event
export const createEvent = async (req, res) => {
  try {
    const { title, shortDescription, description, date, locationId, status } = req.body;
    const files = req.files || [];

    const event = await prisma.event.create({
      data: {
        title,
        shortDescription,
        description,
        date: new Date(date),
        status: status === undefined ? true : Boolean(status),
        locationId: locationId ? parseInt(locationId) : undefined,
        image: files.length ? `/uploads/${files[0].filename}` : null,
        images: {
          create: files.map(f => ({ url: `/uploads/${f.filename}` }))
        }
      },
      include: { images: true, location: true }
    });

    res.status(201).json(event);
  } catch (err) {
    console.error("❌ createEvent error:", err);
    res.status(500).json({ message: err.message });
  }
};

// 🔹 Get All Events
export const getEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: "desc" },
      include: { images: true, location: true }
    });
    res.json(events);
  } catch (err) {
    console.error("❌ getEvents error:", err);
    res.status(500).json({ message: err.message });
  }
};

// 🔹 Get Event by ID
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
    console.error("❌ getEventById error:", err);
    res.status(500).json({ message: err.message });
  }
};

// 🔹 Update Event
export const updateEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, shortDescription, description, date, locationId, status, existingImageIds } = req.body;

    let keepImages = [];
    if (existingImageIds) {
      try { keepImages = JSON.parse(existingImageIds); } catch { keepImages = []; }
    }

    const currentImages = await prisma.eventImage.findMany({ where: { eventId: id } });
    for (const img of currentImages) {
      if (!keepImages.includes(img.id)) {
        removeFile(img.url);
        await prisma.eventImage.delete({ where: { id: img.id } });
      }
    }

    const files = req.files || [];
    const newImagesData = files.map(f => ({ url: `/uploads/${f.filename}`, eventId: id }));

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
      }
    });

    if (newImagesData.length) {
      await prisma.eventImage.createMany({ data: newImagesData });
    }

    const fresh = await prisma.event.findUnique({
      where: { id },
      include: { images: true, location: true }
    });

    res.json(fresh);
  } catch (err) {
    console.error("❌ updateEvent error:", err);
    res.status(500).json({ message: err.message });
  }
};

// 🔹 Delete Event
export const deleteEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const event = await prisma.event.findUnique({ where: { id }, include: { images: true } });
    if (!event) return res.status(404).json({ message: "Event not found" });

    for (const img of event.images) removeFile(img.url);

    await prisma.eventImage.deleteMany({ where: { eventId: id } });
    await prisma.event.delete({ where: { id } });

    res.json({ message: "Event deleted" });
  } catch (err) {
    console.error("❌ deleteEvent error:", err);
    res.status(500).json({ message: err.message });
  }
};