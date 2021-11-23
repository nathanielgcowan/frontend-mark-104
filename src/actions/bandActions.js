import { NEW_BAND, FETCH_BANDS } from './types';

export const newBand = bandData => dispatch => {
    console.log(dispatch)
    fetch('http://localhost:3001/bands', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bandData)
    })
    .then(response => response.json())
    .then(singular => {
        console.log(singular)
        return dispatch({
            type: NEW_BAND,
            payload: singular
        })
    }
    );
};


export const fetchBands = (id) => dispatch => {
    fetch('http://localhost:3001/bands')
    .then(response => response.json())
    .then(plural => dispatch({ type: FETCH_BANDS, payload: plural }))
}



export const deleteBand = id => dispatch => {
    console.log(dispatch)
    fetch(`http://localhost:3001/bands/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })
    .then(response => response.json())
    .then(singular => {
        console.log(singular)
        return dispatch({
            type: REMOVE_BAND,
            payload: singular
        })
    }
    );
};