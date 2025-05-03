let column = document.querySelectorAll("#column");

let resizeGrid = function(squares){

   for( i = 1; i <= squares; i++){
      let div = document.createElement("div");
      div.setAttribute("id", "column");
      div.style.flex = "1";
      container.appendChild(div);
  }

  let column = document.querySelectorAll("#column");


  for( i = 0; i <= column.length; i++){
   column[i].style.display = "flex";
    for(j = 1; j <= squares; j++){
      let div = document.createElement("div");
      div.setAttribute("id", "grid");
      div.style.border = "solid 1px";
      div.style.flex = "1";
      div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "lightGreen";
      })
      column[i].appendChild(div);
     }
  }
}



let askResize = function(){
   let value = prompt("Number of squares per side for the new grid");
   if(value != null){
      if(value >= 0 && value <= 100){
         container.innerHTML = " ";
         resizeGrid(value);
      }
   }
}


let button = document.querySelector("button");

button.addEventListener("click", askResize);

resizeGrid(16);







