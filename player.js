class Player {
    constructor(){

    }

    //read playerCount value from database
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val()
        })
    }

    //write playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

 //write player name value to the database
 updateInfo(name){
    database.ref("player"+playerCount).update({
        name:name
    })
}

}