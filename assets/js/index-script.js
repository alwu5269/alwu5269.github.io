$(document).ready(function() {
    var win = $(window);
    var win_top = win.scrollTop();
    var win_bottom = win_top + win.height();

    class Typed {
        constructor(txt, elemname) {
            this.txt = txt;
            this.elemname = elemname;
            this.i = 0;
            this.started = false;
            this.element = document.getElementById(this.elemname);
            if (!this.element) {
                console.warn(`Error: ${this.elemname}`);
            }
        }

        startTypeWriter() {
            if (this.started) return;

            if (win_bottom < $(this.element).offset().top) return;

            this.started = true;
            this.typeWriter();
        }

        typeWriter() {
            if (this.i >= this.txt.length) return;

            this.element.innerHTML += this.txt.charAt(this.i);
            this.i++;
            setTimeout(this.typeWriter.bind(this), 200);
        }
    }

    var greeting = new Typed('Hello!', 'Greeting');
    var project = new Typed('Projects', 'projtitle');
    var contact = new Typed('Contact Me', 'contact-title');

    // var i = {
    //     Greeting: 0,
    //     projtitle: 0,
    //     'contact-title': 0,
    // };
    // var animated = {};

    // function startTypeWriter(txt, elemname) {
    //     if (animated[elemname]) return;

    //     var element = document.getElementById(elemname);
    //     if (win_bottom < $(element).offset().top) return;

    //     animated[elemname] = true;
    //     typeWriter(txt, elemname);
    // }

    // function typeWriter(txt, elemname) {
    //     if (i[elemname] >= txt.length) return;

    //     var element = document.getElementById(elemname);
    //     element.innerHTML += txt.charAt(i[elemname]);
    //     i[elemname]++;
    //     setTimeout(typeWriter, 350, txt, elemname);
    // }

    // function typeWriter() {
    //     if (i < txt.length) {
    //         document.getElementById(elemname).innerHTML += txt.charAt(i);
    //         i++;
    //         setTimeout(typeWriter, 350);
    //     }

    //     // for (let i = 0; i < txt.length; i++) {
    //     //     (function(i) {
    //     //         setTimeout(function() {
    //     //             document.getElementById(elemname).innerHTML += txt.charAt(i);
    //     //         }, 350);
    //     //     })(i);
    //     // }
    // }

    win.scroll(function() {
        win_top = win.scrollTop();
        win_bottom = win_top + win.height();

        if (win_bottom >= $('#comp').offset().top && $('#charger').width() < 760) {
            var currentWidth = $('#charger').width(); // get width of current element, width is a jQuery method: https://api.jquery.com/width/
            var newWidth = currentWidth + 9; // increment the width
            $('#charger').width(newWidth);
        } else if ($('#charger').width() >= 760) {
            setTimeout(comp, 350, '#comp1');
        }

        // startTypeWriter('Hello!', 'Greeting');
        // startTypeWriter('Project', 'projtitle');
        // startTypeWriter('Contact Me', 'contact-title');
        greeting.startTypeWriter();
        project.startTypeWriter();
        contact.startTypeWriter();

        // if (!animated['greeting']) {
        //     // typeWriter('Hello!', 'Greeting')
        //     animated['greeting'] = true;

        //     i = 0;
        //     txt = 'Hello!';
        //     elemname = 'Greeting';

        //     typeWriter();
        // } else if (win_bottom >= $('#projects').offset().top && !animated['projects']) {
        //     animated['projects'] = true;

        //     i = 0;
        //     txt = 'Projects';
        //     elemname = 'projtitle';

        //     typeWriter();
        // } else if (win_bottom >= $('#contact-title').offset().top && !animated['contact']) {
        //     animated['contact-title'] = true;

        //     i = 0;
        //     txt = 'Contact Me';
        //     elemname = 'contact-title';

        //     typeWriter();
        // }
    });

    function comp(elem) {
        if (elem == '#comp4') {
            return;
        } else if ($(elem).hasClass('active')) {
            $(elem).removeClass('active');
            $(elem).addClass('notactive');
            var next = elem.slice(0, -1);
            var new_num = Number(elem.slice(-1)) + 1;
            var new_elem = next + new_num;
            $(new_elem).removeClass('notactive');
            $(new_elem).addClass('active');
            setTimeout(comp, 300, new_elem);
        }
    }

    $('#email').click(function() {
        $('#gmail').select();
        document.execCommand('copy');
        $('#notify').fadeIn();
        setTimeout(() => {
            $('#notify').fadeOut();
        }, 2000);
    });

    $('.nav').on('click', function(e) {
        e.preventDefault();

        $('body, html').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            600
        );
    });

    $('.dot').click(function() {
        var id = $(this).attr('id');

        $('.chosen').each(function() {
            $(this).removeClass('chosen');
            $(this).addClass('not_chosen');
        });

        $(this).removeClass('not_chosen');
        $(this).addClass('chosen');

        $('.shown').each(function() {
            $(this).removeClass('shown');
            $(this).addClass('not_shown');
        });

        var slide = '#slide' + id.slice(-1);
        $(slide).removeClass('not_shown');
        $(slide).addClass('shown');
    });
});
