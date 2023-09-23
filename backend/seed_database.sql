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
	('Deepsh Jain', 60, 'deepshjain@example.com');


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
	("BestFriends", "A group of friends who want to save the world.");


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
	(13, 2);