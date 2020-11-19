let process= require("process")
let moduloUsuario= require("./usuarios")
let comando= process.argv[2]
switch(comando){
    case "registro":
        let nombre= process.argv[3]
        let email = process.argv[4]
        let contraseña= process.argv[5]
        let indice= contraseña.indexOf("@")
        moduloUsuario.User(nombre,email,contraseña)
        if (indice != -1) {
            console.log ("Su email no es valido, ingreselo nuevamente por favor")
             } else {
            console.log("Usuario creado correctamente!! Ya puede iniciar sesión.")
            
        
        }break

    case "login":
        let loginEmail= process.argv[3]
        let loginContraseña= process.argv[4]
        let final= moduloUsuario.Login(loginEmail,loginContraseña)
        if (final.length==1){
            console.log("Sesión iniciada, bienvenidx"+ nombre)
        }else{
            console.log("No encontramos un usuario con esas credenciales")
        }break

    case "eliminar":
        let eliminarEmail= process.argv[3]
        let eliminarContraseña= process.argv[4]
        let verificar= moduloUsuario.Login(eliminarEmail,eliminarContraseña)
        if (verificar.length==1){
            moduloUsuario.eliminarUser(eliminarEmail,eliminarContraseña)
            console.log("Usuario Eliminado")
        }else{
            console.log("No encontramos un usuario con esas credenciales")
        }break

    }



