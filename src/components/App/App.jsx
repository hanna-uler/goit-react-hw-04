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
  const [needLoadMoreBtn, setLoadMoreBtn] = useState(false);

  const onSearchSubmit = async (searchQuery) => {
    setPictures([]);
    setPage(1);
    setQuery(searchQuery);
    setLoadMoreBtn(false);
  }
  
  const incrementPage = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }
    const upgradeGallery = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchPictures(query, page);
        const newPicArray = data.results;
        setPictures((prevPicArray) => [...prevPicArray, ...newPicArray]);
        if (data.total_pages > page) {
          setLoadMoreBtn(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    upgradeGallery();
  }, [query, page])
  
  return (
    <> 
      <p>Project is in progress...</p>  
      <SearchBar onSubmit={onSearchSubmit}/>
      {isError && <ErrorMessage/>}
      {pictures.length > 0 && <ImageGallery picsArray={pictures} />}
      {isLoading && <Loader />}
      {needLoadMoreBtn && <LoadMoreBtn turnPage={incrementPage} />}
      <Toaster position="top-right" reverseOrder={false} duration="3000" />
    </>
  )
}