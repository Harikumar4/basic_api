const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const path = require('path');
const axios = require('axios'); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.'));

const api_key = "your_own_api_key";


const fetchImage = async (query) => {
    try {
      const response = await axios.get(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&per_page=3`);
      const images = response.data.hits;
      if (images.length > 0) {
        return images[0].webformatURL;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
};

app.get('/:query', async (req, res) => {
    const query = req.params.query;
    const imageUrl = await fetchImage(query);
    if (imageUrl) {
      res.render('views/display',{imageUrl}); 
    } else {
      res.status(404).send('Image not found');
    }
  });

app.listen(port,()=>{
    console.log("Server Listening on PORT: ",port);
})
