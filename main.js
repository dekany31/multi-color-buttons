function _load() {

  let jumpButton = document.getElementById("flip-flop"); //változó def,

  jumpButton.addEventListener("click", (event) => { //függvény
    event.target.classList.toggle("right_btn");
    console.log(event.target);
    console.log(jumpButton.textContent);

    jumpButton.className === "right_btn" ? jumpButton.textContent = "Go Left!"
      : jumpButton.textContent = "Go Right!"; //feltétel operátor
  });

  let changeMyColorButton = document.querySelector("#change-color");

  console.log(changeMyColorButton);
  changeMyColorButton.addEventListener("click", (event) => {
    changeMyColorButton.classList.toggle("red_btn");//hozzaad, leveszi a class-t
  });

  let changeNeighbourColor = document.querySelector('#change-neighbour-color');
  let neighbour = document.querySelector('#neighbour');

  changeNeighbourColor.addEventListener("click", () => {
    console.log(neighbour);
    neighbour.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);//megvaltoztatja a CSS-t random szinure
  });

  let counter = document.querySelector('#count');

  counter.addEventListener("click", () => {
    counter.innerHTML++;
  });
};

window.addEventListener("load", _load); //lefut a fuggveny