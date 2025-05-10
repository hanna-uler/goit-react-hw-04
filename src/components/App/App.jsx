import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'

export default function App() {
  const searchPictures = (searchQuery) => {
    console.log(searchQuery);
  }

  return (
    <> 
      <p>Project is in progress...</p>  
      <SearchBar onSubmit={searchPictures} />
    </>
  )
}