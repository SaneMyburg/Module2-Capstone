const mealAppUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ENGNIRTAK9Pvf9V8cU4n';
const likesUrl = `${mealAppUrl}/likes`;

export const getLikesCount = async () => {
  try {
    const response = await fetch(`${likesUrl}`);
    const data = await response.json();
    return data.likes;
  } catch (error) {
    console.error(error);
  }
};


export const updateLikesCount = async (likesCount) => {
    console.log('Likes count:', likesCount);
  const response = await fetch(`${likesUrl}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ likes: likesCount })
  });
  const data = await response.json();
  return data.likes;
};




 