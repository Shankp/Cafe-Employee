-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: cafemanagerdb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cafe`
--

DROP TABLE IF EXISTS `cafe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cafe` (
  `CafeId` binary(16) NOT NULL,
  `CafeName` varchar(255) NOT NULL,
  `CafeDescription` varchar(255) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Logo` blob,
  PRIMARY KEY (`CafeId`),
  UNIQUE KEY `CafeId` (`CafeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cafe`
--

LOCK TABLES `cafe` WRITE;
/*!40000 ALTER TABLE `cafe` DISABLE KEYS */;
INSERT INTO `cafe` VALUES (_binary '\rû\À∆©w@µ\\ÛSªÅö','Mountain','located on top of goopr mountain','Kandy',NULL),(_binary 'Ùå\Îõ*L≤∫\Á⁄ªÑÅ`','Sea Face','Open 24*7','Colombo 2',NULL),(_binary 'ÛC\‡¬Ü´BOèó\«\Ï\Ïı±','Rock','open weekdays','Colombo 1',NULL);
/*!40000 ALTER TABLE `cafe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cafeemployee`
--

DROP TABLE IF EXISTS `cafeemployee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cafeemployee` (
  `CafeId` binary(16) NOT NULL,
  `EmployeeId` varchar(100) NOT NULL,
  `StartDate` date NOT NULL,
  PRIMARY KEY (`CafeId`,`EmployeeId`),
  KEY `EmployeeId` (`EmployeeId`),
  CONSTRAINT `cafeemployee_ibfk_1` FOREIGN KEY (`CafeId`) REFERENCES `cafe` (`CafeId`),
  CONSTRAINT `cafeemployee_ibfk_2` FOREIGN KEY (`EmployeeId`) REFERENCES `employee` (`EmployeeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cafeemployee`
--

LOCK TABLES `cafeemployee` WRITE;
/*!40000 ALTER TABLE `cafeemployee` DISABLE KEYS */;
INSERT INTO `cafeemployee` VALUES (_binary '\rû\À∆©w@µ\\ÛSªÅö','UI83dab453982e42b1a15dc1c66bd00224','2022-03-18'),(_binary '\rû\À∆©w@µ\\ÛSªÅö','UIba3362ca93c44829beec47934be24383','2022-03-18'),(_binary 'Ùå\Îõ*L≤∫\Á⁄ªÑÅ`','UI8babbb0e3732419886a4e97918e1d558','2022-03-18'),(_binary 'Ùå\Îõ*L≤∫\Á⁄ªÑÅ`','UIc2bc0bef90604e8dbdc9914c592f2416','2022-03-18');
/*!40000 ALTER TABLE `cafeemployee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `EmployeeId` varchar(100) NOT NULL,
  `EmployeeName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Gender` int NOT NULL,
  `PhoneNumber` int NOT NULL,
  PRIMARY KEY (`EmployeeId`),
  UNIQUE KEY `EmployeeId` (`EmployeeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('UI83dab453982e42b1a15dc1c66bd00224','Chathu','Chathu@Cafe.com',1,8844661),('UI8babbb0e3732419886a4e97918e1d558','Shanpeiris','Shan@cafe.com',0,4574456),('UIba3362ca93c44829beec47934be24383','Sankha','sankha@Cafe.com',0,9685742),('UIc2bc0bef90604e8dbdc9914c592f2416','Chanij','Chani@cafe.com',1,4233231);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-18 14:46:10
