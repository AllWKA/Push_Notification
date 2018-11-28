-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: db_notifications_push
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `app_has_admins`
--

DROP TABLE IF EXISTS `app_has_admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `app_has_admins` (
  `appId` int(11) NOT NULL,
  `adminId` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `otrainfo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`appId`,`adminId`),
  KEY `fk2_app_admins_idx` (`adminId`),
  CONSTRAINT `fk1_app_admins` FOREIGN KEY (`appId`) REFERENCES `apps` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk2_app_admins` FOREIGN KEY (`adminId`) REFERENCES `admins` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_has_admins`
--

LOCK TABLES `app_has_admins` WRITE;
/*!40000 ALTER TABLE `app_has_admins` DISABLE KEYS */;
INSERT INTO `app_has_admins` VALUES (1,1,NULL,NULL,'\"pepepepee\"'),(1,2,NULL,NULL,NULL),(1,3,'2018-11-28','2018-11-28',NULL),(1,11,'2018-11-28','2018-11-28',NULL),(1,14,'2018-11-28','2018-11-28',NULL),(1,15,'2018-11-28','2018-11-28',NULL),(1,16,'2018-11-28','2018-11-28',NULL),(4,12,NULL,NULL,NULL),(5,12,NULL,NULL,NULL);
/*!40000 ALTER TABLE `app_has_admins` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-28 20:34:25
