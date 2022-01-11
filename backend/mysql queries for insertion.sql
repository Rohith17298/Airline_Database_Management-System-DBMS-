-- use  node;

-- insert into city values(1,'Chicago','IL');
-- insert into city values(2,'NYC','Ny');
-- insert into city values(3,'Dallas','Tx');
-- insert into city values(4,'LA','CA');
-- insert into city values(5,'Tempe','Fl');
-- insert into city values(6,'Seattle','Wc');


-- insert into Customer values(11,'Jayanth','Jayanth@gmail.com','California','Sai');
-- insert into Customer values(12,'Dilip','Dilip@gmail.com','Kansas','passworddilip');
-- insert into Customer values(13,'Jayanth','Jayanth@gmail.com','Hammond','jayanth');
-- insert into Customer values(14,'Chaitanya','Chaitanya@gmail.com','Allagadda','Chaitu');
-- insert into Customer values(15,'Hareesh','Hareesh@gmail.com','Warangal','hareesh');
-- insert into Customer values(16,'Sai','Sai@gmail.com','Nandhyal','Sai');

-- insert into Flight values(101,121131,'2021-04-28','12:00:00',1200,1,10,10,1,2);
-- insert into Flight values(102,3445,'2021-04-28','18:00:00',1300,1,70,70,1,2);
-- insert into Flight values(103,123340,'2021-04-28','12:00:00',1400,2,40,40,1,2);
-- insert into Flight values(104,3445,'2021-04-28','18:00:00',1500,2,30,30,2,1);
-- insert into Flight values(105,124540,'2021-04-28','12:00:00',1600,2,60,60,1,2);
-- insert into Flight values(106,454,'2021-04-28','18:00:00',1700,3,30,30,2,1);
-- insert into Flight values(107,45,'2021-04-28','12:00:00',1800,1,50,50,1,2);
-- insert into Flight values(108,4354,'2021-04-28','18:00:00',1900,2,20,20,2,1);

-- select fid, fnumber, fdate, ftime, orig, dest, class, price
--          FROM Flight
--         WHERE find_in_set(fid,"101,112")
--         AND fdate = '2021-04-28'
--         ORDER BY ftime