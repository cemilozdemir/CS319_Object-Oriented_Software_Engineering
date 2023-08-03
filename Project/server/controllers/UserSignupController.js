"use strict";
const bcrypt = require("bcrypt");
const model = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const jwt = require("jsonwebtoken");

const { User } = model;

module.exports = class UserSignupController {
    async Register(req, res) {
        let { email, user_id, name, password, cell_phone } = req.body;
        console.log("REGISTERRRRR");
        console.log(email, name, password, cell_phone, user_id);
        let msg = "";
        let userEmail = await User.findOne({ where: { email: email } });
        let userID = await User.findOne({ where: { user_id: user_id } });
        let userCellPhone = await User.findOne({
            where: { cell_phone: cell_phone },
        });
        if (userCellPhone) {
            msg = "User with that phone number already registered.";
        }

        if (userEmail) {
            msg = "user with that email already registered";
        }

        if (password.length < 6) {
            msg = "Password should be longer than 5";
        }

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        if (!userEmail && !userCellPhone && !userID) {
            User.create({
                name: name,
                user_id: user_id,
                password: password,
                email: email,
                cell_phone: cell_phone,
                hashed_password: password,
            })
                .then((user) => {})
                .catch((err) => {
                    console.log("Register Error");
                    console.log(err);
                    res.status(404).send("Couldn't sign up ");
                });
            msg = "successfully registered you can go to login page now";
        } else {
            console.log("Register Error");
            res.status(404).send("Couldn't sign up ");
        }
        jwt.sign({ msg: msg }, "secretkey", (err, token) => {
            res.json({
                msg: msg,
            });
        });
    }
    async Login(req, res) {
        let { email, password } = req.body;
        let user = await User.findOne({ where: { email: email } });
        if (!user) {
            console.log("!user");
            return res.status(404).send("err");
        }
        const verified = bcrypt.compareSync(password, user.hashed_password);
        // let verified = user.hashed_password == password;
        console.log("Login: ");
        console.log(user);
        console.log(user.hashed_password);
        console.log(password);

        if (user && verified) {
            console.log("yes user", user);
            jwt.sign({ user: user }, "secretkey", (err, token) => {
                res.json({
                    token: token,
                    user: user,
                });
            });
        } else {
            return res.status(404).send();
        }
    }
};
