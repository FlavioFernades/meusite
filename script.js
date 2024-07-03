document.addEventListener('DOMContentLoaded', function() {
  const avatar = document.getElementById('avatar');
  const h2Elements = document.querySelectorAll('h2');
  let avatarToggle = false;

  avatar.addEventListener('click', function() {
    avatar.src = avatarToggle ? 'avatar.jpg' : 'avatar2.jpg'; 
    avatarToggle = !avatarToggle;
  });

  h2Elements.forEach(function(h2) {
    h2.addEventListener('click', function() {
      const content = h2.nextElementSibling;
      content.style.display = 'none';
    });

    h2.addEventListener('dblclick', function() {
      const content = h2.nextElementSibling;
      content.style.display = 'block';
    });
  });
});
