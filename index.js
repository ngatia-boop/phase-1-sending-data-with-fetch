// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      const body = document.querySelector("body");
      body.innerHTML += `<p>${data.id}</p>`; // Append the new ID
    })
    .catch(error => {
      const body = document.querySelector("body");
      body.innerHTML += `<p>${error.message}</p>`;
    });
}
