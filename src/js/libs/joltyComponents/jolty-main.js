const {Collapse, Dropdown, Dialog, Tablist, Toast, Popover, Tooltip } = jolty;

let modals = document.querySelectorAll('.modal-renkexpert');



if (document.getElementById('mob-nav')) {
  new Dialog("#mob-nav", {
    shown: false,
    breakpoints: {
      1024: {
        destroy: true
      }
    }
  });
  
  document.querySelectorAll(".nav-submenu").forEach((submenu) => {
    new Dropdown(submenu, {
      toggler: submenu.previousElementSibling,
      delay: 100,
      itemClickHide: false,
      items: ":scope > li > a",
      trigger: "click hover",
      arrowActivation: submenu.parentNode.closest(".nav-submenu") ? "x" : "y",
      hideMode: "class-shown",
      destroy: true,
      breakpoints: {
        1024: {
          destroy: false
        }
      }
    });
  });
  
  document.querySelectorAll(".nav-submenu, .nav-menu").forEach((submenu) => {
    new Tablist(submenu, {
      tab: "a:not(:only-child)",
      tabpanel: ".nav-submenu",
      hideMode: "class-shown",
      breakpoints: {
        1024: {
          destroy: true
        }
      }
    });
  });

}

if (document.querySelector('.accordion')){
  Tablist.initAll();
}








