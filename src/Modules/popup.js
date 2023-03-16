export const displayPopUp = (id) => {
  commentPopup.classList.add('show');
  commentPopup.innerHTML = `      <div id="popup-btn-close">&times;</div>
    <div class="comment-popup-wrapper">
      <div class="info-section">
        <img id="food-image" src="${foodList.foods[id].image}" alt="" />
        <h2 id="name-food">${foodList.foods[id].title}</h2>
        <p id="recipes">...</p>
      </div>
      <div class="comments-section">
        <h3>Add Comment:</h3>
        <form id="comment-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <textarea
            name="comment"
            rows="5"
            placeholder="Your Comment"
            required
          ></textarea>
          <button id="button" type="submit">Submit</button>
        </form>

        <h3 id="comments-header">Comments:</h3>
        <ul id="comments">
        </ul>
      </div>
    </div>`;
};

