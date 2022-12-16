async function getUsers() {
  let root = document.getElementById("root");
  let resp = await fetch("http://localhost:4000/api/users");
  let data = await resp.json();
  console.log(data);
  html = data
    .map((d) => {
      return `
        <p>${d._id}, ${d.name},${d.age},${d.email},${d.__v}</p>
    `;
    })
    .join("");
  root.innerHTML = html;
}
getUsers();

async function getUsersID(parametro) {
  let root2 = document.getElementById("root2");
  let resp = await fetch(`http://localhost:4000/api/users/${parametro}`);
  let data = await resp.json();
  console.log(data);
}
getUsersID("639cd621fd4e9bc268a3639e");
