let container = document.querySelector("#container");

container.style.display = "flex";
container.style.border = "solid";
container.style.height = "650px";
container.style.width = "650px";
container.style.flexDirection = "column";

let no = 20;





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
    div.style.border = "solid";
    div.style.flex = "1";
    column[i].appendChild(div);


   }
}



