let container = document.querySelector("#container");

container.style.display = "flex";
container.style.border = "solid";
container.style.height = "650px";
container.style.width = "650px";
container.style.flexDirection = "column";

let no = 16;


/*container.addEventListener("mouseover", () => {
   container.style.backgroundColor = "blue";
})*/


for( i = 1; i <= no; i++){
    let div = document.createElement("div");
    div.setAttribute("id", "column");
    div.style.flex = "1";
    container.appendChild(div);

}

let column = document.querySelectorAll("#column");


for( i = 0; i <= column.length; i++){
   column[i].style.display = "flex";
   for(j = 1; j <= no; j++){
    let div = document.createElement("div");
    div.setAttribute("id", "grid");
    div.classList.add("box");
    div.style.border = "solid 0.6px";
    div.style.flex = "1";
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "grey";
    });
    column[i].appendChild(div);


   }
}

/*let grid = document.querySelectorAll("#grid");

for(i = 0; i < grid.length; i++){
   grid[i].style.backgroundColor = "red";
   
}*/






