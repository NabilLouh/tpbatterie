//Avec le clavier

document.body.addEventListener('keypress', function(event){
    if (event.key =="q") {
        console.log('ok, jusque la');
        document.body.style.backgroundColor = "#568259"
        document.getElementById('container').style.backgroundColor = "#568259"
        document.getElementById('batterie').style.backgroundColor = "#568259"
        document.getElementById('batterie').style.color = "yellow"
        document.getElementById('batterie').style.border = "5px yellow solid"
        document.getElementById('batterie').style.boxShadow = "0px 0px 20px 10px rgba(188,192,18,0.7)"
        document.getElementById('q').style.color = "yellow"
        document.getElementById('q').style.border = "3px yellow solid"
        document.getElementById('q').style.boxShadow = "0px 0px 20px 10px rgba(188,192,18,0.7)"
        document.getElementById('clap').play();
        

    }

});



document.body.addEventListener('keyup', function(event){
    if (event.key =="q") {
        console.log('ok, jusque la');
        document.body.style.backgroundColor = "black"
        document.getElementById('container').style.backgroundColor = "black"
        document.getElementById('batterie').style.backgroundColor = "black"
        document.getElementById('batterie').style.color = "white"
        document.getElementById('batterie').style.border = "5px black solid"
        document.getElementById('q').style.color = "white"
        document.getElementById('q').style.border = "3px white solid"
        document.getElementById('batterie').style.boxShadow = "0px 0px 0px 0px rgba(188,192,18,0.7)"
        document.getElementById('q').style.boxShadow = "0px 0px 0px 0px rgba(188,192,18,0.7)"
        document.getElementById('clap').currentTime = 0;
    }

});

