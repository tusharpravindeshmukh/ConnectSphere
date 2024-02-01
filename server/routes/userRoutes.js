const express = require('express');
const router = express.Router();

const userData = [{ name: "itushardeshmukh", password:"Tushar123" }];

router.get('/register', (req, res) => {
    res.send("Register");
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('req.body', req.body)

    // Check if the username and password match any user in the data
    const user = userData.find(u => u.name === username && u.password === password);

    if (user) {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid user");
    }
});

module.exports = router;
