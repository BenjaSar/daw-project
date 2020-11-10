class ViewMainPage{
    private myf: MyFramework;

    constructor(myf: MyFramework){
        this.myf = myf;
    } 
    
    showDevices(list: DevicesInt[]):void{
        let e: HTMLElement= this.myf.getElementById("devicesList");
        
        for (let dev of list){

            let image  = "lightbulb.png"
                if (dev.type=="1"){
                    image = "window.png"
                }

            let checked = "";
                if (dev.state == "1"){
                    checked = "checked";
                }

            e.innerHTML+= `<li class="collection-item avatar">
                                <img src="static/images/${image}" alt="" class="circle">
                                <span class="title">${dev.name}</span>
                                <p>${dev.description} </p>
                                    <!--a href="#" secondary-cntent> </a-->
                                    <a href="#!" class="secondary-content">
                                        <!-- Switch -->
                                        <div class="switch">
                                            <label>
                                                Off
                                                <input id = "" type="checkbox" ${checked}>
                                                <input type="checkbox" id="dev_${dev.id}" ${(dev.state == "1") ? "checked" : ""}>
                                                <span class="lever"></span>
                                                On
                                            </label>
                                        </div>
                            </li>`
        } 
    }



    getSwicthStateById(id:string):boolean{

    let e:HTMLElement = this.myf.getElementById(id)
    let i:HTMLInputElement = <HTMLInputElement>e
    return i.checked;
    }
}

