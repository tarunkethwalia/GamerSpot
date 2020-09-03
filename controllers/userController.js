const Users = require('../models/user');
const response = require('../utils/http-utils');

exports.Login = (req, res) => {

    const loginInput=req.body.Username;
    const maths="1234567890";
    let isUsername=false;
    for( let i=0;i<loginInput.length;i++){
        if(maths.indexOf(loginInput.charAt(i))<0){
            isUsername=true;
            break;
        }
    }
    let data=null;
    if(isUsername){
         data =Users.find({Username:loginInput});
    }
    else{
         data =Users.find({PhoneNo:loginInput});
    }

    if(data!=null){

        if(data.Password===req.body.Password){
            res.status(200).json({message: `Login Successful`});
        }
        else{
            res.status(401).json({message: 'Wrong Password'});
        }

    }
    else{
        res.status(401).json({message: 'PhoneNo doesnt exist '});
    }

};

exports.SignUp = (req, res) => {

    const data = Users.find({PhoneNo:req.body.PhoneNo});
    if(data.length>0){
        res.status(400).json({message: "PhoneNo already taken"});
    }
    else{
        let SignUpUser = new Users({
            Username : req.body.Username,
            Password : req.body.Password,
            PhoneNo : req.body.PhoneNo,

        });
        SignUpUser.save().then(result=>{
            res.send({message: 'Successfully Saved', result});
        }).catch(err => {
            console.log(err);
            res.status(400).send({message: 'Validation Errors', Errors: err})
        });

    }

};