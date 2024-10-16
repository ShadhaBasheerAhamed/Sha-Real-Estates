const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',  // Replace with your host (e.g., 'localhost')
    user: 'root',       // Replace with your MySQL username
    password: 'Shadha@2005',       // Replace with your MySQL password
    database: 'contact_db' // Replace with your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// POST route to handle contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, phone, subject, message } = req.body;

    if (!name || !phone || !subject || !message) {
        return res.status(400).json({ error: 'Please fill in all fields' });
    }

    const query = 'INSERT INTO contacts (name, phone, subject, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, phone, subject, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to store contact information' });
        }
        res.json({ message: 'Contact information stored successfully' });
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});