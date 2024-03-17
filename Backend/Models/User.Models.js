const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    gamesPlayed: {
      type: Number,
      default: 0,
    },
    win: {
      type: Number,
      default: 0,
    },
    lose: {
      type: Number,
      default: 0,
    },
    savedGame: {
      cards: {
        type: Array,
      },
      defusingCard: {
        type: Number,
        default: 0,
      },
    },
  },
);

module.exports = User = mongoose.model('user', UserSchema);
