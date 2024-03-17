const User = require('../Models/User.Models');

exports.index = async (req, res, next) => {
  try {
    const UserData = await User.find({ win: { $gt: 0 } })
      .select('username win lose gamePlayed')
      .sort('-win');

    res.json({ users: UserData });
  } catch (err) {
    return res.status(500).json({ message: 'Error' });
  }
};

exports.create = async (req, res, next) => {
  try {
    const { username } = req.body;
    let query = {
      username: username.toLowerCase(),
    };

    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    let UserData = await User.findOneAndUpdate(query, {}, options);

    await UserData.save();
    res.json({ user: UserData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error' });
  }
};

exports.update = async (req, res, next) => {
  const { game, cards, defusingCard } = req.body;

  const data = {
    gamesPlayed: game.played,
    win: game.win,
    lose: game.lose,
    savedGame: {
      cards,
      defusingCard,
    },
  };

  try {
    await User.updateOne(
      { username: req.params.username.toLowerCase() },
      {
        $set: data,
      }
    );

    res.json({ user: data });
  } catch (err) {
    return res.status(500).json({ message: 'Error' });
  }
};
