import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useState, useEffect } from 'react';


export default function App() {
  const [pictures, setPictures] = useState([]);
  
  useEffect(() => {
    async function fetchPics() {
      const response = await axios.get("https://api.unsplash.com/photos?client_id=s2Hc5k6SJc9T2KwEbCWWrchT2ziggT9x-1USmS7To8Y");
      setPictures(response.data);
      console.log(response.data);
    }
    fetchPics();
  }, []);

  const searchPictures = async (searchQuery) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=s2Hc5k6SJc9T2KwEbCWWrchT2ziggT9x-1USmS7To8Y&query=${searchQuery}`);
    setPictures(response.data.results);
    }

  return (
    <> 
      <p>Project is in progress...</p>  
      <SearchBar onSubmit={searchPictures}/>
      {pictures.length > 0 && <ImageGallery picsArray={pictures}/>}
      <Toaster position="top-right" reverseOrder={false} duration="3000"/>
    </>
  )
}

// client_id=s2Hc5k6SJc9T2KwEbCWWrchT2ziggT9x-1USmS7To8Y