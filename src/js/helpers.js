function attachNavEvent() {
  var mainNavToggle = document.getElementById("mm-toggle");
  var navRoller = document.getElementById("nav-roller");
  var header = document.getElementsByTagName("header")[0];

  mainNavToggle.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleClass(navRoller, "h-show");
    toggleClass(mainNavToggle, "menu-active");
    toggleClass(header, "strict-bg");
  });
}

function createElement(el, attr) {
  var div = document.createElement(el);

  for (let prop in attr) {
    div.setAttribute(prop, attr[prop]);
  }

  return div;
}

function toggleClass(el, cl) {
  // if(el.hasClass(cl))
  el.classList.toggle(cl);
}

function debounce(func, wait, immediate) {
  // https://davidwalsh.name/javascript-debounce-function
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

function setClickHandler(id, fn) {
  document.getElementById(id).onclick = fn;
} // click handler fn

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
