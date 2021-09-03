function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if(document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 3000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

function downStars() {
    var elements = document.getElementsByClassName('star');

    for(var i=0; i<elements.length; i++) {
        elements[i].style.marginTop = '500px';
    }
}

onReady(function() {
    setVisible('.content', true);
    setVisible('.loader', false);
    downStars();
});
