const colorToggleEL = document.getElementById("colorToggle");
const addBookBtn = document.getElementById("addBookBtn");
const addOverlayEL = document.getElementById("addOverlay");
const addBookBox = document.getElementById("addBookBox");
const bookBoxCancel = document.getElementById("bookBoxCancel");

const addBtn = document.getElementById("bookBoxAdd");
const bookContainer = document.querySelector("section");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookDescription = document.getElementById("bookDescription");

const deleteBtn = document.getElementById("deleteBtn");

colorToggleEL.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

addBookBtn.addEventListener('click', () => {
  addOverlayEL.style.display = "block";
  addBookBox.style.display = "block";
})

bookBoxCancel.addEventListener('click', (e) => {
  e.preventDefault();
  addOverlayEL.style.display = "none";
  addBookBox.style.display = "none";
})

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let divEl = document.createElement("div");
  divEl.setAttribute("class", "book-container")
  divEl.innerHTML = `
      <h2>${bookTitle.value}</h2>
      <h5>${bookAuthor.value}</h5>
      <p>${bookDescription.value}</p>
      <button class="deleteBtn">Delete</button>
  `;
  divEl.querySelector(".deleteBtn").addEventListener('click', (e) => {
    deleteContainer(e);
  });
  bookContainer.append(divEl);
  addOverlayEL.style.display = "none";
  addBookBox.style.display = "none";
})

// deleteBtn.addEventListener('click', () => {
//   deleteContainer(e);
// })

function deleteContainer(e) {
  e.target.parentElement.remove()
}
