/******************************************************************************/
/*                                                                            */
/*          Javascript for validations Alan Turing Project with Bootstrap     */
/*          Author: Sandra Barbara Pirpamer                                   */
/*          Version: 1.0                                                      */
/*          Date: FEBRERO 2024                                                */
/*          Comments: Lenguaje de Marcas Project Bootstrap 2Trimestre         */
/*                                                                            */   
/******************************************************************************/

function validacion(e){
    /* e.preventDefault() */
    let correcto=true;
    let nombre=document.getElementById('nombre');
    let apellidos=document.getElementById('apellidos');
    let email=document.getElementById('email');
    let conditions=document.querySelector('.form-check-input');
    
    if (nombre.value.length==0 || /^\s+$/.test(nombre.value)){
        correcto=false;
        nombre.style.borderColor="red";
        document.getElementById('nombreHelp').style.visibility="visible";
    }

    if (apellidos.value.length==0 || /^\s+$/.test(apellidos.value)){
        correcto=false;
        apellidos.style.borderColor="red";
        document.getElementById('apellidosHelp').style.visibility="visible";
    }

    if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/.test(email.value))){
        correcto=false;
        email.style.borderColor="red";
        document.getElementById('emailHelp').style.visibility="visible";
    }

    if (!conditions.checked){
        
        correcto=false;
        conditions.style.borderColor="red";
        document.getElementById('conditionsHelp').style.visibility="visible";
    }

    
    return correcto;


}

function resetear(id)
    {   document.getElementById(id+'Help').style.visibility="hidden";
        document.getElementById(id).style.borderColor="lightgray";
    }

    