/**
 * @author     Charles Kumar <gamescharlie9@gmail.com>
 * @copyright  2017-2020 crayoladesignstudio
 * @license    cds license
 */

/**
 * attaches navigation click to mainNavToggle aka hamburger for toggling class to perform menu toggle
 */
function attachNavEvent() {
  var mainNavToggle = document.getElementById("mm-toggle");
  var navRoller = document.getElementById("nav-roller");
  var header = document.getElementsByTagName("header")[0];

  mainNavToggle.addEventListener("click", function(e) {
    e.preventDefault();
    // e.stopPropagation();
    toggleClass(navRoller, "h-show");
    toggleClass(mainNavToggle, "menu-active");
    toggleClass(header, "strict-bg");
  });
}

/**
 * create an DOM Element with attributes (caution: no type or validity checking)
 * @param  {string} el   The tagName of the element to be created
 * @param  {[Object]} attr enumerable list of attributes in key:value pairs
 * @return {Element}      returns the new Element
 */
function createElement(el, attr) {
  /**
   * @type {Element}
   * @param  {string} el   The tagName of the element to be created
   * @param  {[ElementCreationOptions]} attr custom element tagName
   */
  var div = document.createElement(el);

  // TODO: own properties check
  for (let prop in attr) {
    /**
     * The attribute value to be set or modified in the created HTMLElement
     * @type {[type]}
     * @param {DOMString} prop The name of the attribute whose value to be set or modified
     * @param {DOMString} attr[prop]
     */
    div.setAttribute(prop, attr[prop]);
  }

  return div;
}

/**
 * remove or add aka toggle the class of the given DOM Elment
 * @param  {Element} el A DOM Element object whose classList needs to be modified
 * @param  {DOMString} cl A DOMString representing the DOMToken you want to toggle
 * @param  {[boolean]} force makes it one way if specified true only removes or only adds
 */
// function toggleClass(el, cl, force=false) {
//   // if(el.hasClass(cl))
//   el.classList.toggle(cl, force);
// }
function toggleClass(el, cl) {
  el.classList.toggle(cl);
}

/**
 * to improve user experience debounce is used to delay the repeated function calls
 * @author Underscore.js https://davidwalsh.name/javascript-debounce-function
 * @param  {function} func      The function which wants to fire at the specified wait rate (reasonable slow rate)
 * @param  {number} wait      The amount of period the function to wait for the next call (or between calls)
 * @param  {[boolean]} immediate An optional boolean value to whether trigger immediately first
 * @return {function}           The debounced function
 */
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/**
 * attach the given function to the onclick method of the DOMElement has the id
 * @param {string}   id case sensitive id of an Element
 * @param {Function} fn click event handler function
 */
function setClickHandler(id, fn) {
  document.getElementById(id).onclick = fn;
} // click handler fn

/**
 * remove current class from an element and add it to other (similar to active class)
 * @param  {Element} current    a DOM Element with current class
 * @param  {Element} newCurrent an DOM Element next to current class
 */
function currentChanger(current, newCurrent) {
  current.classList.remove("current");
  newCurrent.classList.add("current");
} // currentChanger fn

export {
  attachNavEvent,
  createElement,
  toggleClass,
  debounce,
  setClickHandler,
  currentChanger
};
// export let attachNavEvent, createElement, toggleClass;
// export * from …;
