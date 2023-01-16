CREATE DATABASE enrollment_db;

USE enrollment_db;

CREATE TABLE students ( 
	id INT NOT NULL AUTO_INCREMENT, 
	student_name VARCHAR (50) NOT NULL, 
	PRIMARY KEY (id) 
);

CREATE TABLE teachers (
    id INT NOT NULL AUTO_INCREMENT,
    teacher_name VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE courses (
    id INT NOT NULL AUTO_INCREMENT,
    course_name VARCHAR (50) NOT NULL,
    teacher_id INT NOT NULL,
    PRIMARY KEY (id),
    
    CONSTRAINT fk_courses_teacher_id
    	FOREIGN KEY (teacher_id) REFERENCES teachers (id)
    	ON UPDATE CASCADE
    	ON DELETE RESTRICT
);

CREATE TABLE student_courses (
    id INT NOT NULL AUTO_INCREMENT,
    course_id INT NOT NULL,
    student_id INT NOT NULL,
    PRIMARY KEY (id),
    
    CONSTRAINT fk_student_courses_course_id
    	FOREIGN KEY (course_id) REFERENCES courses (id)
    	ON UPDATE CASCADE
    	ON DELETE RESTRICT,
    
    CONSTRAINT fk_student_courses_student_id
    	FOREIGN KEY (student_id) REFERENCES students (id)
    	ON UPDATE CASCADE
    	ON DELETE RESTRICT
);