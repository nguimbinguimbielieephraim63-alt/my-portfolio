// Select form and comment list
const form = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

// Listen for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload

  // Get values from inputs
  const name = document.getElementById('name').value.trim();
  const comment = document.getElementById('comment').value.trim();

  if (name === '' || comment === '') return; // do nothing if empty

  // Create a new comment div
  const div = document.createElement('div');
  div.classList.add('comment');
  div.innerHTML = `<strong>${name}</strong> says:<p>${comment}</p>`;

  // Add comment to the page
  commentList.appendChild(div);

  // Clear form inputs
  form.reset();

  // Optional: scroll to the new comment
  div.scrollIntoView({ behavior: 'smooth' });
});
