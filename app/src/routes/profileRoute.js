const express = require('express');
const router = express.Router();
const app = express();
const path  = require('path');
var firebase = require("firebase")
const port = 3000; // TODO: change it later according to the env file: process.env.PORT;

app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'ejs');


const firebaseConfig = {
  apiKey: 'AIzaSyA_pjw07w_NPI7xSBjj9nDLCQMYiaHd05g',
  authDomain: 'wanderlust-b43f0.firebaseapp.com',
  projectId: 'wanderlust-b43f0',
  storageBucket: 'wanderlust-b43f0.appspot.com',
  messagingSenderId: '270953378851',
  appId: '1:270953378851:web:fc31f3b872474dbb226d96',
  measurementId: 'G-CETQ2WC186',
};

app.use(cors())
app.use(bodyParser.json());


const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);





router.get("/profile/:username", async (req, res) =>{
  database.collection('posts').doc(id).get()
  .then(posts => {
      if (posts) {
          res.json(posts.data())
      } else {
          res.status(400).json('User does not exist')
      }
  })
  .catch(err => {
      res.status(400).json('error getting posts please login again')
  })
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})