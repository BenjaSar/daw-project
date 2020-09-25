/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main frontend file (where the logic is)
=============================================================================*/
class Main implements EventListenerObject {
  
    myf = new MyFramework;
    counter: number =0;
    main():void{
        console.log("Metodo main")

        //Se crea el array de usuarios
        let usuarios:Array<User>
        usuarios = new Array<User>();
        usuarios.push(new User(1, "Benjamin", "bsarmiento@yahoo.com" ));
        usuarios.push(new User(2, "Maria", "mvillamil@yahoo.com" ));
        usuarios.push(new User(3, "Milena", "mviltes@yahoo.com" ));

        this.mostrarUsers(usuarios);

        this.myf = new MyFramework();
        
        //myf.configClick("boton", ()=> (this.evento))
        //myf.configClick("boton", this.evento)

        let b: HTMLElement = this.myf.getElementById("boton")
        b.addEventListener("click", this)
        this.myf.configClick ("click", "boton", this);
        //b.textContent = "Hola mundo!!!"; 
       // b.addEventListener("click",this.evento)

       this.myf.requestGET("Devices.txt", this);
    }

    mostrarUsers(users:Array<User>):void{
       // for (let i in users){
       //     users[i].printInfo();
        // }
        for (let o of users)
        {
            o.printInfo();
        }
    }

    handleEvent(evt: Event): void {
        console.log("Se hizo click");
        console.log(this)  
        let b:HTMLElement = this.myf.getElementByEvent(evt);
        console.log(b);
        this.counter++
        b.textContent = `click ${this.counter}`
        //throw new Error("Method not implemented."); 
    }  
    

    handleGETResponse(status:number, response:string):void{
        console.log ("Llego la respuesta del request");
        }
    

}




window.onload = ()=> {
    let m:Main = new Main();
    m.main();
}


//=======[ Settings, Imports & Data ]==========================================

let user = "TypesScript Users!";

//=======[ Main module code ]==================================================

function greeter(person) {
    return "Hello, " + person;
 }
 
 //document.body.innerHTML = greeter(user);

 console.log("Hola mundo");


//=======[ End of file ]=======================================================
