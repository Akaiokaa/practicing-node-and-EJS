import express from 'express'

const app = express();

const PORT = 3015

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    const person = {name: 'Donald', occupation: 'plumber'}
    res.render('home', {person});
})
app.listen('/', (req, res) => {
    app.listen(PORT, () => console.log(`Server is running on localhost http://localhost:${PORT}`))
})
