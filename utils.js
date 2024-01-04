function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.documentElement.style.setProperty("--accent", getRandomColor());

const colors = {
  primary: getRandomColor(),
  secondary: getRandomColor(),
  accent: getRandomColor(),
  yellow: getRandomColor(),
  pink: getRandomColor(),
  orange: getRandomColor(),
};

const sortButtons = {
  ".bubbleSort": document.querySelector(".bubbleSort"),
  ".insertionSort": document.querySelector(".insertionSort"),
  ".mergeSort": document.querySelector(".mergeSort"),
  ".quickSort": document.querySelector(".quickSort"),
  ".selectionSort": document.querySelector(".selectionSort"),
  ".heapSort": document.querySelector(".heapSort"),
};

const controls = {
  new: document.querySelector(".new"),
  stop: document.querySelector(".stop"),
};

function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

function sortingButtonIsDisabled(isDisabled) {
  for (let key in sortButtons) {
    sortButtons[key].disabled = isDisabled;
  }
}

function disableSortingBtn() {
  sortingButtonIsDisabled(true);
}

function enableSortingBtn() {
  sortingButtonIsDisabled(false);
}

function disableNewArrayBtn() {
  controls.new.disabled = true;
}

function enableNewArrayBtn() {
  controls.new.disabled = false;
}

function enableStopSortingBtn() {
  controls.stop.disabled = false;
}

function disableStopSortingBtn() {
  controls.stop.disabled = true;
}

function delayTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}
