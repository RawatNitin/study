const handleMenuVisibility = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
    // const sidebarCrossIcon = document.querySelector('sidebar__close');
    // sidebarCrossIcon.addEventListener('click', handleMenuVisibility);
};

const menuIcon = document.querySelector('.header-bottom__menu');
menuIcon.addEventListener('click', handleMenuVisibility);

document.querySelector('#play');
button.addEventListener('click', fetchVideoAndPlay);

  function onButtonClick() {
    // This will allow us to play video later...
    video.load();
    fetchVideoAndPlay();
  }

  function fetchVideoAndPlay() {
      const video = document.querySelector('#video');
    fetch('https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4')
    .then(response => response.blob())
    .then(blob => {
      video.srcObject = blob;
      return video.play();
    })
    .then(_ => {
      // Video playback started ;)
    })
    .catch(e => {
      // Video playback failed ;(
    })
  }