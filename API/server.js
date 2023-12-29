const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200', 
}));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task_manager_db'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/signup', async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    // // Validate data format
    // if (!name || !surname || !email || !password) {
    //   return res.status(400).json({ error: 'All fields are required' });
    // }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database
    const query = 'INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)';
    db.query(query, [name, surname, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('User signed up successfully');
        res.status(200).json({ message: 'User signed up successfully' });
      }
    });
  } catch (error) {
    console.error('Error processing signup request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
