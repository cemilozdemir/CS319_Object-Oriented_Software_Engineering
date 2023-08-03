import axios from "axios";

import * as Actions from "../actions/actions.js";

export function createAnnouncement(announcement, navigate) {
    return (dispatch) => {
        //dispatch(setField("login_user", true));
        axios
            .post("http://localhost:8080/createAnnouncement", announcement)
            .then((res) => {
                console.log("announcement", res.data);
                localStorage.setItem("token", res.data.token);
                dispatch({
                    type: Actions.SET_ANNOUNCEMENT,
                    announcement: res.data.announcement,
                });
                navigate("/announcements");
            })
            .catch((err) => {
                alert("you could not post");
                console.log(err);
            });
    };
}

export function bringAnnouncement(date) {
    return (dispatch) => {
        //dispatch(setField("login_user", true));
        axios
            .get("http://localhost:8080/bringAnnouncement",
            {
                params: {
                    date: date
                }
            
            }
            )
            .then((res) => {
                console.log(res.data, 'qq')
                console.log(res.data.announcements, 'hh')
                // localStorage.setItem("token", res.data.token);
                dispatch({
                    type: Actions.BRING_ANNOUNCEMENTS,
                    announcements: res.data.announcements,
                });
            })
            .catch((err) => {
                alert("Activities times Couldnt bringed");
                console.log(err);
            });
    };
}


