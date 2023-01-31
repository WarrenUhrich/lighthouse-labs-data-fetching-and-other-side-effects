const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 5000;
const app = express();

///////////////////////////////////////////////////////////
// Middleware
///////////////////////////////////////////////////////////

app.use(morgan('dev'));
app.use(cors());

///////////////////////////////////////////////////////////
// Database
///////////////////////////////////////////////////////////

const locations = [ // Province / State
    'Alberta',
    'Ontario',
    'Quebec',
    'British Columbia'
];

const students = [
    {name: 'Sarah Campbell', location: 1, favWebTech: 'React'},
    {name: 'Chelsea', location: 2, favWebTech: 'jQuery'},
    {name: 'Mike Dalton', location: 2, favWebTech: 'SQL'},
    {name: 'Ehsan Elgendi', location: 1, favWebTech: 'React'},
    {name: 'Kristy Gislason', location: 3, favWebTech: 'Express'},
    {name: 'Sarah Campbell', location: 1, favWebTech: 'React'},
    {name: 'Warren Uhrich', location: 0, favWebTech: 'PHP'}
];

///////////////////////////////////////////////////////////
// Listener
///////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Express app is listening on port:', PORT);
});

///////////////////////////////////////////////////////////
// Routes
///////////////////////////////////////////////////////////

app.get('/api/locations', (req, res) => {
    res.json(locations);
});

app.get('/api/students', (req, res) => {
    res.json(students);
});
