document.addEventListener('DOMContentLoaded', function() {
  const avatar = document.getElementById('avatar');
  const h2Elements = document.querySelectorAll('h2');
  let avatarToggle = false;

  // Toggle avatar image on click
  avatar.addEventListener('click', function() {
    avatar.src = avatarToggle ? 'avatar.jpg' : 'avatar2.jpg'; // Change 'avatar2.jpg' to the path of the second image
    avatarToggle = !avatarToggle;
  });

  // Toggle visibility of section content on click/double click
  h2Elements.forEach(function(h2) {
    h2.addEventListener('click', function() {
      const content = h2.nextElementSibling;
      if (content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    h2.addEventListener('dblclick', function() {
      const content = h2.nextElementSibling;
      content.style.display = 'block';
    });
  });
});
