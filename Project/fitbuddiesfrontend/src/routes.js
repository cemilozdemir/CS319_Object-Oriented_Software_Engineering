import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
} from "react-router-dom";

import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Navbar from "./components/Navbar.js";
import MakeReservation from "./components/MakeReservation.js";
import MyReservations from "./components/MyReservations.js";
import Announcements from "./components/Announcements.js";
import Profile from "./components/Profile.js";
import MakeAnnouncements from "./components/MakeAnnouncements.js";
export default function PageRoutes() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/home" element={<MakeReservation />} />
                    <Route
                        exact
                        path="/makeReservation"
                        element={<MakeReservation />}
                    />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route
                        exact
                        path="/myReservations"
                        element={<MyReservations />}
                    />
                    <Route exact path = "/announcements" element = {<Announcements />} />
                    <Route exact path = "/makeAnnouncements" element = {<MakeAnnouncements />} />
                </Routes>
            </div>
        </Router>
    );
}
