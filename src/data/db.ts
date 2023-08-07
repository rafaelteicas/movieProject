import axios from "axios";

export const apiCall = async (params: string) => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${params}?api_key=4ad412f3b31363ecebda8fdb1535ce67`,
        params: {
            language: 'pt-BR'
        }
    };

    const response = await axios.request(options)

    return response.data
}
