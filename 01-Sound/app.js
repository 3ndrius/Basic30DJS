

window.addEventListener('keydown', (e) => {

      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => {
      key.classList.add("active");
      console.log(key);
    })
    
});

