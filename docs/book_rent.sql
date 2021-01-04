-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: book_rent
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `alugel`
--

DROP TABLE IF EXISTS `alugel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alugel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `copia_id` int DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `data_inicial` datetime DEFAULT CURRENT_TIMESTAMP,
  `data_entrega_esperada` datetime DEFAULT NULL,
  `data_entrega_efetiva` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `copia_id` (`copia_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `alugel_ibfk_1` FOREIGN KEY (`copia_id`) REFERENCES `copia_livro` (`id`),
  CONSTRAINT `alugel_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alugel`
--

LOCK TABLES `alugel` WRITE;
/*!40000 ALTER TABLE `alugel` DISABLE KEYS */;
/*!40000 ALTER TABLE `alugel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aluguel`
--

DROP TABLE IF EXISTS `aluguel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aluguel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `copia_id` int DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `data_inicial` datetime DEFAULT CURRENT_TIMESTAMP,
  `data_entrega_esperada` datetime DEFAULT NULL,
  `data_entrega_efetiva` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `copia_id` (`copia_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `aluguel_ibfk_1` FOREIGN KEY (`copia_id`) REFERENCES `copia_livro` (`id`),
  CONSTRAINT `aluguel_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluguel`
--

LOCK TABLES `aluguel` WRITE;
/*!40000 ALTER TABLE `aluguel` DISABLE KEYS */;
INSERT INTO `aluguel` VALUES (1,1,2,'2021-01-04 09:55:42','2021-01-11 09:55:42','2021-01-12 10:55:23'),(2,3,13,'2021-01-04 09:55:42','2021-01-11 09:55:42','2021-01-12 10:55:23'),(3,1,14,'2021-01-04 10:04:34','2021-01-11 10:04:34','2021-01-04 10:13:57'),(4,1,11,'2021-01-04 10:04:36','2021-01-11 10:04:36',NULL),(5,1,12,'2021-01-04 10:04:57','2021-01-11 10:04:57',NULL),(6,1,14,'2021-01-04 10:05:13','2021-01-11 10:05:13',NULL),(8,4,3,'2020-10-21 09:53:31','2020-10-28 09:53:31','2020-11-21 09:53:31');
/*!40000 ALTER TABLE `aluguel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `copia_livro`
--

DROP TABLE IF EXISTS `copia_livro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `copia_livro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(200) NOT NULL,
  `livro_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `livro_id` (`livro_id`),
  CONSTRAINT `copia_livro_ibfk_1` FOREIGN KEY (`livro_id`) REFERENCES `livro` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `copia_livro`
--

LOCK TABLES `copia_livro` WRITE;
/*!40000 ALTER TABLE `copia_livro` DISABLE KEYS */;
INSERT INTO `copia_livro` VALUES (1,'001A',2),(3,'001B',2),(4,'002C',4);
/*!40000 ALTER TABLE `copia_livro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livro`
--

DROP TABLE IF EXISTS `livro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `livro` varchar(150) NOT NULL,
  `autor` varchar(150) NOT NULL,
  `isbn` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livro`
--

LOCK TABLES `livro` WRITE;
/*!40000 ALTER TABLE `livro` DISABLE KEYS */;
INSERT INTO `livro` VALUES (1,'Manual de Residencia médica','Andrea Remigio','564541541814800'),(2,'Manual de Residencia médica 2º ED','Andrea Remigio Oliveira','78784948'),(4,'Manual de Residencia médica','Andrea Remigio','564541541814800'),(5,'Manual de Residencia médica','Andrea Remigio','564541541814800'),(6,'Manual de Residencia médica','Andrea Remigio','564541541814800');
/*!40000 ALTER TABLE `livro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `endereco` text,
  `senha` varchar(100) DEFAULT NULL,
  `cidade` varchar(500) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `cep` varchar(12) DEFAULT NULL,
  `complemento` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,NULL,NULL,NULL,NULL),(2,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,'Santo André',NULL,NULL,NULL),(3,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,'Santana de Parnaíba',NULL,NULL,NULL),(4,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,NULL,NULL,NULL,NULL),(6,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,NULL,NULL,NULL,NULL),(7,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,NULL,NULL,NULL,NULL),(8,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,NULL,NULL,NULL,NULL),(9,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,NULL,NULL,NULL,NULL),(10,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,NULL,NULL,NULL,NULL),(11,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,'Barueri',NULL,NULL,NULL),(12,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,'Carapicuíba',NULL,NULL,NULL),(13,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,'São Paulo',NULL,NULL,NULL),(14,'Bruno','44417658862','2000-08-15','Estrada do aderno, 504 - Vila Amerecia, Carapicíba - SP, 06390070',NULL,'Osasco',NULL,NULL,NULL),(15,'Admin','15154445','2000-12-31','asdasd','admin',NULL,NULL,NULL,NULL),(16,'Bruno Farias','dasdasd','2000-08-15','Estrada do aderno, 504',NULL,'Carapicíba','SP','06390070','Casa 2');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-04 11:12:05
