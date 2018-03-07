-- Query all of the entries in the Genre table
SELECT * FROM Genre

-- Using the INSERT statement, add one of your favorite artists to the Artist table.
INSERT INTO Artist
VALUES (null, "Chevelle", 1995)

-- Using the INSERT statement, add one, or more, albums by your artist to the Album table.
INSERT INTO Album
VALUES (null, "This Type of Thinking (Could Do Us In)", 2004, 46, "Epic", (SELECT ArtistId from Artist where artistName = "Chevelle"), 4)

-- Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT INTO Song
VALUES (null, "The Clincher", 343, 2004, (SELECT GenreId from Album a where Title = "This Type of Thinking (Could Do Us In)"), (SELECT ArtistId from Album a where Title = "This Type of Thinking (Could Do Us In)"), (SELECT AlbumId from Album a where Title = "This Type of Thinking (Could Do Us In)"))

or

INSERT INTO Song
SELECT null, "The Clincher", 343, 2004, g.gendreId, ar.ArtistID, al.AlbumId
FROM Artist ar, Genre g, Album al
WHERE ar.ArtistName = "Chevelle"
and g.label = "Rock"
and al.Title = "This Type of Thinking (Could Do Us In)"


-- -- Write a SELECT query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the LEFT JOIN keyword sequence to connect the tables, and the WHERE keyword to filter the results to the album and artist you added. Here is some more info on joins that might help.

SELECT Song.Title "Song Title", Album.Title "Album Title", Artist.ArtistName "ArtistName"
FROM Song
JOIN Album ON Album.ArtistId = Song.ArtistId
JOIN Artist ON Artist.ArtistId = Song.ArtistId
WHERE Artist.ArtistName = "Chevelle"

-- Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT COUNT(Song.SongId) "Song Count", Album.Title "Album Name"
FROM Song
JOIN Album WHERE Album.AlbumId = Song.AlbumId
GROUP BY Album.Title

-- Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT COUNT(Song.SongId) "Song Count", Artist.ArtistName "Artist Name"
FROM Song
JOIN Artist WHERE Song.ArtistId = Artist.ArtistId
GROUP BY Artist.ArtistName


-- Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT COUNT(Song.SongId) "Song Count", Genre.Label
FROM Song
JOIN Genre
WHERE Song.GenreId = Genre.GenreId
GROUP BY Genre.Label

-- Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.

SELECT MAX(Album.AlbumLength) "Longest Album Length", Album.title "Album Title"
FROM Album

-- Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.

SELECT MAX(Song.SongLength) "Longest Song Length", Song.title "Song Title"
FROM Song

-- Modify the previous query to also display the title of the album.

SELECT MAX(Song.SongLength) "Longest Song Length", Song.title "Song Title", Album.Title "From Album"
FROM Song
JOIN Album WHERE Album.AlbumId = Song.AlbumId