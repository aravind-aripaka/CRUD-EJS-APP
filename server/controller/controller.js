var Userdb = require('../model/model');

//add
exports.create = (req,res) => {
    //validation 
    if(!req.body){
        res.status(400).send({message: "cannot be empty"});
        return;
    }
    const user = new Userdb({
        usn : req.body.usn,
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender,
        dob : req.body.dob, 
        status : req.body.status
    })

    //save user 
    user 
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/')
        })
        .catch(err => {
            res.status(500).send({
                message : err.message||"Some error occured"
            });
        });
}
//retrive
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: 'Not found'})
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({message : err.message||"Some error occured"})
        })
    }else{
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message : err.message||"Some error occured"})
    })
    }
}

//update
exports.update = (req,res) => {
    if(!req.body){
        return res
         .status(400)
         .send({ message : "data cannot be empty "})
    }
    
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(400).send({ message : "cannot update"})
            }else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message : "Error Update"})
        })
}
//delete
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message : "Error Delete"})
        }else{
            res.send({
                message:"User was deleted"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message:"error deleting user"
        })
    });
}