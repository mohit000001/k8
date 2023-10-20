const express = require('express');

const app = express();

app.get('/', (req, res)=> {
 res.send('Welcome to kubernates app')
});

app.listen(8000, ()=>{
    console.log('server started listing in 8000')
})