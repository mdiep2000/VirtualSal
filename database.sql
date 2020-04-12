DROP DATABASE IF EXISTS FinalProject;
CREATE DATABASE FinalProject;

-- all code that follows is on the below database
USE FinalProject;


-- Holds Information about the user info
CREATE TABLE UserRegistry(
	userID INTEGER PRIMARY KEY AUTO_INCREMENT,
    fName VARCHAR(20) NOT NULL,
    LName VARCHAR(20) NULL,
    username VARCHAR(20) NOT NULL UNIQUE,
    pw VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE
);

-- Holds information about the user's class schedule
CREATE TABLE Schedule(
	userID INTEGER NOT NULL,
    semester VARCHAR(6) NOT NULL,
    courseName VARCHAR(30) NOT NULL,
    professorName VARCHAR(30) NOT NULL,
    sectionNumber INTEGER NOT NULL,
    year INTEGER NOT NULL,
    FOREIGN KEY (userID) REFERENCES UserRegistry(userID)
);

CREATE TABLE CourseRegistry (
	courseName VARCHAR(30) NOT NULL,
    courseDescription VARCHAR(150) NULL
);


-- Holds information about a question the user asks
-- Tied to a specific course by the courseName field
CREATE TABLE Question(
	creationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
	courseName VARCHAR(30) NOT NULL,
    posterID INTEGER NOT NULL,
    questionID INTEGER PRIMARY KEY AUTO_INCREMENT,
	questionTitle VARCHAR(50) NOT NULL,
    questionBody VARCHAR(200) NULL,
    FOREIGN KEY (posterID) REFERENCES UserRegistry(userID)

);

-- Holds replies to a specific question
CREATE TABLE Answer(
	questionID INTEGER NOT NULL,
    userID INTEGER NOT NULL,
    answerBody VARCHAR(200) NULL,
    upvotes INTEGER NULL,
    downvotes INTEGER NULL,
    FOREIGN KEY (userID) REFERENCES UserRegistry(userID),
    FOREIGN KEY (questionID) REFERENCES Question(questionID)
);

