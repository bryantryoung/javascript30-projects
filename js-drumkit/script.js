const drumBtns = document.querySelectorAll(".drum-btns>div");
const sounds = document.querySelectorAll("audio");

document.addEventListener("keydown", (e) => {
  console.log(e.code[3]);
  let key = e.code[3];
  drumBtns.forEach((btn) => {
    if (btn.classList.contains(key)) {
      btn.classList.add("active");
    }
  });
});

drumBtns.forEach((btn) => {
  btn.addEventListener("transitionend", (e) => {
    btn.classList.remove("active");
  });
});

document.addEventListener("keydown", (e) => {
  let key = e.code[3];
  const audio = document.querySelector(`audio[class="${key}"]`);
  console.log(audio);
  audio.play();
});
