import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    GET_PLAY

  } from '../actions';

const initialState = {
    data: [{
        title: '',
        date: '',
        embeded: '',
        thumnail: ''
    }],
    current: {
        title: '',
        date: '',
        embed: ''
        
    },
    isFetching: false,
    error: ''
}


export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_START:
            return {
                ...state, 
                isFetching: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false

            }

        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case GET_PLAY:
            return {
                ...state,
                current: {title: action.payload.title, date: action.payload.date, embed: action.payload.embed}

            }
        
        default: 
            return state;





    }

}

