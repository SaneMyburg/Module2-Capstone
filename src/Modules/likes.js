async function addLikes(id) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/baKrJfCyF9gZCtXak8eu/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      likes: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json());
}

async function showLikes(id) {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/baKrJfCyF9gZCtXak8eu/likes',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  try {
    const data = await res.json();
    const likesCount = document.getElementById(`id${id}`);
    data.map((like) => {
      if (like.item_id === id) {
        likesCount.textContent = `${like.likes} likes`;
      }
      return true;
    });
  } catch (error) {
  }
}
export { addLikes, showLikes };
