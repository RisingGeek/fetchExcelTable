var indexX=0;
var indexY=0;
var xAxis=[];
var yAxis=[];
var myChart;
var x;
var y;
var columnLength;
var choose=0;
document.querySelector('#choose').addEventListener('keyup',function() {
    choose=parseInt(document.querySelector('#choose').value);
    if(!choose || choose<0 || choose>document.querySelector("#tab").rows.length-1 || isNaN(choose)) 
        choose=0;
    xAxis=[];
    yAxis=[];
    var x=document.querySelector("#x");
    var y=document.querySelector("#y");
    var optionX=x.querySelectorAll("option");
    var optionY=y.querySelectorAll("option");
    for(let i=0;i<x.length;i++) {
        createOption(optionX[i],optionY[i],i);
    }
    destroy();
});

//creates options for x-axis and y-axis
function createOption(optionX,optionY,i) {
    let row=document.getElementById("tab").rows;
    let cell=row[choose].cells;
    optionX.innerHTML=cell[i].innerHTML;
    optionY.innerHTML=cell[i].innerHTML;
    xAxis.push(optionX.innerHTML);
    yAxis.push(optionY.innerHTML);
}
function chart() {
    var row=document.getElementById("tab").rows;
    columnLength=row[choose].cells.length;
    var x=document.getElementById("x");
    var y=document.getElementById("y");
    var cell=row[choose].cells;

    for(let i=0;i<cell.length;i++) {
        optionX=document.createElement("option");
        x.appendChild(optionX);
        optionY=document.createElement("option");
        y.appendChild(optionY);
        cell[i].style.fontWeight="bold";
        createOption(optionX,optionY,i);
    }
    plotChart();
    x.addEventListener('change', () => {
        indexX=xAxis.indexOf(x.value);
        destroy();
    });
    y.addEventListener('change', () => {
        indexY=yAxis.indexOf(y.value);
        destroy();
    });
}
/*Plots the chart based on select values*/
function plotChart() {
    var row=document.querySelector("#tab").rows;
    var pX=[];
    var pY=[];
    for(let i=choose+1;i<row.length;i++) {
        var rowData=row[i].cells;
        pX.push(rowData[indexX].innerHTML);
        pY.push(rowData[indexY].innerHTML);                            
    } 
    var ctx = document.querySelector('#myChart').getContext('2d');
    myChart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: pX,
        datasets: [{
            label: yAxis[indexY],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: pY,
        }]
    },

    options: {}
    });
}
/*Destroys previous chart*/
function destroy() {
    myChart.destroy();
    var cells=document.querySelector("#tab").rows[choose].cells;

    /*Adds updated column to select option*/
    if(cells.length!=columnLength) {
        var row=document.querySelector("#tab").rows;
        columnLength=row[choose].cells.length;
        x=document.querySelector("#x");
        y=document.querySelector("#y");
        var cell=row[choose].cells;
        var optionX=document.createElement("option");
        x.appendChild(optionX);
        var optionY=document.createElement("option");
        y.appendChild(optionY);
        optionX.innerHTML=cell[cells.length-1].innerHTML;
        optionY.innerHTML=cell[cells.length-1].innerHTML;
        xAxis.push(optionX.innerHTML);
        yAxis.push(optionY.innerHTML);
        cell[cells.length-1].style.fontWeight="bold";
    }
    x=document.querySelector("#x");
    var y=document.querySelector("#y");
    var optionsX=x.querySelectorAll("option");
    var optionsY=y.querySelectorAll("option");
    for(let i=0;i<cells.length;i++) {
        optionsX[i].innerHTML=cells[i].innerHTML;
        optionsY[i].innerHTML=cells[i].innerHTML;
        xAxis[i]=optionsX[i].innerHTML;
        yAxis[i]=optionsY[i].innerHTML;
    }
    plotChart();
}