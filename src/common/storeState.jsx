
import { makeAutoObservable } from "mobx"

// Model the application state.
class Timer {
    statusDisplay = false
    count = 0
    render = true

    check= false
  
    constructor() {
        makeAutoObservable(this)
    
    }
    setRender(){
        this.render = !this.render
    }
    setCheck(){
        this.check= !this.check
    }

    changeDis() {
        this.statusDisplay = !this.statusDisplay
    }

    countProduct() {
        this.count += 1
    }
       
    setTotal(e){
        this.total= e
        console.log(e);
    }
}

const storeState = new Timer()
export default storeState