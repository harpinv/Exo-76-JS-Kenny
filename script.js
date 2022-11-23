let maDiv = document.getElementById('zone');
maDiv.style.backgroundColor = "red";
maDiv.style.position = "relative";
maDiv.style.height = "500px";
maDiv.style.width = "50px";

let p = 0;
document.getElementById('compte').innerText = p;

document.getElementById('up').addEventListener('click', function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t - 10;

    if(t <= 0) {
        t = 0;
    }
    console.log(t);
    document.getElementById('kenny').style.top = t + 'px';
});

document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t - 10;

    if(t <= 0) {
        t = 0;
    }

    if(t < 50) {
        alert("kenny est mort");
        t = 200;
        document.getElementById('kenny').style.top = 200 + "px";
        p = p + 1;
        document.getElementById('compte').innerText = p;
    }

    console.log(t);
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t + 10;

    if(t >= 468) {
        t = 468;
    }
    console.log(t);
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t + 10;

    if(t >= 468) {
        t = 468;
    }
    console.log(t);
    document.getElementById('kenny').style.top = t + 'px';
});

