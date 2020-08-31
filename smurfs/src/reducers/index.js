import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS
} from "../actions";

const initialState = {
    smurfs: [],
    loading: false,
    isFetching: false,
    addingSmurf: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case ADD_SMURF_START:
            return {
                ...state,
                addingSmurf: true,
            };
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                addingSmurf: false
            };
        default: 
            return state;
    }
};