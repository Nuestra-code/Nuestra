// Read Operation
// Query Operators

// Comparison operators

// greater than
db.users.find(
    {
        age: {$gt:50}
    }
);

// greater than equal to
db.users.find(
    {
        age: {$gte:50}
    }
);

// less than equal to
db.users.find(
    {
        age: {$lte:65}
    }
);
// even without the equal keyword
db.users.find(
    {
        age:65
    }
);

// less than
db.users.find(
    {
        age: {$lt:65}
    }
);

// less than equal to
db.users.find(
    {
        age: {$lte:65}
    }
);

// not equal to
db.users.find(
    {
        age: {$ne:65}
    }
);

// using in keyword
db.users.find(
    {
        lastName: {
            $in: ["Hawking", "Doe"]
        }
    }
);


// Exercise 4: Search courses with HTML and React
db.users.find(
    {
        courses: {
            $in: ["HTML", "React"]
        }
    }
);
