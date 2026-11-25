$(function() {
    new Splide('#index-realisations', {
                pagination: true,
                speed: 2000,
                autoplay: "play",
                interval: 3000,                
                /*type: 'loop',*/
                breakpoints: {
                    500: {
                        perPage: 1,
                        gap:0,
                        arrows: false
                    },
                },                 
                i18n: {
                		prev: 'Précédent',
                		next: 'Suivant',
                        slideX: 'Aller au diapositive %s',
                        last : 'Aller au dernier',
                        first : 'Aller au premier',
                        slideLabel : '%s / %s'
                }                        
    }).mount();
    
 
    new Splide('#index-prestations_v2', {
                pagination: true,
                speed: 2000,
                perPage: 4,
                gap: '16px',
                interval: 3000, 
                arrows : false,
                breakpoints: {
                    800: { perPage: 2 },
                    500: {
                        perPage: 1,
                        gap:0
                    },
                },                               
                /*type: 'loop',*/
                i18n: {
                		prev: 'Précédent',
                		next: 'Suivant',
                        slideX: 'Aller au diapositive %s',
                        last : 'Aller au dernier',
                        first : 'Aller au premier',
                        slideLabel : '%s / %s'
                }                        
    }).mount();    
    
    new Splide('#index-clients', {
                pagination: true,
                speed: 2000,
                infinite: true,
                perPage: 3,
                gap: '16px',
                interval: 3000, 
                arrows : true,
                breakpoints: {
                    800: { perPage: 2 },
                    500: {
                        perPage: 1,
                        gap:0,
                        arrows: false
                    },
                },                               
                /*type: 'loop',*/
                i18n: {
                		prev: 'Précédent',
                		next: 'Suivant',
                        slideX: 'Aller au diapositive %s',
                        last : 'Aller au dernier',
                        first : 'Aller au premier',
                        slideLabel : '%s / %s'
                }                        
    }).mount();     
    
    
    //animation chiffres
    window.addEventListener('scroll', handleScroll);   
    
});

//animations chiffres clés
function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
}

function handleScroll() {
        const section = document.getElementById('stats');
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = (sectionTop <= window.innerHeight && sectionTop >= 0);

        if (sectionVisible) {
            document.querySelectorAll('.chiffre').forEach((el) => {
                el.classList.add('visible');
                const endValue = parseInt(el.getAttribute('data-target'));
                animateValue(el, 0, endValue, 2000);
            });
            window.removeEventListener('scroll', handleScroll);
        }
}
