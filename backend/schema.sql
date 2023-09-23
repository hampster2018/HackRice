CREATE TABLE
IF NOT EXISTS users
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	points INTEGER NOT NULL DEFAULT 0,
	email TEXT UNIQUE
);

CREATE TABLE
IF NOT EXISTS groups
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	description TEXT NOT NULL
);

CREATE TABLE
IF NOT EXISTS users_groups
(
	user_id INTEGER NOT NULL REFERENCES users
(id),
	group_id INTEGER NOT NULL REFERENCES groups
(id),
	PRIMARY KEY
(user_id, group_id)
);

CREATE TABLE
IF NOT EXISTS events
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	[name] TEXT NOT NULL,
	[description] TEXT NOT NULL,
	[start_time] TEXT NOT NULL,
	[end_time] TEXT NOT NULL,
	[date] DATE NOT NULL,
	[user_id] INTEGER NOT NULL REFERENCES users
(id),
	[carbon_points] INTEGER,
	[completed] BOOLEAN DEFAULT 0
);
