-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Ven 14 Avril 2017 à 16:44
-- Version du serveur :  10.1.21-MariaDB
-- Version de PHP :  7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `keep_slim`
--

-- --------------------------------------------------------

--
-- Structure de la table `walking`
--

CREATE TABLE `walking` (
  `id` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  `Distance` decimal(10,2) NOT NULL,
  `Step` int(11) NOT NULL,
  `Comment` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `walking`
--

INSERT INTO `walking` (`id`, `Date`, `Distance`, `Step`, `Comment`) VALUES
(3, '2017-04-12 00:00:00', '8.00', 10270, 'Yes Man !!'),
(4, '2017-04-05 00:00:00', '12.00', 14000, 'Well Done !!'),
(5, '2017-04-02 00:00:00', '10.00', 11060, 'It works !'),
(8, '2017-03-02 00:00:00', '10.00', 12000, 'Wonderful'),
(9, '2017-03-01 00:00:00', '7.80', 8754, 'Peu mieux faire'),
(10, '2017-02-02 00:00:00', '10.30', 12000, 'Good'),
(14, '2017-04-13 00:00:00', '7.80', 9768, 'Pas loin !'),
(15, '2017-04-14 00:00:00', '0.80', 1000, 'Bof bof'),
(16, '2017-03-27 00:00:00', '1.20', 1600, 'bof !'),
(17, '2017-02-28 00:00:00', '4.00', 4807, 'moyen :s'),
(18, '2017-01-27 00:00:00', '5.70', 7030, 'Mouais'),
(19, '2016-08-18 00:00:00', '100.00', 130010, 'Quelle performance ;)');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `walking`
--
ALTER TABLE `walking`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `walking`
--
ALTER TABLE `walking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
