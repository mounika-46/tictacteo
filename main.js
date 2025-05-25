let istrue = false;
let boxes = document.getElementsByClassName("boxes");

for (let box of boxes) {
  box.addEventListener('click', function () {
    const xDiv = this.querySelector('.x');
    const oDiv = this.querySelector('.o');
    if (!xDiv.classList.contains('hidden') || !oDiv.classList.contains('hidden')) {
      return; 
    }
    if (!istrue) {
      xDiv.classList.remove('hidden');
    } else {
      oDiv.classList.remove('hidden');
    }

    istrue = !istrue;
  });
}
