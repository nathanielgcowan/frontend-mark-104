import { NEW_BAND, FETCH_BANDS } from '../actions/types';

const initialState = {
    bands: []
};

function bandsReducer(state = initialState, action) {
    switch(action.type) {
        case NEW_BAND:
            let list = state.bands;
            list.push(action.payload);
            return { ...state, bands: list }
        case FETCH_BANDS:
            const listOfBands = action.payload;
            return { ...state, bands:listOfBands };
        default:
            return state;
    }
}

export default  bandsReducer;