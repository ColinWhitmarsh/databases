DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER(3) AUTO_INCREMENT,
  `name` VARCHAR(20) NULL DEFAULT NULL UNIQUE,
  PRIMARY KEY (`id`)
);

 DROP TABLE IF EXISTS `messages`;
    
 CREATE TABLE `messages` (
  `id` INTEGER(3) AUTO_INCREMENT,
  `text` VARCHAR(255) DEFAULT NULL,
  `roomname` VARCHAR(30) NULL DEFAULT NULL, 
  `user_id` INTEGER(3) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
 );

 DROP TABLE IF EXISTS `user_rooms`;
    
 ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
