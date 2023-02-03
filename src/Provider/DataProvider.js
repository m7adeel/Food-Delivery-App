export class DataProvider{
    constructor(){

    }   

    static getInstance(){
        if(!this.instance){
            this.instance = new DataProvider()
        }
        return this.instance;
    }

    getSavedItem(){
        var lst = ['Dynamite','Crown Crust','Barbeque','Zingaratha','Dynamite','Crown Crust','Barbeque','Zingaratha']

        return lst;
    }
}

