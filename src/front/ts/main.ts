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


        const dDevice = document.querySelector('dDispositivo') as HTMLInputElement



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
      
        //myf.configClick("boton", ()=> (this.evento))
        //myf.configClick("boton", this.evento)

        let b: HTMLElement = this.myf.getElementById("aboton")
        b.addEventListener("click", this)

        let eb: HTMLElement = this.myf.getElementById("eboton")
        eb.addEventListener("click", this)

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

        let eb: HTMLElement = this.myf.getElementByEvent(evt);
        console.log(eb)

        if (b.id == "aboton") {
            //let n = (<HTMLInputElement>this.myf.getElementById("name")).value;
            //let state = (<HTMLInputElement>this.myf.getElementById("state")).value;

            //inputs
            const nDevice = document.querySelector('#nDispositivo') as HTMLInputElement;
            const eDevice = document.querySelector('#eDispositivo') as HTMLInputElement;
            let w = <HTMLInputElement>this.myf.getElementById("window");
            let l = <HTMLInputElement>this.myf.getElementById("light");
            let tdevice: number;

            if(l.checked){
                tdevice =0;
            }
            else{
                tdevice = 1;
            }

            let data = {"id": `${b.id}` ,"name": nDevice, "state": eDevice };

            nDevice.addEventListener('submit', (e: Event) => {
                e.preventDefault();
                console.log(
                    nDevice.value,
                    eDevice.value,
                    "Se agregó dispositivo"
                )
                this.myf.requestPOST("http://localhost:8000/dispositivos", data, this);
            });





            //clet elem = document.querySelector('.collapsible.expandable');
            //M.Collapsible.getInstance(elem).close(0);

        }
        else if (eb.id == "eboton") {
            let name: string
            eb.textContent = `click ${this.counter}`;
            let data = { "id": `${b.id}` };
            this.myf.requestDELETE("http://localhost:8000/dispositivos", data, this);
            console.log("Eliminar elemento");
        }
        else {
            let state: boolean = this.view.getSwicthStateById(b.id)
            let data = { "id": `${b.id}`, "state": state };
            this.myf.requestPOST("http://localhost:8000/dispositivos", data, this);
            //this.myf.requestPOST("Devices.php",data, this);
        }


        //throw new Error("Method not implemented."); 
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
