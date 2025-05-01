let container = document.querySelector("#container");
let column = document.querySelectorAll("#column");

container.style.display = "flex";
container.style.border = "solid";
container.style.height = "650px";
container.style.width = "650px";
container.style.flexDirection = "column";

//let no = 16;


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
      div.classList.add("box");
      div.style.border = "solid 0.01px";
      div.style.flex = "1";
      div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "Brown";
      });
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


/*let grid = document.querySelectorAll("#grid");

for(i = 0; i < grid.length; i++){
   grid[i].style.backgroundColor = "red";
   
}*/






