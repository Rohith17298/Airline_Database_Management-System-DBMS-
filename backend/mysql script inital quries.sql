-- create database node;

-- use node;

-- CREATE TABLE Customer
-- (cid INTEGER NOT NULL AUTO_INCREMENT
-- PRIMARY KEY,
-- cname CHAR(80) NOT NULL,
-- email CHAR(40) NOT NULL, UNIQUE (email),
-- address CHAR(200),
-- password CHAR(16) NOT NULL);

-- CREATE TABLE City
-- (cityid INTEGER NOT NULL AUTO_INCREMENT
-- PRIMARY KEY,
-- title CHAR(50) NOT NULL,
-- state CHAR(2) NOT NULL);

-- CREATE TABLE Flight
-- (fid INTEGER NOT NULL auto_increment
-- PRIMARY KEY,
-- fnumber INTEGER,
-- fdate DATE NOT NULL,
-- ftime TIME NOT NULL,
-- price REAL NOT NULL,
-- class INTEGER NOT NULL,
-- capacity INTEGER NOT NULL,
-- available INTEGER NOT NULL,
-- orig INTEGER NOT NULL,
-- dest INTEGER NOT NULL,
-- FOREIGN KEY (orig) REFERENCES City(cityid) ON DELETE CASCADE,
-- FOREIGN KEY (dest) REFERENCES City(cityid) ON DELETE CASCADE);

-- CREATE TABLE Reservation
-- (ordernum INTEGER NOT NULL auto_increment
-- PRIMARY KEY,
-- cid INTEGER NOT NULL,
-- dfid INTEGER NOT NULL,
-- rfid INTEGER,
-- qty INTEGER NOT NULL,
-- cardnum CHAR(16) NOT NULL,
-- cardmonth INTEGER NOT NULL,
-- cardyear INTEGER NOT NULL,
-- order_date DATE,
-- FOREIGN KEY (cid) REFERENCES Customer(cid) ON DELETE CASCADE,
-- FOREIGN KEY (dfid) REFERENCES Flight(fid) ON DELETE CASCADE,
-- FOREIGN KEY (rfid) REFERENCES Flight(fid) ON DELETE CASCADE);

-- CREATE TRIGGER reservation_date
-- AFTER INSERT ON Reservation
-- FOR EACH ROW
--  UPDATE Reservation
--  SET order_date = CURDate()
--  WHERE ordernum=NEW.ordernum;

-- CREATE TRIGGER reservation_davail
-- AFTER INSERT ON Reservation
-- FOR EACH ROW
-- UPDATE Flight X
-- SET available = ((SELECT available
-- FROM Flight F
-- WHERE F.fid=New.dfid)-New.qty)
-- WHERE X.fid=New.dfid;

-- CREATE TRIGGER reservation_ravail
-- AFTER INSERT ON Reservation
-- FOR EACH ROW
-- UPDATE Flight X
-- SET available = ((SELECT available
-- FROM Flight F
-- WHERE F.fid=New.rfid)-New.qty)
-- WHERE X.fid=New.rfid;

-- DROP trigger reservation_date;
  -- DROP trigger reservation_davail;
--   DROP trigger reservation_ravail;

-- Updated triggers
-- CREATE TRIGGER reservation_date
-- BEFORE INSERT ON Reservation
-- FOR EACH ROW
--  SET NEW.order_date = CURDate();

-- CREATE TRIGGER reservation_davail
-- AFTER INSERT ON Reservation
-- FOR EACH ROW
-- UPDATE Flight AS X
-- SET X.available = X.available-New.qty
-- WHERE X.fid=New.dfid;

-- CREATE TRIGGER reservation_ravail
-- AFTER INSERT ON Reservation
-- FOR EACH ROW
-- UPDATE Flight AS X
-- SET X.available = X.available-New.qty
-- WHERE X.fid=New.rfid;
