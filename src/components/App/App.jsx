import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import fetchPictures from '../../pictures-api';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';


export default function App() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const searchPictures = async (searchQuery) => {
    setPage(1);
    setQuery(searchQuery);
  }
  
  const incrementPage = () => {
    setPage(page + 1);
    // console.log(page);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }
    fetchPictures(query, page).then((data)=>{
      const newPicArray = data.results;
      setPictures((prevPicArray) => {
        return [...prevPicArray, ...newPicArray];
      })
    });
    // const upgradeGallery = async (query, page) =>{
    // try {
    //   setError(false);
    //   setPictures([]);
    //   setLoading(true);
    //   const data = await fetchPictures(query);
    //   setPictures(data.results);
    // } catch {
    //   setError(true);
    // } finally {
    //   setLoading(false);
    // }
    // }
    // upgradeGallery();
    console.log(query, page);
}, [query, page])

  return (
    <> 
      <p>Project is in progress...</p>  
      <SearchBar onSubmit={searchPictures}/>
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
      {pictures.length > 0 && <ImageGallery picsArray={pictures} />}
      <LoadMoreBtn turnPage={incrementPage} />
      <Toaster position="top-right" reverseOrder={false} duration="3000" />
    </>
  )
}
