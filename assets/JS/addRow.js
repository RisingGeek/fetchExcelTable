$(document).ready(function() {
    /*Adds new row*/
    $("#add").click(function() {
        var table = document.getElementById("tab");
        var tbody = table.querySelector("tbody");
        var row=document.createElement("tr");
        tbody.appendChild(row);
        var rows=table.rows;
        var cells = rows[0].cells;
        for(let i of cells) {
            var cell=document.createElement("td");
            row.appendChild(cell);
            cell.innerHTML="";
        }
    });
});