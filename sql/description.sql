CREATE TABLE `coin_description` (
  `des_id` int NOT NULL AUTO_INCREMENT,
  `coin_id` int NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`des_id`),
  KEY `FK_CoinDescriptionCoinDetails_idx` (`coin_id`),
  CONSTRAINT `FK_CoinDescriptionCoinDetails` FOREIGN KEY (`coin_id`) REFERENCES `coins` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)










