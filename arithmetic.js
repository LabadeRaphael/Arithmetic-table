function ml(){
    var rowNumber = rowId.value
    var columnNumber = columnId.value
    var tt = ''
    tt+= '<table border="1" class="table table-bordered bg-info">'
        for( r=1; r<=rowNumber; r++){
            tt+= '<tr>' 
            for(i=1; i<=columnNumber; i++){
                tt+= '<td>' + r + 'X' + i + '=' + r*i + '</td>'
            }
            '</tr>'
        }
    '</table>'
    display.innerHTML = tt
}
function div(){
    var rowNumber = rowId.value
    var columnNumber = columnId.value
    var tt = ''
    tt+= '<table border="1" class="table table-bordered  bg-warning">'
        for( r=1; r<=rowNumber; r++){
               tt+= '<tr>' 
            for(i=1; i<=columnNumber; i++){
                tt+= '<td>' + r + '/' + i + '=' + (r/i).toFixed(2) + '</td>'
            }
            '</tr>'
        }
    '</table>'
             
    display.innerHTML = tt
}
function sb(){
    var rowNumber = rowId.value
    var columnNumber = columnId.value
    var tt = ''
    tt+= '<table border="1" class="table table-bordered bg-success">'
        for( r=1; r<=rowNumber; r++){
            tt+= '<tr>' 
            for(i=1; i<=columnNumber; i++){
                tt+= '<td>'+r+'-'+ i+'=' + parseInt(r-i)+'</td>'
            }
            '</tr>'
        }
    '</table>'
    display.innerHTML = tt
}
function add(){
    var rowNumber = rowId.value
    var columnNumber = columnId.value
    var tt = ''
    tt+= '<table border="1" class="table table-bordered bg-primary pt-5">'
        for( r=1; r<=rowNumber; r++){
            tt+= '<tr>' 
            for(i=1; i<=columnNumber; i++){
                tt+= '<td>' + r + '+' + i + '=' + parseInt(r+i) + '</td>'
            }
            '</tr>'
        }
    '</table>'
    display.innerHTML = tt
}







