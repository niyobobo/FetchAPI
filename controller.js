function getText() {
  fetch('sample.txt')
    .then(res => res.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err));
}

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      let output = '<h2>Users</h2>';
      for (const user of data) {
        output += `
              <ul class="list-group mb-4">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Name: ${user.username}</li>
                <li class="list-group-item">Email: ${user.email}</li>
              </ul>
            `;
      };
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getJSON() {
  fetch('users.json')
    .then(res => res.json())
    .then(data => {
      let output = '<h2>Users</h2>';
      for (const user of data) {
        output += `
              <ul class="list-group mb-4">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Email: ${user.email}</li>
              </ul>
            `;
      };
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function addPost(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title,
        body
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}