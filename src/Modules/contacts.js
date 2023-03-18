const contactsPopUp = () => {
  const popUp = document.querySelector('header');
  const contactUs = document.createElement('div');
  contactUs.className = 'contacts';
  contactUs.innerHTML = `      
      <div id="popup-btn-close">&times;</div>
        <div class="contact-h2">
          <h2>Contacts</h2>
        </div>
      <div class="contact-details">
        <div>
         <p>
          👤 Sane Myburg <br>
          <a href="https://github.com/SaneMyburg">GitHub</a><br>
          <a href="https://twitter.com/@SaneMyburg">Twitter</a><br>
          <a href="https://linkedin.com/in/SaneMyburg">LinkedIn</a><br>
         </p>
        </div>
        <div>
         <p>
          👤 Besufekad Alem <br>
          <a href="https://github.com/Besufekad-HAZ">GitHub</a><br>
          <a href="https://twitter.com/BesufekadAlemu7">Twitter</a><br>
          <a href="www.linkedin.com/in/besura">LinkedIn</a><br>
         </p>
        </div>
      </div> `;

  popUp.appendChild(contactUs);

  const close = document.querySelector('#popup-btn-close');
  close.addEventListener('click', () => {
    contactUs.remove();
  });
};

export default contactsPopUp;