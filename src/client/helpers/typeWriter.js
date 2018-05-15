import $ from 'jquery';
import anime from 'animejs';

const typeWriter = () => {
  $('.ml12').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, '<span class=\'letter\'>$&</span>'));
  });

  const myTimeLine = anime.timeline({ loop: true });

  myTimeLine
    .add({
      targets: '.ml12 .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: 'easeOutExpo',
      duration: 5000,
      delay(el, i) {

        return 500 + 30 * i;
      }
    })
    .add({
      targets: '.ml12 .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: 'easeInExpo',
      duration: 7000,
      delay(el, i) {

        return 100 + 30 * i;
      }
    });
};

export default typeWriter;
