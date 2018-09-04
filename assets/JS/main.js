$(document).ready(function() {
    var heading = "Working with excel!";
    var description = `This application fetches data from an excel file and
    displays it in the form of table which is editable. You can also generate
    a bar graph by specifying some legal values. This application also allows
    you to download the updated table in the form of excel file.`
    var i = 0;
    typeWriter();
    /*Heading animation*/
    function typeWriter() {
        if(i < heading.length) {
            $(".heading").text($(".heading").text() + heading.charAt(i));
            i++;
            setTimeout(typeWriter,30);
        }
        else {
            i = 0;
            desc(); 
        }
    }
    /*Description animation*/
    function desc() {
        if(i < description.length) {
            $(".description").text($(".description").text() + description.charAt(i));
            i++;
            setTimeout(desc,10);
        }
    }
    /*Choose file and upload it*/
    $('#input-excel').change(function(e){
        var reader = new FileReader();
        var sheetName = document.querySelector('#sheet').value;
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onload = function(e) {
                var data = new Uint8Array(reader.result);
                var wb = XLSX.read(data,{type:'array'});
                var htmlstr = XLSX.write(wb,{sheet:sheetName, type:'binary',bookType:'html'});
                document.getElementById('tab').innerHTML = htmlstr;

                $("#xportxlsx").show();
                $("#myForm").show();
                $("#add").show();
                $("#column").show();
                $(".tweet").show();
                $(".another").show();
                $("#input-excel").hide();
                $("#sheet").hide();
                $(".sheet").hide();
                chart();
                $('#tab').on('input',destroy);
        }
    });

    $('.another').click(function() {
        location.reload();
    });
});