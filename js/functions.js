var lastScroll = 0; 
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll < lastScroll) {
    $('header').removeClass('header--hidden');
  } else {
    $('header').addClass('header--hidden');
  }

  lastScroll = currentScroll;
});


//var menu = new Mmenu(document.querySelector("#menu"));
const menufr = {
        'Open submenu': 'Ouvrir sous-menu',
        'Close submenu': 'Fermer sous-menu',

};
Mmenu.i18n(menufr, 'fr' );
var menu = new Mmenu(document.querySelector("#menu"),
                  {
                    "offCanvas": {
                        "position": "right-front"
                    },
                    "theme": "dark",
                    /*"slidingSubmenus" : false,*/
                    "navbar" : {
                        /*"add": false*/
                    }
                },
                
                {
                    "language": "fr",
                    "offCanvas": {
                        "screenReader" : {
                            "openMenu" : "Ouvrir le menu",
                            "closeMenu" : "Fermer le menu"
                        }
                    }
                }
);
const apimenu = menu.API;


 
$(function() {

    if($('.mm-navbar').length > 0) {
        $('.mm-navbar').append('<a href="#" class="close-menu-mobile" aria-label="Fermer le menu">x</a>');
        $('.close-menu-mobile').on('click', function() {
            apimenu.close();
        });
        
        $('#open-button').on('click', function() {
          apimenu.open();
        })
        
        
    } 
    
   
    
}); 