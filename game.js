class Game {
    constructor(){

    }

    //read gameState value from database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    //write gameState value to the database
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }
 
    start(){
        if(gameState===0){
            player=new Player ()
            player.getCount()
            form= new Form()
            form.display()
        }
    }

}