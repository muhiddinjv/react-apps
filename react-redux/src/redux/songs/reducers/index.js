import {combineReducers} from 'redux';

// Reducers with actions (departments with forms)
const songReducer = () => {
  return [
    {title: 'No scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '2:35'},
    {title: 'All Star', duration: '3:15'},
    {title: 'Titanic', duration: '1:45'},
  ]
};


const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED'){
    return action.song
  } else {
    return selectedSong;
  }
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})