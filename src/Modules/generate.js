// fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ENGNIRTAK9Pvf9V8cU4n', {
//   method: 'POST',
// })
//   .then((response) => response.text())
//   .then((result) => console.log(result));

const APP_ID = 'ENGNIRTAK9Pvf9V8cU4n';
const endpoint = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes/`;

export async function getLikesCount(itemId) {
  try {
    const response = await fetch(`${endpoint}?item_id=${itemId}`);
    if (response.ok) {
      const data = await response.json();
      return data.likes;
    } else {
      console.error('Network response was not ok');
    }
  } catch (error) {
    console.error('There was a problem with the API:', error);
  }
}

export async function updateLikesCount(itemId, likesCount) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemId }),
    });
    if (!response.ok) {
      console.error('Network response was not ok');
    }
  } catch (error) {
  }
  
}
