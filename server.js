const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path=require('path');
const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 3000;
//predefined formats that you can use in order to easily get the info you need and 'tiny' is a format whcih is even shorter, just the response time and a few extra items.
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => { console.log(`server is running on port ${PORT}`) });
