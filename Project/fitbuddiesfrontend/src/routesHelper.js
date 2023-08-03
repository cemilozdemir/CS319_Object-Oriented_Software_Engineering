import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
} from "react-router-dom";

import MakeReservation from "./components/MakeReservation.js";
import MyReservations from "./components/MyReservations.js";
import Profile from "./components/Profile.js";
export default function PageRoutesHelper() {
    return (
        <>
            <Route exact path="/home" element={<MakeReservation />} />
            <Route
                exact
                path="/makeReservation"
                element={<MakeReservation />}
            />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/myReservations" element={<MyReservations />} />
        </>
    );
}
