import axios from 'axios';

const KEY = 'AIzaSyD_3bNG8gRcqIFs9hUgxDHlpKivwe9xAS0';
// public key = no need to hide it (.env file)

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        // fields: 'items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics',
        part:'snippet',
        maxResults: 5,
        key: KEY,
    }
})
