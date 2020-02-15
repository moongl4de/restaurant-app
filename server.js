// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Data (DATA)
// =============================================================
const tables = [
    {
      customerName: "yoda",
      phoneNumber: "23456778",
      customerEmail: "Jedi@master.netr",
      customerID: 900,
     
    },
];


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







  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  