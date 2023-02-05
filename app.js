const input = document.querySelector("#input");
const card1 = document.querySelector(".card1");
const select = document.querySelector("#flag");
const timeDiv = document.querySelector(".time");

window.onload = function () {
  flagApi();
};
const flagApi = async () => {
  const url = `https://restcountries.com/v3.1/all`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    select.value = "";
    data.forEach((item) => {
      select.innerHTML += ` <option value=${item.name.common}>${item.name.common}</option>`;
    });

    select.addEventListener("change", () => {
      const countryFlag = data.filter((item) => {
        return item.name.common === select.value;
      });

      slectedCountry(countryFlag);
      bgColor();
    });
  } catch (error) {
    console.log(error);
  }
};

const slectedCountry = (countryC) => {
  console.log(countryC);
  const {
    name: { common },
    currencies,
    capital,
    languages,
    flags: { png },
    population,
  } = countryC[0];

  card1.innerHTML = `<div class="card " style="width: 18rem;">
            <img src=${png} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${common}</h5>
              
            </div>
            <ul class="list-group list-group-flush text-left">
                <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i>${capital}</li>
                <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>${Object.values(
                  languages
                )}</li>
                <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i>${
                  Object.values(currencies)[0].name
                },
      ${Object.values(currencies)[0].symbol}</li>
      <li class="list-group-item"><i class="fa-solid fa-users-between-lines"></i>${population}</li>
            </ul>

        </div>`;


        const body = document.querySelector("body");
        const h2 = document.querySelector("h2");
        const a = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const c = Math.floor(Math.random() * 255);
        const renk = `rgb(${a},${b},${c})`;
        const renk1 = `rgb(${c},${a},${b})`;

        body.style.backgroundColor = `${renk}`;
        h2.style.color = `${renk1}`;
};

setInterval(() => {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timeDiv.innerHTML = hours + " : " + minutes + " : " + seconds;

  
}, 1000);

// const bgColor = () => {};
