// CRUD Operations

// Create
    // insertOne - it inserts one document at a time
    // insertMany - it inserts multiple documents at a time

/*
    Syntax:
    db.collectionName.insertOne({object})
    db - default
    insertOne - built in method

    - Javascript Comparison
    -object.objewctName.method({})
*/

db.users.insertOne(
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 21,
        contact: {
            phone: "87654321",
            email: "janedoe@mail.com"
        },
        courses: [ "CSS", "JavaScript", "PHP"]
           
        
    }
);

// insertMany()
/*
    Syntax:
    db.collectionName.insertmany([{objectA}, {objectB}])
*/

db.users.insertMany([
    {
        firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@mail.com"
        },
        courses: [ "Phyton", "React", "PHP"],
        department: "none"
    }, 
    
    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "87654321",
            email: "neilarmstrong@mail.com"
        },
        courses: [ "React", "Laravel", "SaSS"],
        department: "none"
    }
]);

// Read/Update
/*
    Syntax:
    db.collectionName.find()
        query, projection
    db.collectionName.find({field:value});
*/

db.users.find();
// returns all documents

// using a single query - projection is case sensitive
// returns document/s that passes the query/filter
db.users.find({firstName:"Stephen"});

// using multiple query parameters
// this will depend on the key value pairs declared(inserted) inside the collections
/*
    Syntax:
    db.collectionName.find({fieldA:valueA, fieldB:valueB})
*/
db.user.find({
    lastName: "Armstrong",
    age: 82
});

// update()
/*
    Syntax:
    db.collectionName.updateOne(
        {criteria},
        {$set:
            {field:value}
        }
    );
    db.collectionName.updateMany();
*/
db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "0000000",
        email: "test@mail.com",
    },
    courses: [],
    department: "none"
});

// update a single document
db.users.updateOne(
    {
        firstName: "Test",
    },
    {
        $set: {
            firstName: "Bill",
            lastName: "Gates",
            age: 65,
            contact: {
                phone: "123456789",
                email: "bill@mail.com",
            },
            courses: ["PHP","Laravel", "HTML"],
            department: "Operations",
            status: "active"
        }
    }
);

// Exercise 1: Update the document with "Jane" with field department value = none
// use insertOne method
db.users.updateOne({firstName: "Jane"}, {$set:{department: "none"}});


// update multiple documents at once
/*
    Syntax: 
    db.collectionName.updateMany(
        {criteria},
        {$set:
            {field:value}
        }
    );
*/
db.users.updateMany(
    {
        department: "none"
    },
    {
        $set: {
            department: "HR"
        }
    }
);

// insert another document for replaceOne
db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "0000000",
        email: "test@mail.com",
    },
    courses: [],
    department: "none"
});

// replacing the whole document if necessary
db.users.replaceOne(
    {
    firstName: "Test"
    },
    {
        firstName: "Billy",
        lastName: "Crawford",
        age: 35,
        contact: {
            phone: "123456789",
            email: "billycrawford@mail.com",
    },
    courses: ["React", "Node", "Express"],
    department: "Finance"
    }
);

// Exercise 2: Update the status field of Bill Gates, you will use the keyword $unset
// CLUE: updateOne()
// please share what is your observation when we query and use $unset. (status was removed when we use the $unset keyword)
db.users.updateOne(
    {
        firstName: "Bill"
    },
    {
        $unset: {
            status: "active"
        }
    }
);

// DELETE
    // deleteOne
    // deleteMany

// deleteOne
/*
    Syntax:
    db.collectionName.deleteOne({criteria});
*/

// create a default document in a collection
db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "0000000",
        email: "test@mail.com",
    },
    courses: [],
    department: "none"
});
//using deleteOne()
db.users.deleteOne(
    {
        firstName: "Test"
    }
);

// delete multiple documents
// be careful using deleteMany() metho. If no search criteria is provided  it will delete all documents in a database.
// do not use db.collection.deleteMany(); (na walang criteria)
db.users.deleteMany({department: "HR"});

// Q: How to add back deleted documents?
db.users.insertMany(
    [
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 21,
            contact: {
                phone: "87654321",
                email: "janedoe@mail.com"
            },
            courses: [ "CSS", "JavaScript", "PHP"],
            department: "HR"    
        },
        {
            firstName: "Stephen",
            lastName: "Hawking",
            age: 76,
            contact: {
                phone: "87654321",
                email: "stephenhawking@mail.com"
            },
            courses: [ "Phyton", "React", "PHP"],
            department: "HR"
        },
        {
            firstName: "Neil",
            lastName: "Armstrong",
            age: 82,
            contact: {
                phone: "87654321",
                email: "neilarmstrong@mail.com"
            },
            courses: [ "React", "Laravel", "SaSS"],
            department: "HR"
        }
        
    ]
);

// Advanced Queries
    // Retrieving data with complex data structures is also a good skill for any developer to have real world examples of data can be as complex as having two or more layers of nested objects and arrays.
    // Learning to query these kinds of data is also essential to ensure that we are able to retrieve any infromation that we would need in our application.

// Exercise 3: Retrieve documents that has phone number 87654321
// query on nested fields.

db.users.find(
    {
        "contact.phone": "87654321"
    }
);

// Query an array with exact elements
// CSS, JavaScript, PHP
db.users.find(
    {
        courses: ["CSS", "JavaScript", "PHP"]
    }
);

// Query an embedded document
db.users.find(
    {
        contact: {phone: "87654321",
        email: "stephenhawking@mail.com"
        }
    }
);

// Querying and array without regard to order
// React, Phyton
// $all
db.users.find(
    {
        courses: {
            $all: ["React", "Phyton"]
        }
    }
);

// Logical Operators
// $or
db.users.find(
    {
        $or: [
            {firstName: "Neil"}]
    }
);

// How about if we add another criteria? Yes, this is possible, as long as it is separated by objects.
db.users.find(
    {
        $or: [
            {firstName: "Neil"},
            {age: 25},
            {age: {$gte:50}}
        ]
    }
);

//$and operator
// age not equal to 82 and 86
// phone number 123456789
db.users.find(
    {
        $or: [
            {firstName: "Neil"},
            {age: 25},
            {age: {$gte:50}}
        ]
    }
);

// Can we omit $and operator, will it still work?
// Yes, it will still work. PLease use the code structure belowas an example.
db.users.find(
    {
    
            age: {$ne:82},
            age: {$ne:76},
            "contact.phone":"123456789"
        
    }
);

/* Field Projection */
db.users.find(
    {firstName: "Jane"},
    {firstName: 1, _id:0}
);

// find document of Jane anf return only the fields first name, last name and phone number
db.users.find(
    {firstName: "Jane"},
    {
        _id: 0, 
        firstName: 1,
        lastName: 1,
        "contact.phone":1}
);

// Query Operator
    // $regex
db.users.find(
    {
        firstName: {$regex: 'N', $options: '1'}
    }
);

// Exercise 5:
/*
    Find users with letter "S" in their firstname and letter "D" in their last name.
    This is not case sensitive
    Show only the first and last name and hide the id field 

    CLUE: change the value in $options keyword
*/
db.users.find(
    {
        _id: 0,
        firstName: {$regex: 'S', $options: '1'},
        lastName: {$regex: 'D', $options: '1'},
        firstName: {$regex: 'S', $options: '2'},
        lastName: {$regex: 'D', $options: '2'}
    }
);