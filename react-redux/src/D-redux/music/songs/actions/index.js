// Action creators (customers with forms)
export const selectSong = (song) => {
    // return action (form)
  return {
    type: "SONG_SELECTED",song
  };
};
