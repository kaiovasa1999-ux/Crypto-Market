import { useEffect,useState } from "react";

const my_api_key = import.meta.env.VITE_GIFY_APY

const useFetch = ({keyword}) =>{
    const [gifUrl,setGifUrl] = useState('');

    const fetchGIF = async () =>{
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_ley${my_api_key}&q=${keyword.split(" ").join("")}&limit=1`)
            const {data} = await response.json();

            setGifUrl(data[0]?.images?.downsized_medium.url)

        } catch (error) {
            setGifUrl('https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif')
        }
    }

    useEffect(() =>{
        if(keyword){
            
            fetchGIF();
        }

    },[keyword])

    return gifUrl;
}

export default useFetch;