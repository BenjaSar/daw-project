/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main frontend file (where the logic is)
=============================================================================*/
interface DevicesInt {
    id: string;
    name: string;
    description: string;
    state: string;
    type: string;
}


class Main implements EventListenerObject, GETResponseListener, POSTResponseListener, PUTResponseListener, DELETEResponseListener {

    myf = new MyFramework;
    view: ViewMainPage;
    counter: number = 0;
    main(): void {
        
        console.log("Metodo main")

        //Se crea el array de usuarios
        let usuarios: Array<User>
        usuarios = new Array<User>();
        usuarios.push(new User(1, "Benjamin", "bsarmiento@yahoo.com"));
        usuarios.push(new User(2, "Maria", "mvillamil@yahoo.com"));
        usuarios.push(new User(3, "Milena", "mviltes@yahoo.com"));
    
        this.mostrarUsers(usuarios);

        this.myf = new MyFramework();
        this.view = new ViewMainPage(this.myf);

        let elem = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elem, {
            accordion: false
        });
      
        //Llamada del objeto EvenListener para el boton Agregar y el switch
        let b: HTMLElement = this.myf.getElementById("boton")
        b.addEventListener("click", this)
        let db: HTMLElement = this.myf.getElementById("dboton")
        db.addEventListener("click", this)

        //this.myf.configClick ("click", "boton", this);
       // this.myf.configEventLister ("click", "boton", this);
        //b.textContent = "Hola mundo!!!"; 
        // b.addEventListener("click",this.evento)


        this.myf.requestGET("http://localhost:8000/dispositivos", this);
    }

    mostrarUsers(users: Array<User>): void {
        // for (let i in users){
        //     users[i].printInfo();
        // }
        for (let o of users) {
            o.printInfo();
        }
    }

    handleEvent(evt: Event): void {
        console.log(`Se hizo "${evt.type}"`);

        let b: HTMLElement = this.myf.getElementByEvent(evt);
        console.log(b);
        let db: HTMLElement = this.myf.getElementByEvent(evt);
        console.log(db);

        if (b.id == "boton") {
            //inputs
            //nDispositivo= nombre del dispositivo a agregar
            //sDispositivo = estado del dispositivo
            let name = <HTMLInputElement>this.myf.getElementById("nDispositivo");
            let sDevice  = <HTMLInputElement>this.myf.getElementById("sDispositivo");
            let descDevice = <HTMLInputElement>this.myf.getElementById("descDispositivo");

            // let sDevice: boolean = this.view.getSwicthStateById(b.id) ;
            let w = <HTMLInputElement>this.myf.getElementById("window");
            let l = <HTMLInputElement>this.myf.getElementById("lampara");
            let dev_id = <HTMLInputElement>this.myf.getElementById("dev_id");
    
            let device_type: number;
            
            //Lampara => tipo:0
            if(l.checked){
                device_type =0;
            }
            //Persiana => tipo:1
            else{
                device_type = 1;
            }
           //Verificamos que tipo de accion se quiere hacer sobre los botones 
           if (b.textContent == "AGREGAR"){        
            var node = document.createElement("LI") // Creo un nodo LI
            node.appendChild(name);
            this.myf.getElementById("devicesList").appendChild(node);
            let n = name.value;
            let s = sDevice.value;

            let dD = descDevice.value;
            
            let data = {"name": n, "state": s, "description": dD, "type": device_type};
                this.myf.requestPOST("http://localhost:8000/dispositivos", data, this);
            }
           
             else if(b.textContent == "EDITAR"){
            //Boton Editar.
            let name:string = document.getElementById("nDispositivo").contentEditable;
            let  state = <HTMLInputElement>this.myf.getElementById("sDispositivo");


            let data = {name:"name", state: "state"}
                this.myf.requestPUT("http://localhost:8000/dispositivos", data, this);
    
            } 
         }

            //Indicacion del estado a través del switch
            else{
            let state: boolean = this.view.getSwicthStateById(b.id)
            let data = { "id": `${b.id}`, "state": state };
            //this.myf.requestPUT("http://localhost:8000/dispositivos", data, this);
            console.log("Se ha enviado el dato con el id " + data.id)
            //this.myf.requestPOST("Devices.php",data, this);*/
         }

          //Boton elimnar
          if(db.id == "dboton"){
            let eDevice = this.view.removeElementbyId("devname");
            let name = this.myf.getElementById("devname");
            console.log(eDevice);
            
            //name.innerHTML = "";
                
            let data = {"name": eDevice} ;
                this.myf.requestDELETE("http://localhost:8000/dispositivos", data, this);
                console.log("Se ha eliminado correctamente el dato " + eDevice)
                //`${b.id}`
            }
    }

    handleGETResponse(status: number, response: string): void {
        console.log("Respuesta del servidor " + response);

        let data: DevicesInt[] = JSON.parse(response);
        console.log(data)
        this.view.showDevices(data);

        for (let d of data) {
            let b: HTMLElement = this.myf.getElementById(`dev_${d.id}`)
            b.addEventListener("click", this);
        }

    }

    handlePOSTResponse(status: number, response: string): void {
        console.log(status);
        console.log(response);
        //throw new Error("Method not implemented.");
    }


    handlePUTResponse(status: number, response: string): void {
        console.log(status);
        console.log(response);
        //throw new Error("Method not implemented.");
    }

    handleDELETEResponse(status: number, response: string): void {
        console.log(status);
        console.log(response);
        //throw new Error("Method not implemented.");
    }

}


window.onload = () => {
    let m: Main = new Main();
    m.main();
}


//=======[ Settings, Imports & Data ]==========================================

let user = "TypesScript Users!";

//=======[ Main module code ]==================================================

function greeter(person) {
    return "Hello, " + person;
}

 //document.body.innerHTML = greeter(user);

// console.log("Hola mundo");


//=======[ End of file ]=======================================================
//b.addEventListener('submit', (e: Event) => {
   // e.preventDefault();
    //console.log(
      //  nDevice.value,
       // eDevice.value,
        //"Se agregó dispositivo"