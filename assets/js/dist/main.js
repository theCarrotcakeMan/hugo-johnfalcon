import ScrollTriggers from 'scroll-triggers';
/**
 * Initialize experience based on the current scroll position
 * See: scenes, scene_progress and transition classes
 */

window.initExperience = function () {
  console.log('Ok, init. Man');
};

window.onload = function (event) {
  console.log("Loaded window", event);
  event.target.body.addEventListener("load", initExperience());
};
