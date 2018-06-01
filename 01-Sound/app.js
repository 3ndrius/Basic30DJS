

window.addEventListener('keydown', (e) => {

      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e);
    if(!audio) return;

    audio.play();
});


// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;
//     console.log(key);

//     audio.play();

//   }
//   window.addEventListener('keydown', playSound);