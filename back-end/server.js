const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData=[
    {name: 'Clara'},
    {name: 'Robert'}
]

app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'Patient data retreived.',
        users: mockUserData
    })
})

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'Patient profile received.',
        user: req.params.id
    })
})

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="A7FkD9DkF0SD1ghH";
    const mockPassword="dog orange really falcon faucet bottle stand";

    if (username===mockUsername && password===mockPassword){
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.post('/profile',function(req,res){
    const name=req.body.name;
    const dob=req.body.dob;
    const healthcardnum=req.body.healthcardnum;

    res.json({
        success: true,
        message: 'profile successfully created!',
        name: req.body.name,
        dob: req.body.dob,
        healthcardnum: req.body.healthcardnum
    })
})

app.listen(8000,function() {
    console.log("server is running")
})
