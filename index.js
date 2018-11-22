function theBeatlesPlay(players, instruments) {
  
    var allPlayers = [];
    
    for (var i=0; i < players.length; i++) {
      
        allPlayers.push(players[i] + " plays " + instruments[i]);
        
    }
    
    return allPlayers;
}


function johnLennonFacts(facts) {
  

 var moreFacts =[];
 let i=0;
  
 while ( i < facts.length) {
moreFacts.push(facts[i] + "!!!" );
 i++;
 
  }
  
  return moreFacts;
}

function iLoveTheBeatles(number) {
  
  var newArray = [];
  let i = 0;
  
  do {
    
    newArray.push("I love the Beatles!");
  
} while ( i < 15) {

i++;

}

return "I love the Beatles";

}
