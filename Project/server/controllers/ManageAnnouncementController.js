"use strict";
const model = require("../models");

const { Op } = require("sequelize")
const jwt = require('jsonwebtoken')
const { SportCenter, HasSession, Session, SportActivity, Reserve, Student, Announcement } =
    model;
module.exports = class ManageAnnouncementController {
  

    async createAnnouncement(req, res) {
        console.log("send my announcements");
        console.log(req.body);
        let announcement  = req.body;

        let maxID = await Announcement.max("announcement_id");
        Announcement.create({
            announcement_id: maxID + 1,
            title: announcement.title,
            content: announcement.body,
            author: announcement.author,
            createdAt: new Date(Date.now()),
            endDate: announcement.endDate,
            
        })
        .then((announcement) => {})
      
    }
    
    async bringAnnouncement(req, res) {
        let {date} = req.query;

        console.log(date)



        let announcements = await Announcement.findAll({
            where: {
                endDate:{
                    [Op.gt]: new Date(Date.now()),
                }
                
            },
        });

        let msg = ""

        console.log(announcements)
        jwt.sign({ msg: msg }, "secretkey", (err, token) => {
            res.json({
                announcements: announcements,
            });
        });
        
        
    }
       
        // console.log("DEBUG KERREM: ");
        // console.log(reservedSessionCounts);
  
};
