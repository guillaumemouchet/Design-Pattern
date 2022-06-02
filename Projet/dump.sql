-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `sandwich_maker`;
CREATE DATABASE `sandwich_maker` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `sandwich_maker`;

DROP TABLE IF EXISTS `command`;
CREATE TABLE `command` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `ingredient`;
CREATE TABLE `ingredient` (
    `name` char(50) NOT NULL,
    `price` float NOT NULL,
    PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `ingredient` (`name`, `price`) VALUES 
('Bacon', 1.4),
('Cheese', 0.7),
('Tomato', 0.4),
('Green Lettuce', 0.2),
('Horse steak', 3.2);

DROP TABLE IF EXISTS `sandwich`;
CREATE TABLE `sandwich` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;