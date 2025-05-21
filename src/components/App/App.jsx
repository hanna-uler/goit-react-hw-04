import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import fetchPictures from '../../pictures-api';
import Loader from '../Loader/Loader';


export default function App() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const searchPictures = async (searchQuery) => {
    try {
      setError(false);
      setPictures([]);
      setLoading(true);
      const data = await fetchPictures(searchQuery);
      setPictures(data.results);      
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
    }

  return (
    <> 
      <p>Project is in progress...</p>  
      <SearchBar onSubmit={searchPictures}/>
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
      {pictures.length > 0 && <ImageGallery picsArray={pictures} />}
      <Toaster position="top-right" reverseOrder={false} duration="3000" />
    </>
  )
}
