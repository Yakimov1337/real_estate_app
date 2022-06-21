import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'e70a920ce9msh998a5fabf7f1588p18384fjsnb3ba3ba04241',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}