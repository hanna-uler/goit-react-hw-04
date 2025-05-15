import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import ImageGallery from '../ImageGallery/ImageGallery';

async function fetchPics() {
  const response = await axios.get("https://api.unsplash.com/photos?client_id=s2Hc5k6SJc9T2KwEbCWWrchT2ziggT9x-1USmS7To8Y");
  return response;
}

export default function App() {
  const searchPictures = (searchQuery) => {
    console.log(searchQuery);
  }

  return (
    <> 
      <p>Project is in progress...</p>  
      <SearchBar onSubmit={searchPictures} testApi={fetchPics} />
      <ImageGallery 
      // picsArray={}
      />
      <Toaster position="top-right" reverseOrder={false} duration="3000"/>
    </>
  )
}

// client_id=s2Hc5k6SJc9T2KwEbCWWrchT2ziggT9x-1USmS7To8Y

// response.data - array of objects
// single obj: 
// alt_description
// : 
// "A remote control sitting on top of a white table"
// alternative_slugs
// : 
// {en: 'a-remote-control-sitting-on-top-of-a-white-table-PSokIXbr7RI', es: 'un-mando-a-distancia-encima-de-una-mesa-blanca-PSokIXbr7RI', ja: '白いテーブルの上に座ったリモコン-PSokIXbr7RI', fr: 'une-telecommande-posee-sur-une-table-blanche-PSokIXbr7RI', it: 'un-telecomando-seduto-sopra-un-tavolo-bianco-PSokIXbr7RI', …}
// asset_type
// : 
// "photo"
// blur_hash
// : 
// "LjGbxF00%MIUM_ozofazayf6j[fk"
// breadcrumbs
// : 
// []
// color
// : 
// "#262626"
// created_at
// : 
// "2024-09-11T14:41:25Z"
// current_user_collections
// : 
// []
// description
// : 
// null
// height
// : 
// 6000
// id
// : 
// "PSokIXbr7RI"
// liked_by_user
// : 
// false
// likes
// : 
// 18
// links
// : 
// {self: 'https://api.unsplash.com/photos/a-remote-control-sitting-on-top-of-a-white-table-PSokIXbr7RI', html: 'https://unsplash.com/photos/a-remote-control-sitting-on-top-of-a-white-table-PSokIXbr7RI', download: 'https://unsplash.com/photos/PSokIXbr7RI/download?i…3w3NDg0NDZ8MXwxfGFsbHwxfHx8fHx8fHwxNzQ3MzIzNjI2fA', download_location: 'https://api.unsplash.com/photos/PSokIXbr7RI/downlo…3w3NDg0NDZ8MXwxfGFsbHwxfHx8fHx8fHwxNzQ3MzIzNjI2fA'}
// promoted_at
// : 
// null
// slug
// : 
// "a-remote-control-sitting-on-top-of-a-white-table-PSokIXbr7RI"
// sponsorship
// : 
// {impression_urls: Array(0), tagline: 'A better way to get paid', tagline_url: 'https://www.sumup.com/', sponsor: {…}}
// topic_submissions
// : 
// {architecture-interior: {…}}
// updated_at
// : 
// "2025-05-15T10:11:37Z"
// urls
// : 
// {raw: 'https://images.unsplash.com/photo-1726065235209-1c…fGFsbHwxfHx8fHx8fHwxNzQ3MzIzNjI2fA&ixlib=rb-4.1.0', full: 'https://images.unsplash.com/photo-1726065235209-1c…HwxfHx8fHx8fHwxNzQ3MzIzNjI2fA&ixlib=rb-4.1.0&q=85', regular: 'https://images.unsplash.com/photo-1726065235209-1c…fHx8fHwxNzQ3MzIzNjI2fA&ixlib=rb-4.1.0&q=80&w=1080', small: 'https://images.unsplash.com/photo-1726065235209-1c…8fHx8fHwxNzQ3MzIzNjI2fA&ixlib=rb-4.1.0&q=80&w=400', thumb: 'https://images.unsplash.com/photo-1726065235209-1c…8fHx8fHwxNzQ3MzIzNjI2fA&ixlib=rb-4.1.0&q=80&w=200', …}
// user
// : 
// {accepted_tos
// : 
// true
// bio
// : 
// "Developing tools & technology to help business owners around the world thrive."
// first_name
// : 
// "SumUp"
// for_hire
// : 
// false
// id
// : 
// "hHagXXIc3vU"
// instagram_username
// : 
// "sumup"
// last_name
// : 
// null
// links
// : 
// {self: 'https://api.unsplash.com/users/sumup', html: 'https://unsplash.com/@sumup', photos: 'https://api.unsplash.com/users/sumup/photos', likes: 'https://api.unsplash.com/users/sumup/likes', portfolio: 'https://api.unsplash.com/users/sumup/portfolio'}
// location
// : 
// null
// name
// : 
// "SumUp"
// portfolio_url
// : 
// "https://www.sumup.com/"
// profile_image
// : 
// {small: 'https://images.unsplash.com/profile-1725878289869-…mage?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32', medium: 'https://images.unsplash.com/profile-1725878289869-…mage?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64', large: 'https://images.unsplash.com/profile-1725878289869-…ge?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128'}
// social
// : 
// {instagram_username: 'sumup', portfolio_url: 'https://www.sumup.com/', twitter_username: null, paypal_email: null}
// total_collections
// : 
// 6
// total_illustrations
// : 
// 0
// total_likes
// : 
// 0
// total_photos
// : 
// 190
// total_promoted_illustrations
// : 
// 0
// total_promoted_photos
// : 
// 3
// twitter_username
// : 
// null
// updated_at
// : 
// "2025-05-15T02:58:26Z"
// username
// : 
// "sumup"
// [[Prototype]]
// : 
// Object}
// width
// : 
// 4000
// [[Prototype]]
// : 
// Object

// responce
// {data: Array(10), status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
// config
// : 
// {transitional: {…}, adapter: Array(3), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
// data
// : 
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// headers
// : 
// AxiosHeaders {cache-control: 'max-age=9768,stale-if-error=5387,stale-while-revalidate=76', content-language: 'en', content-length: '7635', content-type: 'application/json', link: '<https://api.unsplash.com/photos?client_id=s2Hc5k6…wEbCWWrchT2ziggT9x-1USmS7To8Y&page=2>; rel="next"', …}
// request
// : 
// XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status
// : 
// 200
// statusText
// : 
// ""
// [[Prototype]]
// : 
// Object