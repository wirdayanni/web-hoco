import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

//  Helper untuk hapus file fisik
const removeFile = (urlPath) => {
  if (!urlPath) return;
  const filename = path.basename(urlPath);
  const full = path.join(process.cwd(), "uploads", filename);
  if (fs.existsSync(full)) fs.unlinkSync(full);
};

// Create Event
export const createEvent = async (req, res) => {
  try {
    const {
      title,
      shortDescription,
      description,
      date,
      locationId,
      customLocation,
      existingImageIds
    } = req.body;

    // Buat event baru
    const event = await prisma.event.create({
      data: {
        title,
        shortDescription,
        description,
        date: new Date(date),
        locationId: locationId && locationId !== "custom" ? Number(locationId) : null,
        customLocation: locationId === "custom" ? customLocation : null,
        status: true,
      },
    });

    // Simpan gambar baru
    if (req.files && req.files.length > 0) {
      await prisma.eventImage.createMany({
        data: req.files.map((file) => ({
          url: `/uploads/${file.filename}`,
          eventId: event.id,
        })),
      });
    }

    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal membuat event" });
  }
};

// Get All Events
export const getEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        location: true,
        images: true,
      },
      orderBy: { date: "asc" },
    });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data event" });
  }
};

// Get Event by ID
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
    console.error("getEventById error:", err);
    res.status(500).json({ message: err.message });
  }
};

// Update Event
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      shortDescription,
      description,
      date,
      locationId,
      customLocation,
      existingImageIds
    } = req.body;

    // Update event
    const event = await prisma.event.update({
      where: { id: Number(id) },
      data: {
        title,
        shortDescription,
        description,
        date: new Date(date),
        locationId: locationId && locationId !== "custom" ? Number(locationId) : null,
        customLocation: locationId === "custom" ? customLocation : null,
      },
    });

    // Gambar lama yg masih dipertahankan
    if (existingImageIds) {
      const keepIds = JSON.parse(existingImageIds);
      await prisma.eventImage.deleteMany({
        where: {
          eventId: Number(id),
          id: { notIn: keepIds },
        },
      });
    }

    // Tambah gambar baru
    if (req.files && req.files.length > 0) {
      await prisma.eventImage.createMany({
        data: req.files.map((file) => ({
          url: `/uploads/${file.filename}`,
          eventId: event.id,
        })),
      });
    }

    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal update event" });
  }
};

// Delete Event
export const deleteEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const event = await prisma.event.findUnique({ where: { id }, include: { images: true } });
    if (!event) return res.status(404).json({ message: "Event not found" });

    // hapus file fisik gambar
    for (const img of event.images) removeFile(img.url);

    await prisma.eventImage.deleteMany({ where: { eventId: id } });
    await prisma.event.delete({ where: { id } });

    res.json({ message: "Event deleted" });
  } catch (err) {
    console.error("deleteEvent error:", err);
    res.status(500).json({ message: err.message });
  }
};
