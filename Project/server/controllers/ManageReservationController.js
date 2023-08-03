"use strict";
const model = require("../models");
const { SportCenter, HasSession, Session, SportActivity, Reserve, Student } =
    model;
module.exports = class ManageReservationController {
    async SendSportActivities(req, res) {
        let { id } = req.body;
        // console.log("ID IS HERE");
    }

    async SendMyReservations(req, res) {
        console.log("send my reservations");
        console.log(req.body);
        let { user_id } = req.body;

        let reservations = await Reserve.findAll({
            where: { student_user_id: user_id },
        });
        let respond = {};
        await Promise.all(
            reservations.map(async (reservation) => {
                let session = await Session.findOne({
                    where: {
                        session_id: reservation.dataValues.session_id,
                    },
                });
                if (session == null) return;
                let hasSession = await HasSession.findOne({
                    where: {
                        session_id: session.session_id,
                    },
                });
                let sportActivity = await SportActivity.findOne({
                    where: {
                        sport_activity_id:
                            hasSession.dataValues.sport_activity_id,
                        sport_center_id: hasSession.dataValues.sport_center_id,
                    },
                });
                let sportCenter = await SportCenter.findOne({
                    where: {
                        sport_center_id:
                            sportActivity.dataValues.sport_center_id,
                    },
                });
                respond[session.dataValues.session_id] = {
                    session: session.dataValues,
                    sportActivity: sportActivity.dataValues,
                    sportCenter: sportCenter.dataValues,
                };
            })
        );
        console.log(respond);
        res.json(respond);
    }
    async CancelReservation(req, res) {
        console.log("CANCEL RESERVATOIN");
        console.log(req.body);
        let { session_id, user_id } = req.body;
        let reservation = await Reserve.findOne({
            where: { session_id: session_id, student_user_id: user_id },
        });
        if (reservation == null) {
            res.json({ msg: "No such reservation" });
            return;
        }
        await reservation.destroy();
        console.log("cancelled");
        res.json({ msg: "Reservation cancelled!" });
    }
    async Reserve(req, res) {
        console.log(req.body);
        let {
            sport_center_id,
            sport_activity_name,
            day,
            slot,
            time_interval,
            student_user_id,
        } = req.body;

        let sportActivities = await SportActivity.findOne({
            where: {
                sport_center_id: sport_center_id,
                name: sport_activity_name,
            },
        });

        let sport_activity_id = sportActivities.dataValues.sport_activity_id;

        let hasSessions = await HasSession.findAll({
            where: {
                sport_center_id: sport_center_id,
                sport_activity_id: sport_activity_id,
            },
        });
        let isThereASession = false;
        let isReservedAlready = false;
        let isCapacityEnough = true;
        await Promise.all(
            hasSessions.map(async (hasSession) => {
                if (isThereASession) return;
                let session = await Session.findOne({
                    where: {
                        session_id: hasSession.dataValues.session_id,
                        activity_day: day,
                        slot: slot,
                    },
                });
                if (session == null) return;

                isThereASession = true;
                console.log("SESSION BULUNDU ");
                console.log(session.dataValues);
                let reserves = await Reserve.findAll({
                    where: {
                        session_id: session.dataValues.session_id,
                    },
                });
                let reserveCount = reserves.length;

                if (reserveCount >= sportActivities.dataValues.capacity) {
                    isCapacityEnough = false;
                    return;
                }

                reserves.map((reserveRow) => {
                    if (
                        reserveRow.dataValues.student_user_id == student_user_id
                    ) {
                        isReservedAlready = true;
                        return;
                    }
                });
                if (isReservedAlready) return;

                await Reserve.create({
                    student_user_id: student_user_id,
                    session_id: session.dataValues.session_id,
                    date_reserved: new Date(Date.now()),
                    createdAt: new Date(Date.now()),
                    updatedAt: new Date(Date.now()),
                    is_absend: null,
                });
                res.json({ msg: "Reserved Succesfully" });
            })
        );

        if (isReservedAlready) {
            console.log("ALREADY RESERVED BY YOU");
            res.json({ msg: "Already reserved by you" });
            return;
        }
        if (!isCapacityEnough) {
            console.log("no enough capacity");
            res.json({ msg: "No enough capacity" });
            return;
        }
        if (isThereASession) {
            res.json({ msg: "There is no session like that" });
        } else {
            //create new session
            let maxID = await Session.max("session_id");
            await Session.create({
                session_id: maxID + 1,
                activity_day: day,
                slot: slot,
                time_interval: time_interval,
                createdAt: new Date(Date.now()),
                updatedAt: new Date(Date.now()),
                duration: 75,
                disinfection_duration: 15,
            });
            await Reserve.create({
                student_user_id: student_user_id,
                session_id: maxID + 1,
                is_absend: null,
                date_reserved: new Date(Date.now()),
                createdAt: new Date(Date.now()),
                updatedAt: new Date(Date.now()),
            });
            await HasSession.create({
                sport_activity_id: sport_activity_id,
                session_id: maxID + 1,
                sport_center_id: sport_center_id,
                createdAt: new Date(Date.now()),
                updatedAt: new Date(Date.now()),
            });
            res.json({ msg: "Reserved Succesfully (Session is created)" });
        }
    }

    async GetSportActivityTimes(req, res) {
        let {
            sport_center_id,
            sport_activity_name,
            sport_activity_day,
            slot_count,
        } = req.body;

        let sportActivities = await SportActivity.findOne({
            where: {
                sport_center_id: sport_center_id,
                name: sport_activity_name,
            },
        });

        let reservedSessionCounts = {};

        for (let i = 1; i <= slot_count; i++) {
            for (let j = 0; j < sport_activity_day.length; j++) {
                reservedSessionCounts[sport_activity_day[j].date + "#" + i] = 0;
            }
        }
        if (sportActivities == null) {
            res.json(reservedSessionCounts);
            return;
        }
        let sport_activity_id = sportActivities.dataValues.sport_activity_id;
        // console.log(sport_activity_id);
        let hasSessions = await HasSession.findAll({
            where: {
                sport_center_id: sport_center_id,
                sport_activity_id: sport_activity_id,
            },
        });

        // console.log(reservedSessionCounts);
        await Promise.all(
            hasSessions.map(async (hasSession) => {
                let session = await Session.findOne({
                    where: { session_id: hasSession.dataValues.session_id },
                });
                // console.log(session.dataValues);
                let key =
                    session.dataValues.activity_day +
                    "#" +
                    session.dataValues.slot;
                if (key in reservedSessionCounts) {
                    let reserves = await Reserve.findAll({
                        where: { session_id: session.dataValues.session_id },
                    });
                    reservedSessionCounts[key] = reserves.length;
                }
            })
        );
        // console.log("DEBUG KERREM: ");
        // console.log(reservedSessionCounts);
        function formatDate(date) {
            var d = date;
            let month = "" + (d.getMonth() + 1);
            let day = "" + d.getDate();
            let year = d.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year, month, day].join("-");
        }
        res.json(reservedSessionCounts);
    }
};
