fetch('https://api.github.com/search/users?q=octocat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ octocat })
})
  .then(response => response.json())
  .then(data => {
    // Process the data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });