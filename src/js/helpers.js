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

export { attachNavEvent, createElement, toggleClass };
// export let attachNavEvent, createElement, toggleClass;
// export * from …;
