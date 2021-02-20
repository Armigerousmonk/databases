const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : '1234',
  database : 'meetup'
});

connection.connect();
const paperQuery = "CREATE TABLE research_Papers(paper_id INT, paper_title Varchar(30), conference enum('yes', 'No'),publish_date Date, author_no INT)"

connection.query(paperQuery, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
})


const addAuthor = `INSERT INTO authors(
    author_no, author_name, university ,date_of_birth, h_index, gender, mentor)
    VALUES
    (1, 'Ali','Tehran','1995-05-11', 4, 'm', 'Mathilda Dickerson'),
    (2, 'Suzann','London','1985-07-12', 6, 'f', 'Lara Case'),
    (3, 'Mohsen','Tehran','1992-02-12', 10, 'm', 'Hal Moore'),
    (4, 'James','Amsterdam','1991-01-03', 8, 'm', ' Sofija Monroe'),
    (5, 'Mina','Kerman','1985-10-11', 6, 'f', 'Marsha Mullins'),
    (6, 'Maryam','New York','1978-09-10', 15, 'f', 'Rian Connelly '),
    (7, 'Rima','Delhi','1975-09-13', 12, 'f', ' Koa Randolph'),
    (8, 'Steeve','Boston','1990-05-12', 14, 'm', 'Freyja Guerrero '),
    (9, 'David','Rome','1983-12-03', 9, 'm', 'Selina Clegg '),
    (10, 'Sia','Los angles','1971-01-28', 23, 'f', 'Amin Frame'),
    (11, 'Lilian','Tehran','1963-03-26', 16, 'f', ' Bonnie Hensley'),
    (12, 'Amir','Kerman','1997-05-19', 9, 'm', 'Borys Michael '),
    (13, 'Masoud','Kerman','1995-05-26', 7, 'm', 'Marc Crosby '),
    (14, 'Sarah','Amsterdam','1997-08-30', 4, 'f', 'Yousuf Bruce '),
    (15, 'Sima','Berlin','1988-09-23', 10, 'f', 'Kristi Martin ')
    `
  connection.query(addAuthor, function(error, results) {
    if (error) throw error,
    console.log(results);
  });


const addPaper = `INSERT INTO research_papers
    (paper_id, paper_title, conference, publish_date)
    VALUES
    (1,'A Learning of Perseverance', 'yes', '2019-02-20' ),
    (2,'How I Learn', 'yes', '2019-07-12' ),
    (3,'Learning About Islam', 'yes', '2019-04-01' ),
    (4,'A Study on Learning', 'yes', '2019-08-20' ),
    (5,'Life Outside of Earth', 'yes', '2019-09-30' ),
    (6,'An Overview of the History of the Earth', 'yes', '2020-01-17' ),
    (7,'A Discussion about the Creation of the Earth', 'No', '2020-02-25' ),
    (8,'The Issue of Overpopulating the Earth', 'No', '2020-03-18' ),
    (9,'A Personal Recommendation for the Method of Exploring Mars', 'No', '2020-03-26' ),
    (10,'A Essay About Reach the Planet Mars', 'No', '2020-05-15' ),
    (11,'A Report on Mars Surface Exploration', 'No', '2020-06-18' ),
    (12,'What My House Would Look Like If I Were to Build on Mars', 'No', '2020-08-26' ),
    (13,'In Search for Proof of Life in Mars', 'yes', '2020-11-11' ),
    (14,'The Fourteenth to Nineteenth Century Art Exhibit at the High Museum of Arts', 'yes', '2021-01-06' ),
    (15,'A Report on a Visit to an Art Opening at the Regional Art Center', 'yes', '2021-01-22' ),
    (16,'A History of Modern Art and the Art of Jaques-Louis David', 'yes', '2021-02-01' ),
    (17,'An Essay on the Medieval Art and Renaissance Art', 'No', '2021-02-05' ),
    (18,'An Overview of Free Trade', 'No', '2021-03-09' ),
    (19,'An Essay on the International Trade', 'No', '2021-04-07' ),
    (20,'An Introduction to the Canadian Fur Trade', 'No', '2021-04-20' ),
    (21,'An In-depth Analysis of the Economic Situation in Iran', 'No', '2021-06-09' ),
    (22,'The Main Source of Iran's Income', 'No', '2021-08-16' ),
    (23,'The Background Information of Iran', 'yes', '2021-09-20' ),
    (24,'An Overview of Iran', '', '2021-10-28' ),
    (25,'A Look at the Middle East Country of Iran', 'yes', '2021-12-22' ),
    (26,'The State of Iran Before and After the Revolution', 'yes', '2019-11-08' ),
    (27,'The Overview of the Painting by Labille-Guiard', 'yes', '2020-08-27' ),
    (28,'An Analysis of Women on Paintings', 'No', '2021-02-24' ),
    (29,'The Inspiration from the Painting Works of Cezanne', 'No', '2021-04-30' ),
    (30,'An Analysis of the Topic of the Painting', 'No', '2019-09-12' )
`

connection.query(addPaper, function(error, results) {
    if (error) throw error;
    console.log(results);
})

connection.end();