import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const GET_PLAY = 'GET_PLAY';
// async action creator
export const getSoccer = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get('https://www.scorebat.com/video-api/v1/')
    .then(res => {
        console.log(res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

export const getPlay = (play) => {
    return {
        type: GET_PLAY,
        payload: play
    }

}