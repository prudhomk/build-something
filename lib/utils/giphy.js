import fetch from 'node-fetch';

export const giphyClient = async () => {
  const res = await fetch('http://api.giphy.com/v1/gifs/random', {
    method: 'GET',
    headers: {
      'api_key': 'qoxwV21wsE9HVIpG0IHGWjpGshqPTdj2',
      'Content-Type': 'application/json',
    },
  }
  );
  const randomGif = await res.json();
  
  console.log(randomGif);
  return randomGif;
};


