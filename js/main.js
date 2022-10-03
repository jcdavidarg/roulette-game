const betList = document.getElementById("bet");
const options = document.getElementById("options");

const balance = document.getElementById("balance");
const betText = document.getElementById("betText");
const legend = document.getElementById("legend");
const winner = document.getElementById("winner");

const clear = document.getElementById("clear");
const spin = document.getElementById("spin");
const repeat = document.getElementById("repeat");

const money = {
  value: 1000,
};

const bet = {
  value: [],
  total: 0,
};

const option = {
  value: [],
  bets: {
    values: [],
    options: [],
  },
};

repeat.values;
repeat.options;
repeat.totals;
repeat.chipValues = [];
repeat.chipOptions = [];

const clearChips = () => {
  const control = document.getElementsByClassName("coin");

  let i = 0;
  while (control.length != 0) {
    control[0].remove();
    document.getElementsByClassName("numbersN")[0].classList.remove("numbersN");
    i++;
  }
};

const repeatChips = () => {
  const control = document.getElementsByClassName("numbersN");
  repeat.chipValues = [];
  repeat.chipOptions = [];

  let i = 0;
  while (i < control.length) {
    repeat.chipValues.push(control[i].nextSibling.dataset.value);
    if (control[i].title === "2 to 1") {
      repeat.chipOptions.push(control[i].id);
    } else {
      repeat.chipOptions.push(control[i].nextSibling.title);
    }
    i++;
  }
};

const roulette = (betValues, betOptions) => {
  if (bet.total > money.value) {
    legend.innerText = `Money limit!`;
    balance.innerText = `Balance: $${money.value}`;
    betText.innerText = `Bet: $0`;
  } else if (money.value <= 0) {
    legend.innerText = `Out of money`;
  } else {
    if (betValues.length > 0 && betOptions.length > 0) {
      repeat.values = betValues;
      repeat.options = betOptions;
      repeat.totals = bet.total;
    }

    let turn = Math.round(Math.random() * 36);

    money.value -= bet.total;

    winner.innerText = `Winner is: ${turn}`;

    const colOne = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
    const colTwo = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
    const colThree = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
    const red = [
      1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    ];
    const black = [
      2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
    ];

    let total = 0;
    let cantidad;

    for (let i = 0; i < betOptions.length; i++) {
      if (betOptions[i].filter((el) => el == turn).length > 0) {
        cantidad = betOptions[i].filter((el) => el == turn).length;
        total += betValues[i] * cantidad * 35; //winner number
      }
      if (
        betOptions[i].filter((el) => el == "1 st 12").length > 0 &&
        turn <= 12 &&
        turn >= 1
      ) {
        cantidad = betOptions[i].filter((el) => el == "1 st 12").length;
        total += betValues[i] * cantidad * 3; //1 st 12 winner
      }
      if (
        betOptions[i].filter((el) => el == "2 nd 12").length > 0 &&
        turn >= 13 &&
        turn <= 24
      ) {
        cantidad = betOptions[i].filter((el) => el == "2 nd 12").length;
        total += betValues[i] * cantidad * 3; //2 nd 12 winner
      }
      if (
        betOptions[i].filter((el) => el == "3 nd 12").length > 0 &&
        turn >= 25
      ) {
        cantidad = betOptions[i].filter((el) => el == "3 nd 12").length;
        total += betValues[i] * cantidad * 3; //3 nd winner
      }
      if (
        betOptions[i].filter((el) => el == "colOne").length > 0 &&
        colOne.filter((el) => el == turn).length > 0
      ) {
        cantidad = betOptions[i].filter((el) => el == "colOne").length;
        total += betValues[i] * cantidad * 3; //ColOne
      }
      if (
        betOptions[i].filter((el) => el == "colTwo").length > 0 &&
        colTwo.filter((el) => el == turn).length > 0
      ) {
        cantidad = betOptions[i].filter((el) => el == "colTwo").length;
        total += betValues[i] * cantidad * 3; //colTwo
      }
      if (
        betOptions[i].filter((el) => el == "colThree").length > 0 &&
        colThree.filter((el) => el == turn).length > 0
      ) {
        cantidad = betOptions[i].filter((el) => el == "colThree").length;
        total += betValues[i] * cantidad * 3; //colThree
      }
      if (
        betOptions[i].filter((el) => el == "EVEN").length > 0 &&
        turn % 2 == 0 &&
        turn != 0
      ) {
        cantidad = betOptions[i].filter((el) => el == "EVEN").length;
        total += betValues[i] * cantidad * 2; //EVEN
      }
      if (
        betOptions[i].filter((el) => el == "ODD").length > 0 &&
        turn % 2 != 0 &&
        turn != 0
      ) {
        cantidad = betOptions[i].filter((el) => el == "ODD").length;
        total += betValues[i] * cantidad * 2; //ODD
      }
      if (
        betOptions[i].filter((el) => el == "r").length > 0 &&
        red.filter((el) => el == turn).length > 0
      ) {
        cantidad = betOptions[i].filter((el) => el == "r").length;
        total += betValues[i] * cantidad * 2; //red
      }
      if (
        betOptions[i].filter((el) => el == "b").length > 0 &&
        black.filter((el) => el == turn).length > 0
      ) {
        cantidad = betOptions[i].filter((el) => el == "b").length;
        total += betValues[i] * cantidad * 2; //black
      }
      if (
        betOptions[i].filter((el) => el == "1 to 18").length > 0 &&
        turn >= 1 &&
        turn <= 18
      ) {
        cantidad = betOptions[i].filter((el) => el == "1 to 18").length;
        total += betValues[i] * cantidad * 2; //1 to 18
      }
      if (
        betOptions[i].filter((el) => el == "19 to 36").length > 0 &&
        turn >= 19 &&
        turn <= 36
      ) {
        cantidad = betOptions[i].filter((el) => el == "19 to 36").length;
        total += betValues[i] * cantidad * 2; //19 to 36
      }
    }

    if (total > 0) {
      money.value += total;
      balance.innerText = `Balance: $${money.value}`;
      betText.innerText = `Bet: $0`;
      legend.innerText = `Win $${total}`;
    } else {
      balance.innerText = `Balance: $${money.value}`;
      betText.innerText = `Bet: $0`;
      if (betValues.length != 0) {
        legend.innerText = `Lost $${bet.total}`;
      } else {
        legend.innerText = ``;
      }
    }

    bet.value = [];
    option.value = [];
    option.bets.values = [];
    option.bets.options = [];
    bet.total = 0;
  }
};

betList.addEventListener("click", (e) => {
  if (legend.innerText != `` && betText.innerText == `Bet: $0`) {
    clearChips();
  }
  if (e.target.title) {
    legend.innerText = ``;
    bet.value = parseInt(e.target.title);
    if (bet.total === money.value) {
      bet.value = [];
    }
  }
});

options.addEventListener("click", (e) => {
  if (legend.innerText != `` && betText.innerText == `Bet: $0`) {
    clearChips();
  }
  if (
    (e.target.tagName === "SPAN" && bet.value.length !== 0) ||
    (e.target.tagName === "IMG" && bet.value.length !== 0)
  ) {
    if (e.target.innerText == "2 to 1") {
      option.value.push(e.target.id);
    } else if (e.target.title == "2 to 1" && e.target.tagName === "IMG") {
      option.value.push(e.target.previousSibling.id);
    } else {
      option.value.push(e.target.title);
    }
    if (e.target.tagName === "IMG") {
      e.target.src = `./img/${bet.value}.png`;
      e.target.dataset.value = `${bet.value}`;
    }
    if (
      e.target.tagName === "SPAN" &&
      e.target.classList.contains("numbersN")
    ) {
      e.target.nextSibling.src = `./img/${bet.value}.png`;
      e.target.nextSibling.dataset.value = `${bet.value}`;
    }
    if (
      e.target.tagName === "SPAN" &&
      !e.target.classList.contains("numbersN")
    ) {
      e.target.insertAdjacentHTML(
        "afterend",
        `<img src="./img/${bet.value}.png" class="coin" title="${e.target.title}" data-value="${bet.value}"/>`
      );
      e.path[0].classList.add("numbersN");
    }
  }
  if (
    money.value - (bet.total + bet.value * option.value.length) < 0 ||
    bet.total === money.value
  ) {
    legend.innerText = `Money limit!`;
    option.value.pop();
    option.value = [];
    bet.value = [];
    clearChips();
    bet.total = 0;
    betText.innerText = `Bet: $${bet.total}`;
    balance.innerText = `Balance: $${money.value}`;
    option.bets.values = [];
    option.bets.options = [];
  } else {
    legend.innerText = ``;
    betText.innerText = `Bet: $${bet.total + bet.value * option.value.length}`;
    balance.innerText = `Balance: $${
      money.value - (bet.total + bet.value * option.value.length)
    }`;
  }
});

options.addEventListener("blur", (e) => {
  if (option.value.length > 0) {
    option.bets.values.push(bet.value);
    option.bets.options.push(option.value);
    bet.total = bet.total + bet.value * option.value.length;
    option.value = [];
    bet.value = [];
  }
});

clear.addEventListener("click", (e) => {
  bet.value = [];
  option.value = [];
  option.bets.values = [];
  option.bets.options = [];
  balance.innerText = `Balance: $${money.value}`;
  betText.innerText = `Bet: $0`;
  legend.innerText = ``;
  bet.total = 0;
  clearChips();
});

spin.addEventListener("click", (e) => {
  if (option.bets.values != 0) {
    repeatChips();
  }
  if (legend.innerText != ``) {
    clearChips();
  }
  roulette(option.bets.values, option.bets.options);
});

repeat.addEventListener("click", (e) => {
  if (
    bet.total <= money.value &&
    repeat.values != undefined &&
    repeat.options != undefined
  ) {
    option.bets.values = repeat.values;
    option.bets.options = repeat.options;
    bet.total = repeat.totals;
    legend.innerText = ``;
    betText.innerText = `Bet: $${bet.total}`;
    balance.innerText = `Balance: $${money.value - bet.total}`;

    clearChips();

    const spans = document.querySelectorAll("span");

    for (let j = 0; j < repeat.chipOptions.length; j++) {
      for (let i = 0; i < spans.length; i++) {
        if (
          spans[i].title == repeat.chipOptions[j] ||
          spans[i].id == repeat.chipOptions[j]
        ) {
          spans[i].classList.add("numbersN");
          spans[i].insertAdjacentHTML(
            "afterend",
            `<img src="./img/${repeat.chipValues[j]}.png" class="coin" title="${repeat.chipOptions[j]}" data-value="${repeat.chipValues[j]}"/>`
          );
        }
      }
    }
  }
  if (bet.total > money.value) {
    legend.innerText = `Money limit!`;
    balance.innerText = `Balance: $${money.value}`;
    betText.innerText = `Bet: $0`;
    bet.value = [];
    option.value = [];
    option.bets.values = [];
    option.bets.options = [];
    bet.total = 0;
    clearChips();
  }
});
