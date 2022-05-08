document.body.innerHTML = `<div class="heading">
      <img
        src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?fit=1000%2C742&ssl=1"
        alt="icon-img"
        class="icon"
      />
      <h1>Anime Quotes</h1>
    </div>
    <div class="container mt-5 text-center">
      <button class="btn btn-primary" id="fetchBtn">Get Quotes</button>
    </div>
    <div id="main" class="container mt-5"></div>`;

let url = 'https://animechan.vercel.app/api/quotes';

const fetchDataBtn = document.querySelector('#fetchBtn');
const displayContainer = document.querySelector('#main');

fetchDataBtn.addEventListener('click', getData);

async function getData() {
  displayContainer.innerHTML = '<h2>Fetching Data...</h2>';
  try {
    let response = await fetch(url);
    let data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function displayData(array) {
  let resultData = array
    .map((ele) => {
      return `<div class="card card-shadow col-md-5 p-0">
        <div class="card-header"><h5 class="m-0">${ele.anime}</h5></div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              ${ele.quote}
            </p>
            <footer class="blockquote-footer">
              by <cite title="Source Title">${ele.character}</cite>
            </footer>
          </blockquote>
        </div>
      </div>`;
    })
    .join('');
  displayContainer.innerHTML = resultData;
}
