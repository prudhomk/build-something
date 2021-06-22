export function formatGifs(item) {
  console.log('munge', item.images.original_mp4);

  return {
    id: item.id,
    url: item.url,
    title: item.title,
    image: item.images.original_mp4
  };

}
