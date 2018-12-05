function attachNavEvent() {
  var mainNavToggle = document.getElementById("mm-toggle");
  var navRoller = document.getElementById("nav-roller");

  mainNavToggle.addEventListener("click", function(e) {
    e.preventDefault();
    toggleClass(navRoller, "h-show");
    toggleClass(mainNavToggle, "menu-active");
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

export { attachNavEvent, createElement, toggleClass, debounce };
// export let attachNavEvent, createElement, toggleClass;
// export * from …;
