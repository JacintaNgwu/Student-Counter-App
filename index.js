/* eslint-disable no-unused-vars */
let count = 0;
const countEl = document.getElementById('count-el');
const saveEl = document.getElementById('save-el');

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  const countStr = `${count} - `;
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
