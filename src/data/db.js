import axios from "axios";
const apiBaseUrl = 'https://api.themoviedb.org/3';
const apiKey = '4ad412f3b31363ecebda8fdb1535ce67';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;

const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    };

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}

export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint);
}