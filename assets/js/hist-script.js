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

    var title = new Typed('Dynamic History Website', 'title');

    win.scroll(function() {
        win_top = win.scrollTop();
        win_bottom = win_top + win.height();

        title.startTypeWriter();
    });
});
