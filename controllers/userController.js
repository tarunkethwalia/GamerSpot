const Users = require('../models/user');
const response = require('../utils/http-utils');

exports.Login = (req, res) => {

    // const loginInput=req.body.Username;
    // const maths="1234567890";
    // let isUsername=false;
    // for( let i=0;i<loginInput.length;i++){
    //     if(maths.indexOf(loginInput.charAt(i))<0){
    //         isUsername=true;
    //         break;
    //     }
    // }
    // let data=null;
    // if(isUsername){
    //      data =Users.find({Username:loginInput});
    // }
    // else{
    //      data =Users.find({PhoneNo:loginInput});
    // }

    // if(data!=null){

    //     if(data.Password===req.body.Password){
    //         res.status(200).json({message: `Login Successful`});
    //     }
    //     else{
    //         res.status(401).json({message: 'Wrong Password'});
    //     }

    // }
    // else{
    //     res.status(401).json({message: 'PhoneNo doesnt exist '});
    // }

    Users.find({Username: req.body.Username, Password: req.body.Password}).then(data => {
        if(data.length > 0){
            res.status(200).send({message: 'Data fetched successfully', data});
        }
        else{
            Users.find({PhoneNo: req.body.Username, Password: req.body.Password}).then(data => {
                if(data.length > 0){
                    res.status(200).send({message: 'Data fetched successfully', data});
                }
                else {
                    res.status(400).send({message: 'Wrong Username or Password..'});
                }
            }).catch(err => {
                res.status(500).send({message: 'Internal server Error', error: err});        
            });
        }
    }).catch(err => {
        res.status(500).send({message: 'Internal server Error', error: err});
    });

};

exports.SignUp = (req, res) => {

    Users.find({PhoneNo: req.body.PhoneNo}).then(data => {
        if(data.length > 0){
            res.status(400).send({message: "PhoneNo already taken"});
        }
        else{
            let SignUpUser = new Users({
                Username : req.body.Username,
                Password : req.body.Password,
                PhoneNo : req.body.PhoneNo,
                Subscription : {
                    AccountType: req.body.AccountType
                }
            });
            SignUpUser.save().then(result=>{
                res.status(200).send({message: 'Successfully Saved', result});
            }).catch(err => {
                res.status(400).send({message: 'Validation Errors', error: err})
            });
        }
    }).catch(err => {
        res.status(500).send({message: 'Server Error', error: err});
    });

};