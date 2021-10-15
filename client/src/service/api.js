import axios from 'axios';

const URL = 'http://localhost:8000';


export const getNews = async () => {
    try {
        return await axios.get(`http://localhost:8000/news`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}