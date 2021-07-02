var express = require("express");

var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var User = require("../controller/user");
var Job = require("../controller/job");

router.get("/all", function(req, res) {
    res.send("Hello World frm API. \n /getAllUsers \n /getOneById \n /registerUser \n /updateUser \n /deleteUser \n /registerItems \n /updateItems \n /getAllItems \n /getOneItemsById \n /deleteItems \n ");
});



router.get('/getAllUsers', async(req, res) => {
    User.findAllUser(function(err, user) {
        if (err) {
            console.log("errors" + err);
            res.sendStatus(400);
            return;
        } else {
            console.log(user);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ user: user }));
        }
    });
});

router.post('/getOneUserById', urlencodedParser, async(req, res) => {
    User.findOneUser(req.body.id, function(err, user) {
        console.log(req.body.id)
        if (err) {
            console.log("errors" + err);
            res.sendStatus(400);
            return;
        } else {
            console.log(user);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ user: user }));
        }
    });
});
router.post("/registerUser", urlencodedParser, function(req, res) {

    var password = req.body.password;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var age = req.body.age;
    var address = req.body.address;
    var tel = req.body.contactNo;
    var city = req.body.city;
    var province = req.body.province;
    var email = req.body.email;
    var type = req.body.type;

    var newUser = {

        fname: fname,
        lname: lname,
        password: password,
        type: type,
        address: address,
        city: city,
        province: province,
        email: email,
        contactNo: tel,
        age: age

    };

    User.createUser(newUser, function(err, user) {
        if (err) {
            console.log("errors" + err);
            res.setHeader("Content-Type", "application/json");
            res.end("" + err);
            return;
        } else {
            console.log(user);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ user: user }));
        }
    });



});


router.post("/updateUser", urlencodedParser, function(req, res) {

    var password = req.body.password;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var address = req.body.address;
    var nic = req.body.nic;
    var tel = req.body.contactNo;
    var city = req.body.city;
    var province = req.body.province;
    var email = req.body.email;
    var type = req.body.type;
    // var cart_id = req.body.cart_id;
    var gender = req.body.gender;

    var newUser = {

        first_name: fname,
        last_name: lname,
        nic: nic,
        gender: gender,
        password: password,
        type: type,
        address: address,
        city: city,
        province: province,
        email: email,
        contactNo: tel,

    };

    let newUser2 = Object.fromEntries(Object.entries(newUser).filter(([_, v]) => v != null));

    User.updateUser(req.body.id, newUser2, function(err, user) {
        if (err) {
            console.log("errors" + err);
            res.sendStatus(400);
            return;
        } else {
            console.log(user);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ user: user }));
        }
    });

});

router.post("/deleteUser", urlencodedParser, function(req, res) {
    console.log("User Deleting");
    var id = req.body.id;

    User.deleteUser(id, function(err, user) {
        if (err) {
            console.log("errors" + err);
            res.sendStatus(400);
            return;
        } else {
            console.log(user);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ user: user }));
        }
    });
});

////////////// Jobs //////////

router.post('/getJobByJobType', urlencodedParser, async(req, res) => {
    Job.findJobByType(req.body.type, function(err, job) {
        if (err) {
            console.log("errors" + err);
            res.sendStatus(400);
            return;
        } else {
            console.log(job);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ job: job }));
        }
    });
});

router.post("/registerJob", urlencodedParser, function(req, res) {

    var userId = req.body.userId;
    var jobType = req.body.jobType;
    var salary = req.body.salary;
    var timeFrame = req.body.timeFrame;
    var isAvailable = req.body.isAvailable;

    var newJob = {

        userId: userId,
        jobType: jobType,
        salary: salary,
        timeFrame: timeFrame,
        isAvailable: isAvailable,

    };

    Job.createJob(newJob, function(err, job) {
        if (err) {
            console.log("errors" + err);
            res.setHeader("Content-Type", "application/json");
            res.end("" + err);
            return;
        } else {
            console.log(job);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ job: job }));
        }
    });



});



module.exports = router;