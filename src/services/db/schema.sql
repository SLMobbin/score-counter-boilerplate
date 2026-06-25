-- Players table
CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Matches table
CREATE TABLE matches (
    match_id SERIAL PRIMARY KEY,
    sport VARCHAR(50) NOT NULL, -- e.g., padel, tennis, basketball
    start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP,
    status VARCHAR(20) DEFAULT 'ongoing' -- ongoing, finished
);

-- Scores table
CREATE TABLE scores (
    score_id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(match_id) ON DELETE CASCADE,
    player_id INT REFERENCES players(player_id) ON DELETE CASCADE,
    points INT DEFAULT 0,
    sets INT DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Match history table
CREATE TABLE match_history (
    history_id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(match_id) ON DELETE CASCADE,
    event VARCHAR(255), -- e.g., "Player A scored a point"
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
