const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 5000;
const app = express();

/////////////////////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////////////////////

app.use(morgan('dev'));
app.use(cors());

/////////////////////////////////////////////////////////////////////
// Database
/////////////////////////////////////////////////////////////////////

const locations = [
    'Alberta',
    'British Columbia',
    'Manitoba'
];

const students = [
    {name: 'Warren Uhrich', location: 0, favWebTech: 'PHP'},
    {name: 'Matt Rostad', location: 1, favWebTech: 'JavaScript' },
    {name: 'Anastasia', location: 1, favWebTech: 'React'},
    {name: 'Mohib', location: 1, favWebTech: 'React'},
    {name: 'Roy', location: 2, favWebTech: 'JavaScript'}
];

/////////////////////////////////////////////////////////////////////
// Listener
/////////////////////////////////////////////////////////////////////

app.listen(PORT, () => console.log('Express listening on PORT:', PORT));

/////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////

app.get('/api/locations', (req, res) => {
    res.status(200).json(locations);
});

app.get('/api/students', (req, res) => {
    res.status(200).json(students);
});
