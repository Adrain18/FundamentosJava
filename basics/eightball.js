const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random()*8);
    let resp;
    switch(opcion){
        case 1:
            resp =  'Todo saldra bien';
            break;
        
        case 2:
            resp =  'sexual mente activo ';
            break;
            
    
        case 3:
            resp =  'Esa persona te ama ';
            break;
            
        case 4:
            resp =  'I love Carlo ';
            break;

        case 5:
            resp =  'I love Sergio ';

        case 6:
            resp =  'Tu amigo se morira ';
            break;

            case 7:
            resp =  'Seras Papa';
            break;

        case 8:
            resp =  'Me pelas la verga alex sintek ';
            break;

    
    }
    respuesta.innerHTML = resp;
}
