import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID d8d6ff8b437954ed74d0f67a6b05c8822295d0f4056569f245466d1ad5865ed4'
}
});