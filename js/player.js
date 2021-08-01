class Player{
    
    constructor(){
       this.index=null;
       this.name=null;
       this.distance=0;
       this.xPos=0;
       this.rank=0;

    }


     getCount(){

        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value", function(data){
        playerCount= data.val();
            
          
        });
        
      }

      getFinishedPlayers(){
        var finishedPlayersRef=database.ref('finishedPlayers');
        finishedPlayersRef.on("value", function(data){
             finishedPlayers=data.val();
        })



      }


     updateCount(count){
           database.ref('/').update({
                playerCount:count
           })
     }


     update(){

          var playerIndex="player"+player.index;
          database.ref(playerIndex).update({
               name:this.name,
               distance:this.distance,
               xPos:this.xPos,
               rank:this.rank,
               screenSize:displayHeight
          });
          
     }

     static getPlayerInfo(){
          
          database.ref('/').on("value",function(data){

                allPlayers=data.val();

          });

         
     }

     static updateFinishedPlayers(){

          database.ref('/').update({
               finishedPlayers:finishedPlayers+1
          })
     }




}