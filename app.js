const input = document.querySelector("#input");
const body = document.querySelector("body");
const card1 = document.querySelector(".card1");
const select = document.querySelector("#flag");
const time=document.querySelector

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
      const countryFlag = data.filter((x) => {
        return x.name.common === select.value;
      });

      slectedCountry(countryFlag);
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
    maps: { googleMaps },
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
};

setInterval(() => {

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const a=setInterval(()=>{":"},1000)
  time.innerHTML =
    hours +
    ":" +
    minutes +
    a
    +
    seconds;


}, 1000); 