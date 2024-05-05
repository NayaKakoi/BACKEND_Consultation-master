const express=require('express');
const path =require('path')
const app = express(); 
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.render('login'); // Assuming Login.ejs exists in views directory
  });
app.get('/', (req, res) => {
    res.render('index'); // Assuming Login.ejs exists in views directory
  });
  app.get('/signup', (req, res) => {
    res.render('signup'); // Assuming Login.ejs exists in views directory
  });
app.get('/pricing', (req, res) => {
    res.render('pricing'); // Assuming Login.ejs exists in views directory
  });

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
  });


  