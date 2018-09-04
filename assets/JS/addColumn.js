$(document).ready(function() {
    /*Adds column to the table*/
    $("#column").click(function() {
        var table=document.getElementById("tab");
        var tbody=table.querySelector("tbody");
        var rows=tbody.querySelectorAll("tr");
        for(let i=0;i<rows.length;i++) {
            var column=document.createElement("td");
            rows[i].appendChild(column);
            column.innerHTML="";
        }
    });
});