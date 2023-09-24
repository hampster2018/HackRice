INSERT INTO users
	(name, points, email)
VALUES
	('Abigail Smith', 3890, 'abigailsmith@example.com'),
	('AJ Soud', 2000, 'ajsoud@example.com'),
	('Zain Adil', 500, 'zainadil@example.com'),
	('Syed Husain', 3000, 'syedhusain@example.com'),
	('Jun Too', 750, 'juntoo@example.com'),
	('Robert Chadwick', 1500, 'robertchadwick@example.com'),
	('Sneha Poddar', 250, 'snehapoddar@example.com'),
	('Zohaib Imam', 2500, 'zohaibimam@example.com'),
	('Isabel Zhao', 1750, 'isabelzhao@example.com'),
	('John Coleman', 1250, 'johncoleman@example.com'),
	('Kareem El-Sadi', 1250, 'kareemelsadi@example.com'),
	('Austin Sun', 2750, 'austinsun@example.com'),
	('Karan Gupta', 100, 'karangupta@example.com'),
	('Michael Mancuso', 800, 'michaelmancuso@example.com'),
	('Nicolae Sapoval', 900, 'nicolaesapoval@example.com'),
	('Wil Thomason', 700, 'wilthomason@example.com'),
	('Deepsh Jain', 600, 'deepshjain@example.com'),
	('Alice Smith', 1000, 'alicesmith@example.com'),
	('Bob Johnson', 500, 'bobjohnson@example.com'),
	('Charlie Brown', 2000, 'charliebrown@example.com'),
	('David Lee', 750, 'davidlee@example.com'),
	('Emily Chen', 1500, 'emilychen@example.com'),
	('Frank Wang', 250, 'frankwang@example.com'),
	('Grace Kim', 3000, 'gracekim@example.com'),
	('Henry Liu', 1250, 'henryliu@example.com'),
	('Isabella Davis', 1750, 'isabelladavis@example.com'),
	('Jackie Chan', 2500, 'jackiechan@example.com'),
	('Kevin Lee', 1250, 'kevinlee@example.com'),
	('Linda Nguyen', 2750, 'lindanguyen@example.com'),
	('Michael Brown', 100, 'michaelbrown@example.com'),
	('Nancy Wilson', 800, 'nancywilson@example.com'),
	('Oliver Green', 900, 'olivergreen@example.com'),
	('Peter Kim', 700, 'peterkim@example.com'),
	('Queenie Chen', 600, 'queeniechen@example.com'),
	('Ryan Lee', 1500, 'ryanlee@example.com'),
	('Samantha Lee', 2000, 'samanthalee@example.com'),
	('Tommy Lee', 1000, 'tommylee@example.com');

INSERT INTO events
	(user_id, name, date, start_time, end_time, description, carbon_points)
SELECT id, 'Pick up prescription', CURRENT_DATE, "09:00", "09:30", 'Pick up prescription from the pharmacy.', 5
FROM users
WHERE users.id = 1
LIMIT 1;

INSERT INTO events
	(user_id, name, date, start_time, end_time, description, carbon_points)
SELECT id, 'Do laundry', CURRENT_DATE, "09:30", "10:30", 'Do laundry.', 10
FROM users
WHERE users.id = 1
LIMIT 1;

INSERT INTO events
	(user_id, name, date, start_time, end_time, description, carbon_points)
SELECT id, 'Go to the gym', CURRENT_DATE, "10:30", "11:30", 'Go to the gym.', 80
FROM users
WHERE users.id = 1
LIMIT 1;

INSERT INTO groups
	(name, description)
VALUES
	("SLB", "One of the most climate-focused companies in the world."),
	("BestFriends", "A group of friends who want to save the world."),
	("Green Team", "A group dedicated to promoting sustainable practices."),
	("Eco Warriors", "A group of activists fighting for the environment.");

-- Put John Doe in both groups
INSERT INTO users_groups
	(user_id, group_id)
VALUES
	(1, 1),
	(1, 2),
	(2, 1),
	(3, 2),
	(4, 1),
	(4, 2),
	(8, 1),
	(9, 1),
	(10, 1),
	(11, 2),
	(12, 2),
	(13, 2),
	(14, 2),
	(15, 2),
	(16, 2),
	(17, 2),
	(18, 1),
	(19, 1),
	(20, 1),
	(21, 1),
	(22, 1),
	(23, 1);

INSERT INTO carbon_samples
	(description, carbon_points)
VALUES
	("Driving 1 mile", 1),
	("Washing and drying laundry", 8),
	("Eating a 1/4 pound burger", 6),
	("Taking a 5 minute shower", 4),
	("Using a microwave for 1 hour", 1),
	("Using a dishwasher for 1 hour", 1),
	("Using a clothes dryer for 1 hour", 4),
	("Using a vacuum cleaner for 1 hour", 2),
	("Using a computer for 1 hour", 4),
	("Using a television for 1 hour", 2),
	("Using an oven for 1 hour", 3),
	("Using a hair dryer for 1 hour", 1),
	("Using a ceiling fan for 10 hours", 1),
	("Using a space heater for 1 hour", 3);
