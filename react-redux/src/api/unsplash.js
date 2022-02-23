import axios from 'axios';

// default config to use the same axios settings in multiple components
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID _rKDnAdQlKexqAsytbYe6pr0MbSm5IHs5sMfX2_eABs",
    },
})