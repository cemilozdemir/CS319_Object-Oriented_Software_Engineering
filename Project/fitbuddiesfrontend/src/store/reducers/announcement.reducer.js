import * as Actions from "../actions/actions.js";
const initialState = {
    announcement: null,
    allAnnouncements: []
    
};

const announcement = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_ANNOUNCEMENT: {
            return {
                ...state,
                announcement: action.announcement,
            };
        }
        case Actions.BRING_ANNOUNCEMENTS: {
            console.log(action.announcements[0], 'reducer')
            return {
                ...state,
                allAnnouncements: action.announcements,
            };
        }
        default: {
            return state;
        }
    }
};

export default announcement;
