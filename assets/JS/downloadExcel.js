function doit(type, fn, dl) {
    var elt = document.getElementById('tab');
    var wb = XLSX.utils.table_to_book(elt, {sheet:"Sheet1"});
    return dl ?
        XLSX.write(wb, {bookType:type, bookSST:true, type: 'base64'}) :
        XLSX.writeFile(wb, fn || ('test.' + (type || 'xlsx')));
}

/*download updated excel file*/
function tableau(pid, iid, fmt, ofile) {
    if(typeof Downloadify !== 'undefined') Downloadify.create(pid,{
            swf: 'downloadify.swf',
            downloadImage: 'download.png',
            width: 100,
            height: 30,
            filename: ofile, data: function() { return doit(fmt, ofile, true); },
            transparent: false,
            append: false,
            dataType: 'base64',
            onComplete: function(){ alert('Your File Has Been Saved!'); },
            onCancel: function(){ alert('You have cancelled the saving of this file.'); },
            onError: function(){ alert('You must put something in the File Contents or there will be nothing to save!'); }
    });
}
tableau('xlsxbtn',  'xportxlsx',  'xlsx',  'test.xlsx');