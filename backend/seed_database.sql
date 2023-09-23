INSERT INTO users
	(name, points)
VALUES
	('John Doe', 1),
	('AJ Soud', 200),
	('Zain Adil', 50),
	('Syed Husain', 300),
	('Jun Too', 75),
	('Robert Chadwick', 150),
	('Sneha Poddar', 25),
	('Zohaib Imam', 250),
	('Isabel Zhao', 175),
	('John Coleman', 125),
	('Kareem El-Sadi', 125),
	('Austin Sun', 275),
	('Karan Gupta', 10),
	('Michael Mancuso', 80),
	('Nicolae Sapoval', 90),
	('Wil Thomason', 70),
	('Deepsh Jain', 60);


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
	(4, 2);