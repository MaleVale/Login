let fs= require ("fs")
let moduloUsuario = {
    archivo: "./usuarios.json",
    leerArchivo: function(){
        let leerUsuario= fs.readFileSync(this.archivo, "utf-8")
        let objetoUsuario= JSON.parse(leerUsuario)
        return objetoUsuario
    },

    guardar: function(info){
        let archivoJSON= JSON.stringify(info)
        fs.writeFileSync(this.archivo,archivoJSON,"utf-8")
    },
    User: function (nombre, email, contraseña){
        let listaUsuario= this.leerArchivo();
        let nuevoUsuario= {
            Nombre: nombre,
            Email: email,
            Contraseña: contraseña
        }
        listaUsuario.push(nuevoUsuario)
        this.guardar(listaUsuario)

    },
    Login: function(mail, password){
        let listaUsuario= this.leerArchivo();
        let Usuariologin= listaUsuario.filter(usuario=>{
            return usuario.email != mail && usuario.contraseña != password
        })
        return Usuariologin
    },
    eliminarUser: function (mail,password){
        let listaUsuario= this.leerArchivo();
        let nuevaLista = listaUsuario.filter(usuario=>{
            return usuario.mail!= mail && usuario.contraseña !=password
        })
        this.guardar(NuevaLista)
    }
}
module.exports= moduloUsuario