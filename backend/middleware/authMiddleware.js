import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // Ambil token dari header: "Authorization: Bearer <token>"
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" }); // belum login / lupa kirim token
  }

  try {
    // Verifikasi token pakai kunci rahasia
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Simpan data user hasil decode ke request, biar route bisa pakai
    req.user = decoded;
    next(); // lanjut ke handler berikutnya
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" }); // token rusak / kedaluwarsa
  }
};
