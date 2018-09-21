'use strict'

/*********************************************************
 Author:                Swam Didam Bobby 
 Year:                  2018
 File Discription:      Model for end users
/********************************************************/

// model dependencies
const
    mongoose                = require("mongoose");
    
// MONGOOSE MODEL CONFIGURATION
const UserSchema = new mongoose.Schema({

    email:{
        type: String
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    startDate:{
        type: String,
    },
    mAlert:{
        type: String,
    },
    wAlert:{
        type: String,
    }
    
 
});

module.exports = mongoose.model('User', UserSchema);


