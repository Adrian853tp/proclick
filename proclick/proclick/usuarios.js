
export class Usuario{
    #nombre_usuario;#password;


constructor(nombre_usu,password){
    this.#nombre_usuario = nombre_usu;
    this.#password = password;
}

get nombre_usuario(){
    return this.#nombre_usuario;
}

get password(){
    return this.#password;
}

set password(new_password){
    this.#password = new_password;
}
}