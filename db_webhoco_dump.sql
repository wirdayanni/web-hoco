-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: db_webhoco
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('03147ab8-3e72-4924-8013-737b5b7a8067','89c63a588142fdf9cbf9ed36190f805ba0370f376d5416d469600cd63bdbe299','2025-09-17 04:45:06.212','20250908200611_add_event_model',NULL,NULL,'2025-09-17 04:45:06.087',1),('8ec2e2ac-adf0-4842-970e-d1adc93b633e','96543fa747c2a76769905a790ab9bb68f87104a1fecd9f36438bfdf1bcbc6617','2025-09-17 04:45:06.066','20250908051852_update_field_name',NULL,NULL,'2025-09-17 04:45:05.823',1),('9a01046f-b1b2-4cd9-9c6a-5d2f2d2266da','b5dcd67b657d4a001f9c48839b8aa2aa16017f17ebae5f4d0ce411c69770ffc5','2025-09-17 05:51:23.781','20250917055123_fix_field_event_table',NULL,NULL,'2025-09-17 05:51:23.488',1),('9bb8e1e3-d61a-45cc-9efe-3c5e6afa337f','f92ad703d474996f7770fd592c9bcc96672e532b7cebbcf4fae2f72228e32c4b','2025-09-17 04:45:06.844','20250908204838_add_event_images_and_locations',NULL,NULL,'2025-09-17 04:45:06.221',1),('bcbe1e83-a14f-47b5-9b78-693179baea6c','27c016fcaf8dede00973ccae3db4f6647460832034fde5731a3f17925f35b8c0','2025-09-17 04:45:05.712','20250908030231_init',NULL,NULL,'2025-09-17 04:45:05.594',1),('cc5a5f9c-1eb7-4dc2-90ff-f7ae1a0e5597','1ed4d61c2a4b8bc745483be6f61028693bf5c8611802945323ae50ce66ddbd05','2025-09-17 04:45:07.186','20250917042001_add_custom_location_to_event',NULL,NULL,'2025-09-17 04:45:06.998',1),('d36af86c-9691-4bd1-b21e-129bdd23593b','14fe06ae42bcbd9c3065861673599d875ae4f574fe7b84a35afadc606537ae2f','2025-09-17 04:45:06.990','20250913040036_create_table_reservation',NULL,NULL,'2025-09-17 04:45:06.855',1),('eee4873a-8702-4af1-a8cd-6291aeb5c2ad','39d5ff358036e70104414d91907d2683d7abb8c5740ad9772509776d18a3839e','2025-09-17 04:45:05.807','20250908040902_create_menu_table',NULL,NULL,'2025-09-17 04:45:05.724',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Admin_username_key` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime(3) NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `locationId` int DEFAULT NULL,
  `customLocation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Event_locationId_fkey` (`locationId`),
  CONSTRAINT `Event_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `location` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'Ngopi di HOCO #06 & Berani Bicara #06','bikin konten audio visual dan latihan public speaking','✨ Dua event seru di Hoco Lambhuk!\r\n☕ Ngopi di Hoco #06 – bareng Ponjria (@ponjria), kupas tuntas bikin konten audio visual 🎥🎤\r\n🎙 Berani Bicara #06 – latihan public speaking bareng anak muda kreatif Aceh 🔥🗣️\r\n\r\n🗓 Rabu, 27 Agustus 2025\r\n📍 Hoco Coffee Lambhuk\r\n🎁 Free Es Teh buat 15 peserta pertama 🧊✨\r\n\r\n👉 Daftar gratis di: bit.ly/ngopi-dihoco\r\n.\r\n.\r\nHoco Coffee / @Hoco.Coffee','2025-08-27 00:00:00.000','/uploads/1758088313225.jpg',1,2,NULL,'2025-09-17 05:51:53.273','2025-09-17 19:51:10.045'),(2,'Ngopi di HOCO #01','Ngobrolin Pengalaman dan Ide','Pernah nggak sih… kamu merasa pelajaran sejarah itu cuma soal menghafal tahun dan nama tokoh?\r\nPadahal, sejarah bukan sekadar masa lalu. Ia hidup di sekitar kita—dalam cara kita berpikir, memutuskan, dan bermimpi tentang masa depan.\r\n\r\nDi episode perdana Ngopi di Hoco, kita ngobrol santai bareng Raisa Kamila, seorang penulis dan peneliti sejarah, yang bakal mengupas tuntas soal “Salah Kaprah Belajar Sejarah.”\r\nKenapa kita sering salah paham soal sejarah? Kenapa cerita penting justru hilang dari buku pelajaran?\r\n\r\n🗓 Minggu, 29 Juni 2025\r\n🕓 Pukul 16.30 – 18.30 WIB\r\n📍 Hoco Coffee – Cabang Lambhuk\r\n\r\n🎁 Free Es Teh untuk 15 pendaftar pertama\r\n🎟️ GRATIS, cukup daftar di: bit.ly/ngopi-dihoco\r\n\r\nNgopi, ngobrol, dan belajar dari cerita nyata—karena di Hoco, ngobrol nggak pernah biasa-biasa aja. 🍃\r\n#NgopiDiHoco #NgobrolBermakna #HocoCoffee','2025-06-29 00:00:00.000','/uploads/1758133720644.jpg',1,2,NULL,'2025-09-17 18:28:40.695','2025-09-17 19:25:04.347'),(3,'Talkshow dan Bedah Buku \"Ternyata Tanpamu...\"','Yuk, datang ke acara spesial Talkshow & Bedah Buku “Ternyata Tanpamu...” bersama Natasha Rizky','Bosan sama talkshow yang gitu-gitu aja? Yuk, datang ke acara spesial Talkshow & Bedah Buku “Ternyata Tanpamu...” bersama penulis dan artis muslimah, Natasha Rizky!\r\n\r\nIni kesempatan langka buat kamu yang mau dengar langsung cerita inspiratif dan makna di balik buku “Ternyata Tanpamu...”. Kamu juga bisa dapat buku, minuman, bahkan tanda tangan eksklusif,\r\n\r\nCatat tanggalnya:\r\n• Jumat, 19 September 2025\r\n• 16.30 - 18.00 WIB\r\n• AAC Dayan Dawood, Banda Aceh\r\n\r\nHarga tiket sudah termasuk buku “Ternyata Tanpamu...” dan minuman dari Urban Tea dan HOCO Jangan sampai kehabisan, apalagi buat 500 pendaftar pertama yang bisa dapat tanda tangan eksklusif dan foto bersama Natasha Rizky.\r\n\r\nDaftar sekarang melalui kontak yang tertera di poster, ya!','2025-09-20 00:00:00.000','/uploads/1758135125575.jpg',1,NULL,'AAC Dayan Dawood','2025-09-17 18:36:12.313','2025-09-17 18:52:05.582'),(4,'Ngopi di HOCO #02','Siapa Bilang Perempuan Nggak Boleh Bermimpi Besar?','NGOPI DI HOCO — EPISODE 2 🌟\r\n“Siapa Bilang Perempuan Nggak Boleh Bermimpi Besar?”\r\n\r\nNgobrol santai tapi berisi bareng Lavina Sabila — content creator, penulis, dan founder @inong.carong. Kita bakal bahas tentang mimpi, keberanian, dan bagaimana perempuan Aceh bisa terus melangkah tanpa batas.\r\n\r\n📅 Minggu, 6 Juli 2025\r\n🕓 16.00–18.00 WIB\r\n📍 HOCO Lambhuk\r\n💸 GRATIS!\r\n🍹 FREE ES TEH untuk 15 peserta pertama yang datang!\r\n\r\nDaftar sekarang sebelum kehabisan kursi:\r\n🔗 bit.ly/ngopi-dihoco\r\n\r\nYuk, bawa mimpimu… kita ngobrol bareng di HOCO. 💬✨','2025-07-06 00:00:00.000',NULL,1,2,NULL,'2025-09-17 19:14:46.583','2025-09-17 19:15:55.479'),(5,'NGOPI DI HOCO #03','Ngobrolin pengalaman dan ide bareng Miftah Armia, Founder Aermi Parfum','NGOPI DI HOCO #03\r\nNgobrolin pengalaman dan ide bareng Miftah Armia, Founder Aermi Parfum 💼\r\nTema: 4 Langkah Menjadi Pengusaha Mandiri\r\n🗓️ Rabu, 16 Juli 2025\r\n⏰ 20.00–22.00 WIB\r\n📍 Hoco Lambhuk\r\n💸 GRATIS!\r\n🍹 Free Es Teh untuk 15 peserta pertama yang datang paling cepat!\r\nDaftar sekarang di: bit.ly/ngopi-dihoco\r\n\r\n💡TAPI ITU BELUM SEMUA!\r\n\r\nSebelum Ngopi dimulai, kamu juga bisa hadir di sesi BERANI BICARA #03\r\nLatihan berbicara di depan umum bareng anak muda keren yang siap membagikan kisah dan semangat mereka!\r\nTempat yang sama, semangat yang beda 💥\r\n\r\n✨ Dua acara, satu malam penuh inspirasi. Jangan cuma jadi penonton, yuk ikut berkembang bareng!\r\n📲 @hoco.coffee\r\n\r\n#NgopiDiHoco #BeraniBicara #HocoCoffee #EventAceh #NgopiSantai #BicaraItuSkill #EntrepreneurMindset','2025-07-16 00:00:00.000',NULL,1,2,NULL,'2025-09-17 19:19:37.288','2025-09-17 19:44:44.228'),(6,'Ngopi di Hoco #04','Ngobrol santai, penuh insight, sambil menikmati kopi favoritmu','Tema: Membaca Budaya Kerja: Strategi Adaptasi untuk Profesional Muda\r\n🎙 Narasumber: Dr. (C) Gita Melisa SH, MKn, MH – Notaris/PPAT Kota Banda Aceh\r\n📍 Tempat: Hoco Lambhuk\r\n🗓 Hari/Tanggal: Senin, 28 Juli 2025\r\n⏰ Waktu: 20.00 – 22.00 WIB\r\n🎁 Bonus: Free Es Teh untuk 15 peserta pertama\r\n\r\nLink daftar: bit.ly/ngopi-dihoco\r\nGratis biaya daftar!\r\n\r\nDan jangan lupa, ada juga sesi Berani Bicara – program latihan berbicara buat kamu yang ingin lebih percaya diri dan jago ngomong di depan siapa pun.\r\n\r\nBicara itu skill, yuk latih!\r\n\r\n.\r\nHoco Coffee / @Hoco.Coffee','2025-07-28 00:00:00.000',NULL,1,2,NULL,'2025-09-17 19:48:13.802','2025-09-17 19:48:13.802'),(7,'Ngopi di Hoco #05','Bukan cuma ngopi santai, tapi juga tempat buat kamu yang pengen: ✅ Lebih pede ngomong di depan orang ✅ Nambah insight baru dari pengalaman keren ✅ Dapet circle positif yang sama-sama mau berkembang',' Ngopi di Hoco #05 hadir lagi!\r\nBukan cuma ngopi santai, tapi juga tempat buat kamu yang pengen:\r\n✅ Lebih pede ngomong di depan orang\r\n✅ Nambah insight baru dari pengalaman keren\r\n✅ Dapet circle positif yang sama-sama mau berkembang\r\n\r\nKali ini kita bareng Dosi Elfian + teman-teman dari program Berani Bicara, siap kasih semangat biar obrolan kamu makin mantap & aksi jadi lebih hebat 🚀\r\n\r\n📍 Hoco Coffee Lambhuk\r\n🗓 Rabu, 20 Agustus 2025 | 20.00 – 22.00 WIB\r\n🎟 Gratis! (plus Free Es Teh untuk 15 orang pertama 🍹)\r\n\r\nDaftar sekarang 👉 bit.ly/ngopi-dihoco\r\n\r\n.\r\nHoco Coffee / @Hoco.Coffee','2025-08-20 00:00:00.000',NULL,1,2,NULL,'2025-09-17 19:49:44.886','2025-09-17 19:49:44.886');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventimage`
--

DROP TABLE IF EXISTS `eventimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventimage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eventId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `EventImage_eventId_fkey` (`eventId`),
  CONSTRAINT `EventImage_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `event` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventimage`
--

LOCK TABLES `eventimage` WRITE;
/*!40000 ALTER TABLE `eventimage` DISABLE KEYS */;
INSERT INTO `eventimage` VALUES (1,'/uploads/1758088313225.jpg',1),(2,'/uploads/1758088313253.jpg',1),(3,'/uploads/1758133720644.jpg',2),(4,'/uploads/1758135125575.jpg',3),(5,'/uploads/1758136555186.jpg',4),(6,'/uploads/1758136776989.jpg',5),(7,'/uploads/1758136777276.jpg',5),(8,'/uploads/1758138493796.jpg',6),(9,'/uploads/1758138493799.jpg',6),(10,'/uploads/1758138584587.jpg',7),(11,'/uploads/1758138584879.jpg',7);
/*!40000 ALTER TABLE `eventimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'HOCO Lampineung',NULL),(2,'HOCO Lambhuk',NULL),(3,'HOCO Lamteumen',NULL);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'Nasi Ayam Sambal Matah','Nasi ayam katsu pake sambal matah khas hoco','2025-09-17 05:19:34.998','2025-09-17 05:19:34.998','/uploads/1758086374711.jpg'),(2,'Sanger Durian','Percampuran kopi susu dan durian yang nikmat','2025-09-17 05:20:47.661','2025-09-17 05:20:57.360','/uploads/1758086457352.jpg'),(3,'Crispy Chicken Steak','Stik ayam krispi saus BBQ','2025-09-17 05:21:45.124','2025-09-17 05:21:45.124','/uploads/1758086505095.jpg'),(4,'Lychee Tea','Teh rasa leci dengan jelly rasa leci','2025-09-17 05:23:29.779','2025-09-17 05:23:29.779','/uploads/1758086609728.jpg'),(5,'Chicken Wings','Chicken wings saus BBQ','2025-09-17 05:24:10.286','2025-09-17 05:24:10.286','/uploads/1758086649973.jpg'),(6,'Chicken Creamy Pasta','Pasta ayam creamy','2025-09-17 05:24:50.604','2025-09-17 05:24:50.604','/uploads/1758086690569.jpg'),(7,'HOCO Wine','wine khas HOCO','2025-09-17 05:25:43.325','2025-09-17 05:25:43.325','/uploads/1758086743284.jpg'),(8,'Es Kelapa Jeruk','Perpaduan kelapa dan jeruk yang enak','2025-09-17 05:26:23.449','2025-09-17 05:26:23.449','/uploads/1758086783136.jpg');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `room` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime(3) NOT NULL,
  `time` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `people` int NOT NULL,
  `eventName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `Reservation_code_key` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES (1,'RSV-1758087013406','Lampineung','meja','VIP','2025-09-18 00:00:00.000','09:00',6,'','','Wirda','081233344556','pending','2025-09-17 05:30:13.431'),(2,'RSV-1758087163030','Lambhuk','acara','Indoor AC','2025-09-20 00:00:00.000','11:30',14,'Ulang Tahun','surprise music ulang tahun dan cake','Rizka','08236778900','pending','2025-09-17 05:32:43.031'),(3,'RSV-1758087294214','Lamteumen','meja','VIP AC room','2025-09-21 00:00:00.000','14:00',35,'','rapat panitia acara himpunan, request tambahan wayer','Wilda','089765643221','pending','2025-09-17 05:34:54.215');
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-18  3:45:10
