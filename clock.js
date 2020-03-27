const clockContainer = document.querySelector(".js-clock"), //querySelector look for the children of the element
  clockTitle = document.querySelector(" h1");

function getTime() {
  const date = new Date(),
    minutes = date.getMinutes(),
    hours = date.getHours(),
    seconds = date.getSeconds();

  // if(seconds < 10)
  //     clockTitle.innerText = `${hours}:${minutes}:${0}${seconds}`;  // ` is not same with '
  // else
  //     clockTitle.innerText = `${hours}:${minutes}:${seconds}`;  // ` is not same with '

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
