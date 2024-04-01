-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2024 at 10:30 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lab17`
--

-- --------------------------------------------------------

--
-- Table structure for table `asigna`
--

CREATE TABLE `asigna` (
  `username` varchar(50) NOT NULL,
  `idrol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `asigna`
--

INSERT INTO `asigna` (`username`, `idrol`, `created_at`) VALUES
('palmada', 1, '2024-03-18 21:25:01'),
('testuser', 2, '2024-03-18 21:25:01');

-- --------------------------------------------------------

--
-- Table structure for table `permiso`
--

CREATE TABLE `permiso` (
  `id` int(11) NOT NULL,
  `funcion` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `permiso`
--

INSERT INTO `permiso` (`id`, `funcion`, `created_at`) VALUES
(1, 'ver', '2024-03-12 16:14:00'),
(2, 'administrar', '2024-03-12 16:14:00');

-- --------------------------------------------------------

--
-- Table structure for table `posee`
--

CREATE TABLE `posee` (
  `idrol` int(11) NOT NULL,
  `idpermiso` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posee`
--

INSERT INTO `posee` (`idrol`, `idpermiso`, `created_at`) VALUES
(1, 1, '2024-03-18 21:22:44'),
(2, 1, '2024-03-18 21:24:05'),
(2, 2, '2024-03-18 21:22:44');

-- --------------------------------------------------------

--
-- Table structure for table `recomendacion`
--

CREATE TABLE `recomendacion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `razon` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recomendacion`
--

INSERT INTO `recomendacion` (`id`, `nombre`, `razon`, `username`, `created_at`) VALUES
(33, 'Breaking Bad', 'es joya', 'palmadamartinez', '2024-03-11 17:50:20'),
(34, 'Breaking Bad', 'es joya', 'palmadamartinez', '2024-03-12 15:36:55'),
(35, 'Breaking Bad', 'es joya', 'testuser', '2024-03-12 16:34:01'),
(36, 'Breaking Bad', 'es joya', 'testuser', '2024-03-12 16:38:57'),
(37, 'Breaking Bad', 'es joya', 'testuser', '2024-03-12 16:41:14'),
(38, 'Breaking Bad', 'es joya', 'testuser', '2024-03-12 16:43:49'),
(39, 'Breaking Bad', 'es joya', 'testuser', '2024-03-12 16:59:52');

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `id` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`id`, `nombre`, `created_at`) VALUES
(1, 'visualizador', '2024-03-12 16:13:40'),
(2, 'admin', '2024-03-12 16:13:40');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `username` varchar(50) NOT NULL,
  `password` varchar(800) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`username`, `password`, `created_at`) VALUES
('palmada', '$2a$12$3su7W2uJdD4KUxXa/CbFx.aOK2P7W1xgkMATLcDd0W7/GxRuzjTLO', NULL),
('palmada123', 'paulina1231', NULL),
('palmada2003', 'paulinaalmada123', NULL),
('palmadamartinez', 'palmada12', '2024-03-11 04:08:52'),
('testuser', '$2a$12$CoQH0oSNFEDK58WHl.Y5c.OYEIBqp/wssmxkZgr5/bANHN/mZSfLu', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asigna`
--
ALTER TABLE `asigna`
  ADD PRIMARY KEY (`idrol`,`username`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `permiso`
--
ALTER TABLE `permiso`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posee`
--
ALTER TABLE `posee`
  ADD PRIMARY KEY (`idrol`,`idpermiso`),
  ADD KEY `idpermiso` (`idpermiso`);

--
-- Indexes for table `recomendacion`
--
ALTER TABLE `recomendacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `permiso`
--
ALTER TABLE `permiso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recomendacion`
--
ALTER TABLE `recomendacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `asigna`
--
ALTER TABLE `asigna`
  ADD CONSTRAINT `asigna_ibfk_1` FOREIGN KEY (`username`) REFERENCES `usuario` (`username`),
  ADD CONSTRAINT `asigna_ibfk_2` FOREIGN KEY (`idrol`) REFERENCES `rol` (`id`);

--
-- Constraints for table `posee`
--
ALTER TABLE `posee`
  ADD CONSTRAINT `posee_ibfk_1` FOREIGN KEY (`idpermiso`) REFERENCES `permiso` (`id`),
  ADD CONSTRAINT `posee_ibfk_2` FOREIGN KEY (`idrol`) REFERENCES `rol` (`id`);

--
-- Constraints for table `recomendacion`
--
ALTER TABLE `recomendacion`
  ADD CONSTRAINT `recomendacion_ibfk_1` FOREIGN KEY (`username`) REFERENCES `usuario` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
