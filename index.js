//Avec le clavier
var bod = document.body
var container = document.getElementById('container')
var batterie = document.getElementById('batterie')
var Q = document.getElementById('q')

bod.addEventListener('keydown', function(event){
    if (event.key =="q") {
        console.log('ok, jusque la');
        bod.classList.add('activebody')
        container.classList.add('activecontainer')
        batterie.classList.add('activebatterie');
        Q.classList.add('activeQ')
        document.getElementById('clap').currentTime = 0;
        document.getElementById('clap').play();
        
        setTimeout(function() {
            bod.classList.remove('activebody')
            container.classList.remove('activecontainer')
            batterie.classList.remove('activebatterie');
            Q.classList.remove('activeQ')
            
        }, 100)

        
        

    }

});



document.getElementById('q').addEventListener('mousedown', function(event){
    
    console.log('ok, jusque la');
    bod.classList.add('activebody')
    container.classList.add('activecontainer')
    batterie.classList.add('activebatterie');
    Q.classList.add('activeQ')
    document.getElementById('clap').currentTime = 0;
    document.getElementById('clap').play();
    
    setTimeout(function() {
        bod.classList.remove('activebody')
        container.classList.remove('activecontainer')
        batterie.classList.remove('activebatterie');
        Q.classList.remove('activeQ')
        
    }, 100)
});

