
// The API toolkit for making REST systems easily
const express = require('express');
// A good solution for handling JSON data in routes
const bodyParser = require('body-parser');
// Node JS modules for filesystem access
const fs = require('fs');
// Our database connection
// This will be a JSON object of our programmers
// and can be accessed as if it was any other javascript
// object
const database = require('./programmers.json');

// Make an instance of our express application
const app = express();
// Specify our > 1024 port to run on
const port = 3000;

// Apply our middleware so our code can natively handle JSON easily
app.use(bodyParser.json());

// We must have our list of programmers to use
if (!fs.existsSync('./programmers.json')) {
  throw new Error('Could not find database of programmers!');
}

// Build our routes
app.get('/', (req, res) => {
    res.send(database);
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    //Will hold the programmers with the same ID #
    var temp = [];
    //Counting variable for for loop
    var i = 0;
    //counting variable for temp array
    var k = 0;
    //Adding all programmers with the same ID number as the input to temp array
    for (i = 0; i < database.length; i++) {
        if (id == database[i].SID) {
            temp[k] = database[i]; 
            k++;
        }
    }
    //sending temp array to the user
    res.send(temp);
});

app.put('/:id', (req, res) => {
    const id = req.params.id;
    database.add(id);
    res.send(database);
    //res.send(`Fill me in to update values with ID: ${id}`);
});

app.post('/', (req, res) => {
    const body = req.body; // Hold your JSON in here!
    database.add(id);
  res.send(`You sent: ${body}`);
});

// IMPLEMENT A ROUTE TO HANDLE ALL OTHER ROUTES AND RETURN AN ERROR MESSAGE
app.listen(port, () => {
    console.log(`She's alive on port ${port}`);
    database[1] = new Object();
    database[1].firstName = "tommy";
    database[1].SID = "2";
    console.log(database);

});
