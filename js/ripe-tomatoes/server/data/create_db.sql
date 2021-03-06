DROP TABLE IF EXISTS "movie";
DROP TABLE IF EXISTS "director";
DROP TABLE IF EXISTS "genre";

-- add timestamp to movie table
-- ALTER TABLE movie ADD COLUMN date_added timestamp with time zone DEFAULT now();

-- create table director
CREATE TABLE IF NOT EXISTS "director" (
	"id" SERIAL PRIMARY KEY,
    "director_name" TEXT NOT NULL	
);
-- create table movie
CREATE TABLE IF NOT EXISTS "movie" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "director_id" INT REFERENCES "director"("id"),
    --genre1_id INT REFERENCES "genre"("id"),
    --genre2_id INT REFERENCES "genre"("id"),
    --genre3_id INT REFERENCES "genre"("id"),
    "released" BOOLEAN DEFAULT TRUE,
    "release_year" INT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "cover" TEXT NOT NULL
    "date_added" timestamp with time zone DEFAULT now()
);

-- create table genre
CREATE TABLE IF NOT EXISTS "genre" (
	"id" SERIAL PRIMARY KEY,
	"genre_name" TEXT
);

-- association table for movie and genres
CREATE TABLE IF NOT EXISTS "movie_has_genre" (
  "movie_id" integer REFERENCES "movie"("id"),
  "genre_id" integer REFERENCES "genre" ("id"),
  PRIMARY KEY ("movie_id", "genre_id")
);

-- creating a director
INSERT INTO "director" ("director_name") VALUES ('Christopher Nolan');

-- adding some genres
INSERT INTO "genre" ("genre_name") VALUES ('sci-fi');

-- adding a movie
INSERT INTO "movie" ("title", "director_id", "year", "synopsis", "cover") VALUES ('Interstellar', 1, 2014, 'In Earth''s future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth''s population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind''s new home.', 'https://resizing.flixster.com/fcEyoJOE0FHXmHlEVIbW106jyf0=/206x305/v2/https://flxt.tmsimg.com/assets/p10543523_p_v13_as.jpg');