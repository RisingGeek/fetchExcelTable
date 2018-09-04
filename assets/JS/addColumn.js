$(document).ready(function() {
    /*Adds column to the table*/
    $("#column").click(function() {
        var table=document.getElementById("tab");
        var tbody=table.querySelector("tbody");
        var rows=tbody.querySelectorAll("tr");
        rows.forEach(function(row) {
            var column=document.createElement("td");
            row.appendChild(column);
            column.innerHTML="";
        });
    });
});