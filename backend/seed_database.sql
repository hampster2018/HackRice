INSERT INTO users
	(name, points, email)
VALUES
	('John Doe', 1, 'johndoe@example.com'),
	('AJ Soud', 200, 'ajsoud@example.com'),
	('Zain Adil', 50, 'zainadil@example.com'),
	('Syed Husain', 300, 'syedhusain@example.com'),
	('Jun Too', 75, 'juntoo@example.com'),
	('Robert Chadwick', 150, 'robertchadwick@example.com'),
	('Sneha Poddar', 25, 'snehapoddar@example.com'),
	('Zohaib Imam', 250, 'zohaibimam@example.com'),
	('Isabel Zhao', 175, 'isabelzhao@example.com'),
	('John Coleman', 125, 'johncoleman@example.com'),
	('Kareem El-Sadi', 125, 'kareemelsadi@example.com'),
	('Austin Sun', 275, 'austinsun@example.com'),
	('Karan Gupta', 10, 'karangupta@example.com'),
	('Michael Mancuso', 80, 'michaelmancuso@example.com'),
	('Nicolae Sapoval', 90, 'nicolaesapoval@example.com'),
	('Wil Thomason', 70, 'wilthomason@example.com'),
	('Deepsh Jain', 60, 'deepshjain@example.com'),
	('Alice Smith', 100, 'alicesmith@example.com'),
	('Bob Johnson', 50, 'bobjohnson@example.com'),
	('Charlie Brown', 200, 'charliebrown@example.com'),
	('David Lee', 75, 'davidlee@example.com'),
	('Emily Chen', 150, 'emilychen@example.com'),
	('Frank Wang', 25, 'frankwang@example.com'),
	('Grace Kim', 300, 'gracekim@example.com'),
	('Henry Liu', 125, 'henryliu@example.com'),
	('Isabella Davis', 175, 'isabelladavis@example.com'),
	('Jackie Chan', 250, 'jackiechan@example.com'),
	('Kevin Lee', 125, 'kevinlee@example.com'),
	('Linda Nguyen', 275, 'lindanguyen@example.com'),
	('Michael Brown', 10, 'michaelbrown@example.com'),
	('Nancy Wilson', 80, 'nancywilson@example.com'),
	('Oliver Green', 90, 'olivergreen@example.com'),
	('Peter Kim', 70, 'peterkim@example.com'),
	('Queenie Chen', 60, 'queeniechen@example.com'),
	('Ryan Lee', 150, 'ryanlee@example.com'),
	('Samantha Lee', 200, 'samanthalee@example.com'),
	('Tommy Lee', 100, 'tommylee@example.com');

INSERT INTO events
	(user_id, name, date, start_time, end_time, description, carbon_points)
SELECT id, 'Pick up prescription', CURRENT_DATE, "09:00", "09:30", 'Pick up prescription from the pharmacy.', 5
FROM users
WHERE name = 'John Doe'
LIMIT 1;

INSERT INTO events
	(user_id, name, date, start_time, end_time, description, carbon_points)
SELECT id, 'Do laundry', CURRENT_DATE, "09:30", "10:30", 'Do laundry.', 10
FROM users
WHERE name = 'John Doe'
LIMIT 1;

INSERT INTO events
	(user_id, name, date, start_time, end_time, description, carbon_points)
SELECT id, 'Go to the gym', CURRENT_DATE, "10:30", "11:30", 'Go to the gym.', 8
FROM users
WHERE name = 'John Doe'
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
