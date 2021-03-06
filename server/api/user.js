const validateInput = require('../utils/validations/signupValidation');
const bcrypt = require('bcryptjs');
const db = require('../models');


// User Register: Create a user

const user = {
  add: (req, res) => {
    const { errors, isValid } = validateInput(req.body);
    if (isValid) {
      const { email, password, role } = req.body;
      const passwordDigest = bcrypt.hashSync(password, 10);
      return db.User.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          passwordDigest: passwordDigest,
          role: role,
        },
      })
      .then(
        (result) => {
          const created = result[1];
          // will be true if a new object was created.
          if (created) {
            res.json({ success: true });
          } else {
            res.status(400).json({ errors: { email: 'This email already existed' } });
          }
        }
      )
      .catch(
          (err) => res.status(400).json({ errors: { form: err } })
      );
    // the email and password is not valid.
    } else {
      res.status(400).json(errors);
    }
  },
  read: (req, res) => {

  },
  browse: (req, res) => {

  },
  edit: (req, res) => {

  },
  destroy: (req, res) => {

  },
};

module.exports = user;
