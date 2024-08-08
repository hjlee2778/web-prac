const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    const data = {message: 'hello world'};
    res.render('index', {
        tasks: tasks,
        data,
        people: [
            {name: 'kim'},
            {name: 'lee'},
            {name: 'park'},
        ]
    
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/form', (req, res) => {
    res.render('form');
})

app.post('/submit', (req, res) => {
    const {name, email} = req.body;
    res.render('result', {name, email})
})

let tasks = [];
app.post('/addTask' , (req, res) => {
    const newTask = req.body.newTask
    if (newTask) {
        tasks.push(newTask);
    }
    res.redirect('/')
})

app.post('/deleteTask', (req, res) => {
    const deleteTask = req.body.tasks;
    tasks - tasks.filter(task => task !== deleteTask);
    res.redirect('/');
})


/* const user2 = [
        { name: 'kim', age: 17, role: 'front' },
        { name: 'lee', age: 25, role: 'back' },
        { name: 'park', age: 30, role: 'full' },
        { name: 'choi', age: 16, role: 'front' },
    ];
      
    user2.forEach(user => {
    // Age check for pass/reject
    if (user.age >= 18) {
        user.status = 'pass';
    } else {
        user.status = 'reject';
    }
        
    // Role-based color assignment
    switch (user.role) {
      case 'front':
        user.color = 'red';
        break;
      case 'back':
        user.color = 'blue';
        break;
      case 'full':
        user.color = 'green';
        break;
      default:
        user.color = 'black';
        break;
    }
});
      
      
app.get('/', (req, res) => {
    res.render('index', { user2 });
}); */

app.listen(8000, () => {
    console.log("서버연결 http://localhost:8000");
}) 


