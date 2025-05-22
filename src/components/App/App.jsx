import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useState, useEffect, useRef } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import fetchPictures from '../../pictures-api';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import NoResultsMessage from '../NoResultsMessage/NoResultsMessage';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const onSearchSubmit = async (searchQuery) => {
    setPictures([]);
    setPage(1);
    setQuery(searchQuery);
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
        setTotalPages(data.total_pages);
        setPictures((prevPicArray) => [...prevPicArray, ...newPicArray]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    upgradeGallery();
  }, [query, page]);

  const loaderRef = useRef(null);
  useEffect(() => {
  if (isLoading && loaderRef.current) {
    loaderRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}, [isLoading]);
  
  return (
    <> 
      <p>Project is in progress...</p>  
      <SearchBar onSubmit={onSearchSubmit}/>
      {isError && <ErrorMessage/>}
      {pictures.length > 0 && <ImageGallery picsArray={pictures} />}
      {isLoading && (
        <div ref={loaderRef}>
          <Loader />
        </div>
      )}
      {totalPages > page && !isLoading && <LoadMoreBtn turnPage={incrementPage} />}
      {totalPages === 0 && <NoResultsMessage/> }
      <Toaster position="top-right" reverseOrder={false} duration="3000" />
    </>
  )
}