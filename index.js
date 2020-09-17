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

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
