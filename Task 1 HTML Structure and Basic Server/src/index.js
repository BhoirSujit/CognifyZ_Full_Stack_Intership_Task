import  express, { urlencoded } from 'express';
const app = express();

app.use(express.json())
app.use(express.urlencoded({extends: true}));
app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views', './src/views');


app.get('/', (req, res) => {
    
    res.render('Home')
});

app.post('/', (req, res) => {
    const {name, email, gender, dob} = req.body;
    console.log(
        `Name : ${name} \nEmail : ${email} \nGender : ${gender} \nDate of Birth : ${dob}`
    );
    res.send(`Hello ${name}, your response recorded.`);
});


app.listen(8778, () => {
    console.log('Server is running on : http://localhost:8778');
})