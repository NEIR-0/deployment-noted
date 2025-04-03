const cron = require("node-cron");
const { User } = require("../database/models"); // Mengimpor sequelize dari models
const { Op } = require("sequelize");

// Fungsi untuk menambahkan user dummy
async function addDummyUser() {
  try {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // Set waktu ke 00:00:00 hari ini
    const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // Set waktu ke 23:59:59 hari ini

    // Hitung jumlah user yang sudah ada hari ini
    const userCountToday = await User.count({
      where: {
        createdAt: {
          [Op.between]: [startOfDay, endOfDay], // Filter user yang dibuat hari ini
        },
      },
    });

    // Jika sudah ada 3 user, jangan buat user baru
    if (userCountToday >= 3) {
      console.log("User sudah ada 3, tidak menambah user baru.");
      return;
    }

    // Jika belum ada 3 user, buat user dummy baru
    await User.create({
      firstName: "Dummy",
      lastName: "User",
      email: `dummy${Date.now()}@example.com`, // Email unik dengan timestamp
    });
    console.log("User dummy berhasil dibuat.");
  } catch (error) {
    console.error("Terjadi kesalahan saat menambahkan user:", error);
  }
}

// Menjadwalkan untuk menjalankan addDummyUser() setiap 10 detik
cron.schedule("*/10 * * * * *", addDummyUser);
