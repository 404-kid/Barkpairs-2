fetch(`/api/dogs/${getId()}`)
    .then(response => response.json())
    .then(response => addDogToPage(response.dog));

function getId() {
  console.log((new URL(window.location.href)).pathname.split("/"))
  const path = (new URL(window.location.href)).pathname.split("/")
  return path[path.length - 1]
}

function addDogToPage(dog){
  console.log(dog);
    const $li = document.createElement("li");
    $li.innerHTML = `
        <h3 class="name"><a href="/dogs/${dog.id}">${dog.name}</a></h3>
        <img class="profile-picture" src="/${dog.profilePicture}" alt="${dog.name}" />
        <p class="bio">${dog.bio}</p>
    `;
    document.querySelector(".dog").appendChild($li);
}
