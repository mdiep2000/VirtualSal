DROP DATABASE IF EXISTS FinalProject;
CREATE DATABASE FinalProject;

-- all code that follows is on the below database
USE FinalProject;


-- Holds Information about the user info
CREATE TABLE UserRegistry
(
    userID INT(5) PRIMARY KEY NOT NULL auto_increment,
    fName VARCHAR(20) NOT NULL,
    lName VARCHAR(20) NULL,
    username VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(40) NOT NULL UNIQUE,
    pw VARCHAR(20) NOT NULL
);


INSERT INTO UserRegistry
    (userID, fName, lName, username, email, pw)
VALUES
    (1, 'Melina', 'Eliasyan', 'Meliasyan', 'eliasyan@usc.edu', 'password');
INSERT INTO UserRegistry
    (userID, fName, lName, username, email, pw)
VALUES
    (2, 'Josh', 'Meidl', 'Jmeidl', 'jmeidl@usc.edu', 'password2');
INSERT INTO UserRegistry
    (userID, fName, lName, username, email, pw)
VALUES
    (3, 'Mindy', 'Diep', 'MDiep', 'mindydie@usc.edu', 'password3');
INSERT INTO UserRegistry
    (userID, fName, lName, username, email, pw)
VALUES
    (4, 'Ahmed', 'Yacoob', 'AYacoob', 'ayacoob@usc.edu', 'password4');
INSERT INTO UserRegistry
    (userID, fName, lName, username, email, pw)
VALUES
    (5, 'Yiwen', 'Wang', 'YWang', 'wang713@usc.edu', 'password5');
INSERT INTO UserRegistry
    (userID, fName, lName, username, email, pw)
VALUES
    (6, 'Jafer', 'Ahmed', 'JAhmed', 'jmahmed@usc.edu', 'password6');


-- Holds information about the user's class schedule
CREATE TABLE Schedule
(
    userID INT(5) NOT NULL,
    semester VARCHAR(6) NOT NULL,
    term INT(5) NOT NULL,
    courseName VARCHAR(30) NOT NULL,
    professorName VARCHAR(30) NOT NULL,
    sectionNumber INT(5) NOT NULL,
    FOREIGN KEY (userID) REFERENCES UserRegistry(userID)
);

INSERT INTO Schedule
    (userID, semester, term, courseName, professorName, sectionNumber)
VALUES
    (1, 'Spring', 2020, 'CSCI 201', 'Miller', 12345);
INSERT INTO Schedule
    (userID, semester, term, courseName, professorName, sectionNumber)
VALUES
    (1, 'Spring', 2020, 'CSCI 270', 'Shamsian', 67890);

CREATE TABLE CourseRegistry
(
    courseName VARCHAR(30) NOT NULL,
    courseDescription VARCHAR(150) NULL,
    semester VARCHAR(6) NOT NULL,
    term INT(5) NOT NULL,
    professorName VARCHAR(30) NOT NULL,
    sectionNumber INT(5) NOT NULL
);

INSERT INTO CourseRegistry
    (courseName, courseDescription,semester,term,professorName,sectionNumber)
VALUES
    ('CSCI 201', 'Principles of Software Development','Spring','2020','Miller','12345');
INSERT INTO CourseRegistry
    (courseName, courseDescription,semester,term,professorName,sectionNumber)
VALUES
    ('CSCI 270', 'Introduction to Algorithms & Theory of Computing','Spring','2020','Shamsian','67890');
    


    
/*
INSERT INTO CourseRegistry
    (courseName, courseDescription)
VALUES
    ('CSCI 103', 'Introduction to Programming');
INSERT INTO CourseRegistry
    (courseName, courseDescription)
VALUES
    ('CSCI 104', 'Data Structures & Object Oriented Design');
INSERT INTO CourseRegistry
    (courseName, courseDescription)
VALUES
    ('CSCI 170', 'Discrete Methods in Computer Science');
*/

-- Holds information about a question the user asks
-- Tied to a specific course by the courseName field
CREATE TABLE Question
(
    creationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    courseName VARCHAR(30) NOT NULL,
    posterID INT(5) NOT NULL,
    questionID INT(5) PRIMARY KEY AUTO_INCREMENT,
    questionTitle VARCHAR(50) NOT NULL,
    questionBody VARCHAR(200) NULL,
    FOREIGN KEY (posterID) REFERENCES UserRegistry(userID)

);

INSERT INTO Question
    (creationDate, courseName, posterID, questionID, questionTitle, questionBody)
VALUES
    (CURRENT_TIMESTAMP, 'CSCI 201', 1, 1, 'forum', 'whats up?');
INSERT INTO Question
    (creationDate, courseName, posterID, questionID, questionTitle, questionBody)
VALUES
    (CURRENT_TIMESTAMP, 'CSCI 201', 1, 2, 'forum', 'other exanoke?');


-- Holds replies to a specific question
CREATE TABLE Answer
(
    questionID INT(5) NOT NULL,
    userID INT(5) NOT NULL,
    answerBody VARCHAR(200) NULL,
    upvotes INT(5) NULL,
    downvotes INT(5) NULL,
    FOREIGN KEY (userID) REFERENCES UserRegistry(userID),
    FOREIGN KEY (questionID) REFERENCES Question(questionID)
);

INSERT INTO Answer
    (questionID, userID, answerBody, upvotes, downvotes)
VALUES
    (1, 1, 'nothing much', 3, 2);
INSERT INTO Answer
    (questionID, userID, answerBody, upvotes, downvotes)
VALUES
    (1, 2, 'test', 0, 3);
INSERT INTO Answer
    (questionID, userID, answerBody, upvotes, downvotes)
VALUES
    (2, 1, 'example', 1, 3);
INSERT INTO Answer
    (questionID, userID, answerBody, upvotes, downvotes)
VALUES
    (2, 2, 'example', 3, 1);





/**Review posted by the user tied to a specific course by the courseName field
--We could make the courseName reference the CourseRegistry table? **/
CREATE TABLE Review
(
    posterID INT(5) NOT NULL,
    courseName VARCHAR(100) NOT NULL,
    professor VARCHAR(50) NOT NULL,
    workloadVal INT(5) NOT NULL,
    clarity INT(5) NOT NULL,
    comment VARCHAR(200) NULL,
    FOREIGN KEY (posterID) REFERENCES UserRegistry(userID)
);

INSERT INTO  Review
    (posterID, courseName, professor, workloadVal, clarity, comment)
VALUES
    (1, 'CSCI-104 Data Structures and Object Oriented Programming', 'Cote', 3, 4, 'good prof');