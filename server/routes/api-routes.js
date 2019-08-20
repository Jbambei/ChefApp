const db = require("../models");
const bcrypt = require(`bcrypt`);
const { User } = require("../models");
const axios = require('axios')


module.exports = function(app) {
    app.get('/api/greeting', (req, res) => {
        const name = req.query.name || 'World';
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
      });


      //gets directions from Google Directions API. Doing it here to hide API key 
const getDirections = (origin, destination) => {
  let apiKey = AIzaSyArYUj_aKKGPm5FDl1dAf_CN_Ni62nkAMM
    try {
      return axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`) 
    } catch (error) {
      console.log(error)
    }
}

// display directions to page. response is translated to a series of html instructions. UNFINISHED

const displayDirections = async () => {
  const funcCall = getDirections()
  .then(response => {
    if (response) {
      for (let i = 0; i < response.length; i++) {
        let instructions = response.routes.legs.steps[i].html_instructions
        let distance = response.routes.legs.steps[i].distance.text

        console.log(instructions)
        console.log(distance)

          // display each one to the page here, so then when it loops back through its fine
          //https://picturepan2.github.io/spectre/elements/typography.html#typography-lists
      }
    }
  })
}






































      // app.post('/register', (req, res) => {
      //   // const { email, username, password } = req.body;
      //   console.log(req.body)
      //   const email = req.body.email
      //   const username = req.body.username
      //   const password = req.body.password
      //   // const saltRounds = 10;
      //   // bcrypt.hash(password, saltRounds, function (err, hash) {
      //     db.User.create({
      //       email: email,
      //       username: username,
      //       password: password
      //     }).then((result) => {
      //       console.log("User created: ", result);
      //       res.json("user created!");
      //     })
      //   // });
      // });


        // app.post('/register', async(req, res) => {
        // // hash the password provided by user with bcrypt
        // const hash = bcrypt.hashSync(req.body.password, 10);
        // const saltRounds = 10;
        // try {
        //     // create a new user with password hash from bcrypt
        //     let user = await User.create(
        //         Object.assign(req.body, { password: hash })
        //     );
        //     // data will be an object with the user and its authToken
        //     let data = await user.authorize();
            
        //     // send back the new user and auth token to the client {user, authToken}
        //     return res.json(data);
    
        // } catch(err) {
        //     return res.status(400).send(err);
        // }

        //   })
}