const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // Add this line

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task_manager_db',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});


app.post('/signup', (req, res) => {
  const { name, surname, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  db.query('INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)', [name, surname, email, password], (error, results) => {
    if (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Error adding user' });
      return;
    }
    res.json({ name, surname, email, password });
  });
});



app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  authenticateUser(email, password)
    .then((user) => {
      if (user) {
        res.json({ success: true });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    })
    .catch((error) => {
      console.error('Error during authentication:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

function authenticateUser(email, password) {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {

      if (results.length > 0) {
        const user = results[0];
        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
}



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
