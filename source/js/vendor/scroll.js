import {gsap} from './gsap.min';
import {ScrollTrigger} from './scroll-trigger';

gsap.registerPlugin(ScrollTrigger);

const blocks = document.querySelectorAll('.page-section');

/* blocks.forEach((block, index) => {
  if (index !== 0) {
    gsap.from(block, {
      opacity: 0,
      y: 150,
      duration: 1,
      scrollTrigger: {
        trigger: block,
        start: '150 bottom', // Анимация начинается при появлении блока внизу экрана
        end: 'center center', // Анимация заканчивается, когда центр блока достигает центра экрана
        toggleActions: 'play none none none', // Определение действий при входе и выходе из триггера
      },
    });
  }
}); */

blocks.forEach((content) => {
  gsap.from(content, {
    scrollTrigger: {
      trigger: content,
      start: '150 bottom',
    },
    autoAlpha: 0,
    y: 150,
    duration: 1.5,
    ease: 'power1.out',
  });
});
