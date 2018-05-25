module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get("db");

    db
      .read_houses()
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json());
  },

  create: (req, res, next) => {
    const db = req.app.get("db");
    const { name, address, city, state, zip } = req.body;
    db
      .create_house([name, address, city, state, zip])
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json());
  },

  delete: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req;

    db
      .delete_house([params.id])
      .then(() => res.status(200).json())
      .catch(() => res.status(500).json());
  }
};
