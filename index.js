//Avec le clavier
var bod = document.body
var container = document.getElementById('container')
var batterie = document.getElementById('batterie')
var Q = document.getElementById('q')
var S = document.getElementById('s')
var D = document.getElementById('d')
var F = document.getElementById('f')
var G = document.getElementById('g')
var H = document.getElementById('h')
var J = document.getElementById('j')
var K = document.getElementById('k')
var L = document.getElementById('l')

bod.addEventListener('keydown', function(event){
    //lettre Q
    if (event.key =="q") {
        console.log('ok, jusque la');
        bod.classList.add('activebodyq')
        container.classList.add('activecontainerq')
        batterie.classList.add('activebatterieq');
        Q.classList.add('activeQ')
        document.getElementById('clap').currentTime = 0;
        document.getElementById('clap').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyq')
            container.classList.remove('activecontainerq')
            batterie.classList.remove('activebatterieq');
            Q.classList.remove('activeQ')
            
        }, 100)

    }
    //lettre S
    if (event.key =="s") {
        console.log('ok, jusque la');
        bod.classList.add('activebodys')
        container.classList.add('activecontainers')
        batterie.classList.add('activebatteries');
        S.classList.add('activeS')
        document.getElementById('hihat').currentTime = 0;
        document.getElementById('hihat').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodys')
            container.classList.remove('activecontainers')
            batterie.classList.remove('activebatteries');
            S.classList.remove('activeS')
            
        }, 100)

    }
    //lettre d

    if (event.key =="d") {
        console.log('ok, jusque la');
        bod.classList.add('activebodyd')
        container.classList.add('activecontainerd')
        batterie.classList.add('activebatteried');
        D.classList.add('activeD')
        document.getElementById('kick').currentTime = 0;
        document.getElementById('kick').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyd')
            container.classList.remove('activecontainerd')
            batterie.classList.remove('activebatteried');
            D.classList.remove('activeD')
            
        }, 100)

    }

    //lettre f
    if (event.key =="f") {
        console.log('ok, jusque la');
        bod.classList.add('activebodyf')
        container.classList.add('activecontainerf')
        batterie.classList.add('activebatterief');
        F.classList.add('activeF')
        document.getElementById('openhat').currentTime = 0;
        document.getElementById('openhat').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyf')
            container.classList.remove('activecontainerf')
            batterie.classList.remove('activebatterief');
            F.classList.remove('activeF')
            
        }, 100)

    }

    //lettre G
    if (event.key =="g") {
        console.log('ok, jusque la');
        bod.classList.add('activebodyg')
        container.classList.add('activecontainerg')
        batterie.classList.add('activebatterieg');
        G.classList.add('activeG')
        document.getElementById('boom').currentTime = 0;
        document.getElementById('boom').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyg')
            container.classList.remove('activecontainerg')
            batterie.classList.remove('activebatterieg');
            G.classList.remove('activeG')
            
        }, 100)

    }

    //lettre H

    if (event.key =="h") {
        console.log('ok, jusque la');
        bod.classList.add('activebodyh')
        container.classList.add('activecontainerh')
        batterie.classList.add('activebatterieh');
        H.classList.add('activeH')
        document.getElementById('ride').currentTime = 0;
        document.getElementById('ride').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyh')
            container.classList.remove('activecontainerh')
            batterie.classList.remove('activebatterieh');
            H.classList.remove('activeH')
            
        }, 100)

    }

    //lettre j
    if (event.key =="j") {
        console.log('ok, jusque la');
        bod.classList.add('activebodyj')
        container.classList.add('activecontainerj')
        batterie.classList.add('activebatteriej');
        J.classList.add('activeJ')
        document.getElementById('snare').currentTime = 0;
        document.getElementById('snare').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyj')
            container.classList.remove('activecontainerj')
            batterie.classList.remove('activebatteriej');
            J.classList.remove('activeJ')
            
        }, 100)

    }

    //lettre K

    if (event.key =="k") {
        console.log('ok, jusque la');
        bod.classList.add('activebodyk')
        container.classList.add('activecontainerk')
        batterie.classList.add('activebatteriek');
        K.classList.add('activeK')
        document.getElementById('tom').currentTime = 0;
        document.getElementById('tom').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyk')
            container.classList.remove('activecontainerk')
            batterie.classList.remove('activebatteriek');
            K.classList.remove('activeK')
            
        }, 100)

    }

    // lettre L

    if (event.key =="l") {
        console.log('ok, jusque la');
        bod.classList.add('activebodyl')
        container.classList.add('activecontainerl')
        batterie.classList.add('activebatteriel');
        L.classList.add('activeL')
        document.getElementById('tink').currentTime = 0;
        document.getElementById('tink').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyl')
            container.classList.remove('activecontainerl')
            batterie.classList.remove('activebatteriel');
            L.classList.remove('activeL')
            
        }, 100)

    }
});


document.getElementById('q').addEventListener('mousedown', function(event){
    
    console.log('ok, jusque la');
    bod.classList.add('activebodyq')
    container.classList.add('activecontainerq')
    batterie.classList.add('activebatterieq');
    Q.classList.add('activeQ')
    document.getElementById('clap').currentTime = 0;
    document.getElementById('clap').play();
    
    setTimeout(function() {
        bod.classList.remove('activebodyq')
        container.classList.remove('activecontainerq')
        batterie.classList.remove('activebatterieq');
        Q.classList.remove('activeQ')
        
    }, 100)
});




document.getElementById('s').addEventListener('mousedown', function(event){
    
    console.log('ok, jusque la');
    bod.classList.add('activebodys')
    container.classList.add('activecontainers')
    batterie.classList.add('activebatteries');
    S.classList.add('activeS')
    document.getElementById('hihat').currentTime = 0;
    document.getElementById('hihat').play();
    
    setTimeout(function() {
        bod.classList.remove('activebodys')
        container.classList.remove('activecontainers')
        batterie.classList.remove('activebatteries');
        S.classList.remove('activeS')
        
    }, 100)
});


document.getElementById('d').addEventListener('mousedown', function(event){
    
    console.log('ok, jusque la');
    bod.classList.add('activebodyd')
    container.classList.add('activecontainerd')
    batterie.classList.add('activebatteried');
    D.classList.add('activeD')
    document.getElementById('kick').currentTime = 0;
    document.getElementById('kick').play();
    
    setTimeout(function() {
        bod.classList.remove('activebodyd')
        container.classList.remove('activecontainerd')
        batterie.classList.remove('activebatteried');
        D.classList.remove('activeD')
        
    }, 100)
});


document.getElementById('f').addEventListener('mousedown', function(event){
    console.log('ok, jusque la');
    bod.classList.add('activebodyf')
    container.classList.add('activecontainerf')
    batterie.classList.add('activebatterief');
    F.classList.add('activeF')
    document.getElementById('openhat').currentTime = 0;
    document.getElementById('openhat').play();
    
    setTimeout(function() {
        bod.classList.remove('activebodyf')
        container.classList.remove('activecontainerf')
        batterie.classList.remove('activebatterief');
        F.classList.remove('activeF')
        
    }, 100)
    
});

document.getElementById('g').addEventListener('mousedown', function(event){
    console.log('ok, jusque la');
    bod.classList.add('activebodyg')
    container.classList.add('activecontainerg')
    batterie.classList.add('activebatterieg');
    G.classList.add('activeG')
    document.getElementById('boom').currentTime = 0;
    document.getElementById('boom').play();
    
    setTimeout(function() {
        bod.classList.remove('activebodyg')
        container.classList.remove('activecontainerg')
        batterie.classList.remove('activebatterieg');
        G.classList.remove('activeG')
        
    }, 100)
   
});


document.getElementById('h').addEventListener('mousedown', function(event){
    console.log('ok, jusque la');
    bod.classList.add('activebodyh')
    container.classList.add('activecontainerh')
    batterie.classList.add('activebatterieh');
    H.classList.add('activeH')
    document.getElementById('ride').currentTime = 0;
    document.getElementById('ride').play();
    
    setTimeout(function() {
        bod.classList.remove('activebodyh')
        container.classList.remove('activecontainerh')
        batterie.classList.remove('activebatterieh');
        H.classList.remove('activeH')
        
    }, 100) 
    
});


document.getElementById('j').addEventListener('mousedown', function(event){
    console.log('ok, jusque la');
    bod.classList.add('activebodyj')
    container.classList.add('activecontainerj')
    batterie.classList.add('activebatteriej');
    J.classList.add('activeJ')
    document.getElementById('snare').currentTime = 0;
    document.getElementById('snare').play();
    
    setTimeout(function() {
        bod.classList.remove('activebodyj')
        container.classList.remove('activecontainerj')
        batterie.classList.remove('activebatteriej');
        J.classList.remove('activeJ')
        
    }, 100)
   
});


document.getElementById('k').addEventListener('mousedown', function(event){
    console.log('ok, jusque la');
        bod.classList.add('activebodyk')
        container.classList.add('activecontainerk')
        batterie.classList.add('activebatteriek');
        K.classList.add('activeK')
        document.getElementById('tom').currentTime = 0;
        document.getElementById('tom').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyk')
            container.classList.remove('activecontainerk')
            batterie.classList.remove('activebatteriek');
            K.classList.remove('activeK')
            
        }, 100)
   
});



document.getElementById('l').addEventListener('mousedown', function(event){
    console.log('ok, jusque la');
        bod.classList.add('activebodyl')
        container.classList.add('activecontainerl')
        batterie.classList.add('activebatteriel');
        L.classList.add('activeL')
        document.getElementById('tink').currentTime = 0;
        document.getElementById('tink').play();
        
        setTimeout(function() {
            bod.classList.remove('activebodyl')
            container.classList.remove('activecontainerl')
            batterie.classList.remove('activebatteriel');
            L.classList.remove('activeL')
            
        }, 100)
    
});

