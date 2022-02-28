// pageController : getIndex, getAbout, getContact;
// const config = require('./config');

const getIndex = (req, res) => {
  res.send('Get all boards');
};

const getAbout = (req, res) => {
  res.send('Get company about page');
};

const getContact = (req, res) => {
  res.send('Get company contact page');
};

module.exports = {
  getIndex,
  getAbout,
  getContact,
};
