export function formatGifs(arr) {
  return arr.map(item => {
    return {
      id: item.id,
      url: item.url,
      title: item.title,
      image: item.image
    };
  });
}
