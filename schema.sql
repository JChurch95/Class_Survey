CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    topic_name TEXT
);

CREATE TABLE rankings (
    id SERIAL PRIMARY KEY,
    ranking_name TEXT,
    ranking_value INTEGER
);
