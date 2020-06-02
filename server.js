var express = require("express");
const bodyParser = require('body-parser');

var app = express();

/**request body parser middleware */
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**API URL Section */
app.listen(5050, () => {
 console.log("Server running on port 5050");
});

app.get("/test", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.post('/login', async (req, res) => {

    const {
        email,
        password
    } = req.body;

    if(email === "test@test.com" && password === "password") {
        // If successful
        return res.json({
            success: true,
            msg: 'Success'
        });
    } else {
        // If successful
        return res.json({
            success: false,
            msg: 'fail'
        });
    }
    
  });