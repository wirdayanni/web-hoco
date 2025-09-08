import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// CREATE Menu
export const createMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newMenu = await prisma.menu.create({
      data: {
        name,
        description,
        image, // simpan path gambar
      },
    });

    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ All Menus
export const getMenus = async (req, res) => {
  try {
    const menus = await prisma.menu.findMany();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ One Menu by ID
export const getMenuById = async (req, res) => {
  try {
    const menu = await prisma.menu.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!menu) return res.status(404).json({ error: "Menu not found" });
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE Menu
export const updateMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedMenu = await prisma.menu.update({
      where: { id: parseInt(req.params.id) },
      data: {
        name,
        description,
        ...(image && { image }),
      },
    });

    res.json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Menu
export const deleteMenu = async (req, res) => {
  try {
    await prisma.menu.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Menu deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};