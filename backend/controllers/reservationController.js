import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Generate kode reservasi unik
function generateCode() {
  return "RSV-" + Date.now().toString(36).toUpperCase();
}

// ✅ CREATE
// export const createReservation = async (req, res) => {
//   try {
//     const {
//       branch,
//       type,
//       room,
//       date,
//       time,
//       people,
//       eventName,
//       notes,
//       name,
//       phone,
//     } = req.body;

//     const reservation = await prisma.reservation.create({
//       data: {
//         code: generateCode(),
//         branch,
//         type,
//         room,
//         date: new Date(date),
//         time,
//         people: Number(people),
//         eventName,
//         notes,
//         name,
//         phone,
//       },
//     });

//     res.status(201).json(reservation);
//   } catch (error) {
//     console.error("❌ Error createReservation:", error);
//     res.status(500).json({ error: "Failed to create reservation" });
//   }
// };

export const createReservation = async (req, res) => {
  try {
    const {
      branch,
      type,
      room,
      date,
      time,
      people,
      eventName,
      notes,
      name,
      phone,
    } = req.body;

    const reservation = await prisma.reservation.create({
      data: {
        code: `RSV-${Date.now()}`, // kode unik sederhana
        branch,
        type,
        room,
        date: new Date(date),
        time,
        people: parseInt(people, 10),
        eventName,
        notes,
        name,
        phone,
      },
    });

    res.status(201).json(reservation);
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ error: "Failed to create reservation" });
  }
};

// ✅ GET ALL
export const getReservations = async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(reservations);
  } catch (error) {
    console.error("❌ Error getReservations:", error);
    res.status(500).json({ error: "Failed to fetch reservations" });
  }
};

// ✅ GET by ID
export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await prisma.reservation.findUnique({
      where: { id: Number(id) },
    });
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.json(reservation);
  } catch (error) {
    console.error("❌ Error getReservationById:", error);
    res.status(500).json({ error: "Failed to fetch reservation" });
  }
};

// ✅ UPDATE
export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await prisma.reservation.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    console.error("❌ Error updateReservation:", error);
    res.status(500).json({ error: "Failed to update reservation" });
  }
};

// ✅ DELETE
export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.reservation.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Reservation deleted" });
  } catch (error) {
    console.error("❌ Error deleteReservation:", error);
    res.status(500).json({ error: "Failed to delete reservation" });
  }
};