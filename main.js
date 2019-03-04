name_presentation = document.getElementById('name_').value + ".html";

var loadTemplate = {
    //Надо закинуть это в json cпрятать
    // https://www.freeformatter.com/javascript-escape.html#ad-output 
    _init: '<!DOCTYPE html><html lang=\"en\"><head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"> <link href=\"https:\/\/cdn.jsdelivr.net\/npm\/reveal.js@3.7.0\/css\/reveal.css\" rel=\"stylesheet\"> <link href=\"',
    _theme: [
        'https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/css/theme/simple.css',
        'https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/css/theme/black.css',
        'https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/css/theme/white.css',
        'https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/css/theme/night.css'
    ],
    _start: '\" rel=\"stylesheet\" id=\"theme\"> <title>\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F<\/title><\/head><body> <div class=\"reveal\"> <div class=\"slides\"> <section data-markdown data-separator=\"---\"> <script type=\"text\/template\">',
    _end: '<\/script> <\/section> <script src=\"https:\/\/cdn.jsdelivr.net\/npm\/reveal.js@3.7.0\/js\/reveal.js\"><\/script> <script src=\"https:\/\/cdn.jsdelivr.net\/npm\/reveal.js@3.7.0\/lib\/js\/head.min.js\"><\/script> <script>Reveal.initialize({controls: true, progress: true, history: true, center: true, dependencies: [{src: \'https:\/\/cdn.jsdelivr.net\/npm\/reveal.js@3.7.0\/lib\/js\/classList.js\', condition: function(){return !document.body.classList;}},{src: \'https:\/\/cdn.jsdelivr.net\/npm\/reveal.js@3.7.0\/plugin\/markdown\/marked.js\', condition: function(){return !!document.querySelector( \'[data-markdown]\' );}},{src: \'https:\/\/cdn.jsdelivr.net\/npm\/reveal.js@3.7.0\/plugin\/markdown\/markdown.js\', condition: function(){return !!document.querySelector( \'[data-markdown]\' );}},{src: \'https:\/\/cdn.jsdelivr.net\/npm\/reveal.js@3.7.0\/plugin\/highlight\/highlight.js\', async: true, callback: function(){hljs.initHighlightingOnLoad();}},{src: \'https:\/\/cdn.jsdelivr.net\/npm\/reveal.js@3.7.0\/plugin\/notes\/notes.js\'}]}); <\/script> <\/div><\/div><\/body>'
};

function SaveText() {
    document.getElementsByName('r_theme').forEach(element => {
        if (element.checked) {
            current_theme = element.value;
        }
    });
    if (document.getElementById('name_').value) {
        var Data = new Blob([
            loadTemplate._init +
            loadTemplate._theme[current_theme] +
            loadTemplate._start +
            document.getElementById('sourceTA').value +
            loadTemplate._end
        ], {
            type: 'text/plain;charset=utf-8'
        });
        saveAs(Data, document.getElementById('name_').value + ".html");
        console.log('Ты серьезно так назвал презентацию?' + document.getElementById('name_').value);
    } else {
        alert('Назовите презентацию');
    }
}

function SavePreText() {
    var Data = new Blob(
        [document.getElementById('sourceTA').value], {
            type: 'text/plain;charset=utf-8'
        });
    saveAs(Data, "черновик.txt");
}