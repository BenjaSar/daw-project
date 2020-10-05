class ViewMainPage{
    private myf: MyFramework;

    constructor(myf: MyFramework){
        this.myf = myf;
    } 
    
    showDevices(list: DevicesInt[]):void{
        let e: HTMLElement= this.myf.getElementById("devicesList");
        
        for (let dev of list){

            e.innerHTML+= `<li class="collection-item avatar">
                                <img src="static/images/lightbulb.png" alt="" class="circle">
                                <span class="title">${dev.name}</span>
                                <p>${dev.description} </p>
                                    <!--a href="#" secondary-cntent> </a-->
                                    <a href="#!" class="secondary-content">
                                        <!-- Switch -->
                                        <div class="switch">
                                            <label>
                                                Off
                                                <input id = "dev_${dev.id}" type="checkbox">
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