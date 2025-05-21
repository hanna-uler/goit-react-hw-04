import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export default async function fetchPictures(searchQuery) {
    const response = await axios.get(`/photos?client_id=s2Hc5k6SJc9T2KwEbCWWrchT2ziggT9x-1USmS7To8Y&query=${searchQuery}`);
    return response.data;
}