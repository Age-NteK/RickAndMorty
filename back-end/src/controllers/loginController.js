const { Users } = require("../DB_connect");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Data is missing" });
    }

    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(403).json({ message: "Incorrect password" });
    }

    res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = login;
