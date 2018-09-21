// 'use strict';

/*********************************************************
 Author:               Swam Didam Bobby 
 Year:                  2018
 File Discription:      Routing processes
/********************************************************/

/**
 * Dependencies
*/

const
    express  = require('express'),
    log      = require('../utils/logger').getLogger('routes'),
    _        = require('lodash'),
    bcrypt   = require('bcryptjs'),
    crypto   = require('crypto'),
    mongoose = require('mongoose'),
    request  = require('request'),
    User     = require('../models/User'),
    nodemailer = require('nodemailer'),
    cron     = require("node-cron");

/**
 * Router instance
*/

const router = express.Router();

//============================================================================================
//  Date function
//============================================================================================
    // var startDate = "20/02/2018"
    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };

    var today = new Date();
    var Today = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`;

    console.log(Today);

    function week(startDate){
        var newRent = new Date(startDate);
        var wAlertDate = newRent.addDays(351);
        var wAlert = `${wAlertDate.getDate()}/${(wAlertDate.getMonth()+1)}/${wAlertDate.getFullYear()}`;
        console.log(wAlert);
        return wAlert;
    }

    function month(startDate){
        var newRent = new Date(startDate);
        var mAlertDate = newRent.addDays(335);
        var mAlert = `${mAlertDate.getDate()}/${(mAlertDate.getMonth()+1)}/${mAlertDate.getFullYear()}`;
        console.log(mAlert);
        return mAlert;
    }

    function expiry(startDate){
        var newRent = new Date(startDate);
        var expiry = newRent.addDays(365);
        var expDate = `${expiry.getDate()}/${(expiry.getMonth()+1)}/${expiry.getFullYear()}`;
        console.log(startDate)
        // console.log(expDate);
        return expDate
    }

          
//============================================================================================
// User signup, login, find ...
//============================================================================================

router.post("/CreateUser", function (req, res) {

    var form = {
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        startDate: req.body.startDate,
        expiryDate: expiry(req.body.startDate),
        wAlert: week(req.body.startDate),
        mAlert: month(req.body.startDate)
    }

   return User.create(form)
            .then(doc => {
                return res.status(200).json({message: "User created",doc:doc});
            })
            .catch(err=>{
                return res.status(500).json({message: "Could not create user", err: err});
        })

});

//=============================================================================================
// User login router
//=============================================================================================


router.put('/updateUser', (req, res) => {
    return User.update ( { "email" : req.body.email },
        { $set: req.body } )
        .then ( ok => {
            return res.status ( 200 ).json ( { message: "user's detail update" } ) ;
        })
        .catch(err => {
            return res.status( 500 ).json ( { message: "Unfurtunately an error has occured" } ) ;

        });
});


//=============================================================================================
// Delete user router
//=============================================================================================


router.put('/deleteUser', (req, res) => {
    return User.findOneAndRemove({ "TIN": req.body.TIN })
        .then(ok => {
            return res.status(200).json({message: "user' deleted"});
        })
        .catch(err => {
            return res.status(500).json({ message: "Unfurtunately an error has occured" });

        });
});


//=============================================================================================
// Searching for a particular users
//=============================================================================================

router.get("/oneUser", function (req, res) {
    return User.find({TIN: req.params.TIN})
        .then(doc => {
            return res.status(200).json({message: "User created",doc:doc});
        })
        .catch(err => {
            return res.status(500).json({message: "Cannot find user", err: err});
        })
      
  });

//=============================================================================================
// Search all registered users
//=============================================================================================

router.get("/viewAllUsers", function (req, res) {
    return User.find({})
        .then(doc => {
            return res.status(200).json({message: "User created",doc:doc});
        })
        .catch(err => {
            return res.status(500).json({message: "Cannot display list", err: err});
        })
      
  });

  /*
  ===============================
  Using cron job
  ===============================

  cron.schedule("* 1 * * * * ", function() {
    console.log("---------------------");

    return User.find({email: 'baba'})
            .then(doc => {
                console.log("E don happen")
                let emaillist = []
                for (var i = 0; i < doc.length; i++){
                    emaillist.push(doc[i].name)
                }
                console.log(emaillist);
                return emaillist
            })
            .catch(err => {
                console.log(err)
            })
            console.log("Running Cron Job");
  });*/

//======================================================================
//   set sms interval
//=======================================================================
    setInterval(()=>{
        return User.find({mAlert: Today})
            .then(doc => {
                console.log("E don happen")
                if(doc.length ==0){
                    return
                }
                else{
                let emaillist = []
                for (var i = 0; i < doc.length; i++){
                    emaillist.push(doc[i].email)
                }
                console.log(emaillist);
                return emaillist}
            })
           .then((emaillist)=>{
                for(var j = 0; j < emaillist.length; j++){
                    var recipiantmail = emaillist[j]

                
/********************************************************************************************
                 * SMS SENDING LOOP 
*********************************************************************************************/
                // .then(doc =>{
                //     let phonelist = [];
                //     for(var i = 0; i< doc.length; i++){
                //         phonelist.push(doc[i].phone)
                //     }
                //     console.log(phonelist)
                //     return phonelist
                // })
                
                // .then((phonelist)=>{
                //     for(var j = 0; j < phonelist.length; j++){
                //         var recipiantphone = phonelist[j]


/************************************************************************************
    email sending logic
 ***********************************************************************************/
                //     let transporter = nodemailer.createTransport({
                //         service: "gmail",
                //         auth: {
                //         user: "swamdidam007@gmail.com",
                //         pass: "fischer baba"
                //         }
                //     });
              
                //   // sending emails at periodic intervals
                 
                //     let mailOptions = {
                //       from: "swamdidam007@gmail.com",
                //       to: recipiantmail,
                //       subject: `Not a GDPR update ;)`,
                //       text: `Hi there, this email was automatically sent by us`
                //     };
                //     transporter.sendMail(mailOptions, function(error, info) {
                //       if (error) {
                //         console.log(error);
                //       } else {
                //         console.log("Email successfully sent!");
                //       }
                //     });
/*******************************************************************************************
  end of email sending
 *******************************************************************************************/

 /******************************************************************************************
  * SENDING SMS LOGIC
  ******************************************************************************************/
        // var accountSid = process.env.accountSid;
        // var authToken = process.env.authToken;


        //require the Twilio module and create a REST client 
        // var client = require('twilio')(accountSid, authToken);

        // client.messages.create({
        //     to: `+234 ${recipientmail}`,
        //     from: "+14243528976",
        //     body:   `Dear Esteemed tenant \n 
        //             This message is to inform your paid rent with us is going to expire on xxxxx \n
        //             Thanks for you patronage`,
        // }, function (err, message) {
        //     console.log(message);
        // });

 /******************************************************************************************
  * END OF SENDING SMS LOGIC
  ******************************************************************************************/
                  console.log(recipiantmail)
                }
            })
            .catch(err => {
                console.log(err)
                // return res.status(500).json({message: "Cannot find user", err: err});
            })
    }, 10000)

//=============================================================================
/**
* Module export
*/
//=============================================================================
module.exports = router;
