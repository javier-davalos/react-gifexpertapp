


export const getGifs = async( category ) => {

    const url =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=zzBrqQlY3yEjZBeb9RfZDp7wzYOXDjQt`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gits = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    return  gits;
    
}