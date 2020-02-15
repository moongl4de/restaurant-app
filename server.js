// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Data (DATA)
// =============================================================
const tables = [];
const waiting = [];
//     {
//       customerName: "yoda",
//       phoneNumber: "23456778",
//       customerEmail: "Jedi@master.netr",
//       customerID: 900,

//     },
// ];

// Routes
// =============================================================

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "./html/home.html"));
});

app.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "./html/reserve.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "./html/tables.html"));
});

// Get tables array
app.get("/api/tables", function(req, res) {
	return res.json(tables);
});

// Get waitlist array
app.get("/api/wait", function(req, res) {
	return res.json(waiting);
});

// get both arrays
app.get("/api/all", function(req, res) {
    return res.json({tables: tables,
        waitlist: waitlist });
  });

// Create New Tables - takes in JSON input
app.post("/api/tables", function(req, res) {
<<<<<<< HEAD
	// req.body hosts is equal to the JSON post sent from the user
	// This works because of our body parsing middleware
	const newTable = req.body;

	// Using a RegEx Pattern to remove spaces from newTable
	// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
	// newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
=======
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newTable
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
    if (tables.length < 5){
        tables.push(newTable);
    }else{
        waiting.push(newTable);
    }
    res.json(newTable);
  });
>>>>>>> d88fb7a139aa6a50b79b26aac8846fe9b477e126

	console.log(newTable);
	if (tables.length < 5) tables.push(newTable);
	else wait.push(newTable);

	res.json(newTable);
});

// Create New Tables - takes in JSON input
// app.post("/api/wait", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     const newTable = req.body;

//     // Using a RegEx Pattern to remove spaces from newTable
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newTable);

//     waiting.push(newTable);

//     res.json(newTable);
//   });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT http://localhost:" + PORT);
});
