const drumBtns = document.querySelectorAll(".drum-btns>div");
const sounds = document.querySelectorAll("audio");

document.addEventListener("keydown", (e) => {
  console.log(e.code[3]);
  let key = e.code[3];
  drumBtns.forEach((btn) => {
    if (btn.classList.contains(key)) {
      btn.classList.add("active");
      setTimeout((btn) => {
        btn.removeClass("active");
      }, 100);
    }
  });
});

document.addEventListener("keydown", (e) => {
  let key = e.code[3];
  sounds.forEach((sound) => {
    if (sound.classList.contains(key)) {
      sound.play();
    }
  });
});
