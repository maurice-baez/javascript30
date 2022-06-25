"use strict";

const playSound = (e) => {
  const code = e.keyCode;
  const key = document.querySelector(`.key[data-key="${code}"]`);
  if (!key) return;
  key.classList.add("playing");

  const audio = document.querySelector(`audio[data-key="${code}"]`);
  audio.currentTime = 0;
  audio.play();

  const keys = document.querySelector(".keys");

  const removeClass = (e) => {
    const key = e.target;
    key.classList.remove("playing");
  };

  keys.addEventListener("transitionend", removeClass);
};

window.addEventListener("keydown", playSound);
