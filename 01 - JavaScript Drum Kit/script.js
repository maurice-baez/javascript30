"use strict";

const clap = document.querySelector('[data-key="65"]');
const hiHat = document.querySelector('[data-key="83"]');
const kick = document.querySelector('[data-key="68"]');
const openHat = document.querySelector('[data-key="70"]');
const boom = document.querySelector('[data-key="71"]');
const ride = document.querySelector('[data-key="72"]');
const snare = document.querySelector('[data-key="74"]');
const tom = document.querySelector('[data-key="75"]');
const tink = document.querySelector('[data-key="76"]');

document.addEventListener("keydown", (e) => {
  const { key } = e;

  if (key === "a" || key === "A") {
    const sound = new Audio("./sounds/clap.wav");
    clap.classList.add("playing");
    sound.play();
    setTimeout(() => {
      clap.classList.remove("playing");
    }, 250);
  } else if (key === "s" || key === "S") {
    const sound = new Audio("./sounds/hihat.wav");
    hiHat.classList.add("playing");
    sound.play();
    setTimeout(() => {
      hiHat.classList.remove("playing");
    }, 250);
  } else if (key === "d" || key === "D") {
    const sound = new Audio("./sounds/kick.wav");
    kick.classList.add("playing");
    sound.play();
    setTimeout(() => {
      kick.classList.remove("playing");
    }, 250);
  } else if (key === "f" || key === "F") {
    const sound = new Audio("./sounds/openhat.wav");
    openHat.classList.add("playing");
    sound.play();
    setTimeout(() => {
      openHat.classList.remove("playing");
    }, 250);
  } else if (key === "g" || key === "G") {
    const sound = new Audio("./sounds/openhat.wav");
    boom.classList.add("playing");
    sound.play();
    setTimeout(() => {
      boom.classList.remove("playing");
    }, 250);
  } else if (key === "h" || key === "H") {
    const sound = new Audio("./sounds/ride.wav");
    ride.classList.add("playing");
    sound.play();
    setTimeout(() => {
      ride.classList.remove("playing");
    }, 250);
  } else if (key === "j" || key === "J") {
    const sound = new Audio("./sounds/snare.wav");
    snare.classList.add("playing");
    sound.play();
    setTimeout(() => {
      snare.classList.remove("playing");
    }, 250);
  } else if (key === "k" || key === "K") {
    const sound = new Audio("./sounds/tom.wav");
    tom.classList.add("playing");
    sound.play();
    setTimeout(() => {
      tom.classList.remove("playing");
    }, 250);
  } else if (key === "l" || key === "L") {
    const sound = new Audio("./sounds/tink.wav");
    tink.classList.add("playing");
    sound.play();
    setTimeout(() => {
      tink.classList.remove("playing");
    }, 250);
  }
});
