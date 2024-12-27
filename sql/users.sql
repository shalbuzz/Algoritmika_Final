CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
)

INSERT INTO `users` VALUES (1,'admin','admin@gmail.com','admin54321');
insert into users values(2,'shalbuz','aliverdiyev05@inbox.ru', 'shalbuz10')
