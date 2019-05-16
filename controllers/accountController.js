Account = require('../models/Account.js')
User = require('../models/User.js')

const accountController = {

    findAllAccounts : function (req,res){
        Account.find().then( (accounts) => {
            res.json(accounts)
        })
    },

    findAccountsOfUser : function (req,res){
        Account.find({parentUser: req.body.userId})
            .then( (userAccounts) =>{
                res.json(userAccounts)
            })
    },
      
    createAccount : function (req,res){
        Account.create({accountName: req.body.accountName,
                        parentUser: req.body.parentUserId})
                .then((newAccount) => {
                    res.json(newAccount)
                })
    },

    updateAccount : function (req,res){
        Account.findByIdAndUpdate(req.body.accountId,
                                {$set: {accountName: req.body.accountName}},
                                { new: true })
                .then((updatedAccount) => {
                    res.json(updatedAccount)
                })
    },

    deleteAccount : function (req,res){
        Account.findByIdAndDelete(req.body.accountId)
            .then( () => {
                Account.find().then((accounts) => { //  not sure what to return
                    res.json(accounts)
                })
            })
    }
};

module.exports = accountController;