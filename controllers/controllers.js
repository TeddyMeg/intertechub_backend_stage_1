//It's good to put the logic in a controller and not in routes
// This is used to create functions that will be served when the api is called using routes
const getName = (req, res) => {
    res.status(200).send('Teddy Tassew');
  }
const getHobby = (req, res) => {
    res.status(200).json({
      hobby: 'Programming',
      details: 'Creating software and solving problems through code'
    });
}
const getDream = (req, res) => {
    res.status(200).send('To become a world-class software engineer and make a positive impact through technology');
}

module.exports = {
    getName,
    getHobby,
    getDream
}