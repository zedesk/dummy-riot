'use strict';

function draw() {
    var text = document.querySelector('textarea').value;
    var encoded = plantumlEncoder.encode(text);
    document.querySelector('img').src = 'http://www.plantuml.com/plantuml/img/' + encoded;
}
