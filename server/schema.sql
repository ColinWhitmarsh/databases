DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--    Describe your table here.
-- );

/* Create other tables and define schemas for them here! */

 -- ---
 -- Globals
 -- ---

 -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
 -- SET FOREIGN_KEY_CHECKS=0;

 -- ---
 -- Table 'users'
 -- 
 -- ---

 DROP TABLE IF EXISTS `users`;
    
 CREATE TABLE `users` (
   `id` INTEGER(3) AUTO_INCREMENT,
   `name` VARCHAR(20) NULL DEFAULT NULL,
   PRIMARY KEY (`id`)
 );

 -- ---
 -- Table 'rooms'
 -- 
 -- ---

 DROP TABLE IF EXISTS `rooms`;
    
 CREATE TABLE `rooms` (
   `id` INTEGER(3) AUTO_INCREMENT,
   `name` VARCHAR(30) NULL DEFAULT NULL,
   PRIMARY KEY (`id`)
 );

 -- ---
 -- Table 'messages'
 -- 
 -- ---

 DROP TABLE IF EXISTS `messages`;
    
 CREATE TABLE `messages` (
   `id` INTEGER AUTO_INCREMENT,
   `text` VARCHAR(255) DEFAULT NULL,
   `room_id` INTEGER(3) NULL DEFAULT NULL,
   `user_id` INTEGER(3) NULL DEFAULT NULL,
   PRIMARY KEY (`id`)
 );

 -- ---
 -- Table 'user_rooms'
 -- 
 -- ---

 DROP TABLE IF EXISTS `user_rooms`;
    
 CREATE TABLE `user_rooms` (
   `user_id` INTEGER(3) NULL DEFAULT NULL,
   `room_id` INTEGER(3) NULL DEFAULT NULL
 );

 -- ---
 -- Foreign Keys 
 -- ---

 ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);
 ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
 ALTER TABLE `user_rooms` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
 ALTER TABLE `user_rooms` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);