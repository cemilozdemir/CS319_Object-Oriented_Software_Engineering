import { combineReducers } from "redux";
import settings from "./settings.reducer";
import reservations from "./reservations.reducer.js";
import login from "./login.reducer.js";
import announcement  from "./announcement.reducer.js";

const createReducer = (asyncReducers) =>
    combineReducers({
        settings,
        reservations,
        login,
        announcement,
        ...asyncReducers,
    });

export default createReducer;
