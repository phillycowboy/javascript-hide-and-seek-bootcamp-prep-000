function getFirstSelector(selector){
  return document.querySelector(selector);
}


function nestedTarget(){
  return document.querySelector(".target");
}

function deepestChild(){
  var grandNode = document.querySelector("#grand-node");
  // var child = grandNode.children[0];
  while(grandNode.children[0]){
    grandNode=grandNode.children[0]
    
  }
  return grandNode;
}

function increaseRankBy(n){
var rankedList=document.querySelector('ul.ranked-list li');
for(let i=0;i<rankedList.length;i++){
  console.log("ranked-list: " + rankedList);
}
  
}