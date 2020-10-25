import React, { useState, useEffect } from 'react';
import ImageCard from './components/imageCard';
import ImageSearch from './components/imagesearch';
import './assets/customStyle.css'
import logo from './assets/img/pixabay.svg'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=200`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);
  return (
    <div className="container mx-auto">
      <div className='toptxt'><h4>Created Using  <a href='https://pixabay.com/'><img className='logo' src={logo} /></a> API</h4></div>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found For The Term '{term}'</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">LOADING...</h1>


        :

        <div className="flex flex-wrap -mx-1 lg:-mx-4 gap-4">

          {
            images.map(image => (
              <ImageCard key={image.id} image={image} />
            ))
          }


        </div>}

    </div>
  );
}

export default App;
