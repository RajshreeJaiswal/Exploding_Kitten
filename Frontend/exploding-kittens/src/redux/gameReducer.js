import { SET_USERNAME } from './actionTypes';

const initialState = {
  username: '',
  savedGame: { cards: [], defusingCard: 0 },
  played: 0,
  win: 0,
  loose: 0,
};

export default function game(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USERNAME:
      return {
        ...state,
        username: payload.username,
        savedGame: payload.savedGame,
        played: payload.played,
        win: payload.win,
        loose: payload.loose,
      };

    default:
      return state;
  }
}
