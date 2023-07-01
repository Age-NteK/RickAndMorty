const { Users } = require("../DB_connect");

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      throw Error("You must to complete email and password");

    const [user, created] = await Users.findOrCreate({
      where: { email },
      defaults: { password },
    });

    res.status(201).send("El usuario se ha creado correctamente");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await Users.findOne({ where: { user_id } });

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { user_id } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (password) {
      user.password = password;
    }
    if (email) {
      user.email = email;
    }
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const userToDelete = await Users.findOne({ where: { user_id } });
    if (!userToDelete) throw new Error("User not found");

    await userToDelete.destroy();

    return res.status(200).json({
      message: `The user ${userToDelete.user_id} was deleted successfully.`,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = { createUser, getUserById, updateUser, deleteUser };
