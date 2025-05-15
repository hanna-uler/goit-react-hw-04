import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';

export default function App() {
  const searchPictures = (searchQuery) => {
    console.log(searchQuery);
  }

  return (
    <> 
      <p>Project is in progress...</p>  
      <SearchBar onSubmit={searchPictures} />
      <Toaster position="top-right" reverseOrder={false} duration="3000"/>
    </>
  )
}