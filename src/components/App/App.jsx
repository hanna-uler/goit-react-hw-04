import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import fetchPictures from '../../pictures-api';


export default function App() {
  const [pictures, setPictures] = useState([]);

  const searchPictures = async (searchQuery) => {
    try {
      const data = await fetchPictures(searchQuery);
      setPictures(data.results);      
    } catch (error) {
      
    }
    }

  return (
    <> 
      <p>Project is in progress...</p>  
      <SearchBar onSubmit={searchPictures}/>
      {pictures.length > 0 && <ImageGallery picsArray={pictures} />}
      <Toaster position="top-right" reverseOrder={false} duration="3000"/>
    </>
  )
}
