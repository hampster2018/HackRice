INSERT INTO users
	(name, points)
VALUES
	('John Doe', 100),
	('Jane Doe', 200),
	('Bob Smith', 50),
	('Alice Johnson', 300),
	('Mike Brown', 75),
	('Sara Lee', 150),
	('Tom Jones', 25),
	('Emily Davis', 250),
	('David Lee', 175),
	('Karen Wilson', 125),
	('George Roberts', 10);


INSERT INTO events
	(user_id, name, date, start_time, end_time, description)
SELECT id, 'Pick up prescription', CURRENT_DATE, "09:00", "09:30", 'Pick up prescription from the pharmacy.'
FROM users
WHERE name = 'John Doe'
LIMIT 1;

INSERT INTO events
	(user_id, name, date, start_time, end_time, description)
SELECT id, 'Do laundry', CURRENT_DATE, "09:30", "10:30", 'Do laundry.'
FROM users
WHERE name = 'John Doe'
LIMIT 1;

INSERT INTO events
	(user_id, name, date, start_time, end_time, description)
SELECT id, 'Go to the gym', CURRENT_DATE, "10:30", "11:30", 'Go to the gym.'
FROM users
WHERE name = 'John Doe'
LIMIT 1;