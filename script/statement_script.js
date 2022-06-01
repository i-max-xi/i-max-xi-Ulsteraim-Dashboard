//already set, should work if it sees these strings in the input

// function validate_trans() {
//     var start = document.myform.start_date.value;
//     var end = document.myform.end_date.value;
//     // var valid = false;
//     // var startArray = ["2015", "2016", "2017", "2018", "2019"]; 
//     // var endArray = ["2019", "2018", "2017", "2016", "2015"];


    

//     // for (var i=0; i <startArray.length; i++) {
//     // if ((start == startArray[i]) && (end == endArray[i])) {
//     // valid = true;
//     // break;
//     // }
//     // }

//     // if (valid) {
//     // window.location.href = "results.html";
//     // return false;
//     // }

// }





                        //requires jQuery insertion to work
                        //also search filtering with date interval (date to date)
function validate_trans() {
    var myArray =[
        {'account_no':'14835670069', 'deposit':'10,002,007.00', 'withdraw':' ', 'trans_date':'16-05-2015', 'trans_type':'Wire Transfer', 'amount':'10,002,007.00', 'remark':'Remittance',},
        {'account_no':'14835670069', 'deposit':'10,002,007.00', 'withdraw':' ', 'trans_date':'22-08-2016', 'trans_type':'Wire Transfer', 'amount':'10,002,007.00', 'remark':'Remittance',},
        {'account_no':'14835670069', 'deposit':'10,002,007.00', 'withdraw':' ', 'trans_date':'11-02-2017', 'trans_type':'Wire Transfer', 'amount':'10,002,007.00', 'remark':'Remittance',},
        {'account_no':'14835670069', 'deposit':'10,002,007.00', 'withdraw':' ', 'trans_date':'18-02--2018', 'trans_type':'Wire Transfer', 'amount':'10,002,007.00', 'remark':'Remittance',},
        {'account_no':'14835670069', 'deposit':'10,002,007.00', 'withdraw':' ', 'trans_date':'12-04-2019', 'trans_type':'Wire Transfer', 'amount':'10,002,007.00', 'remark':'Remittance',}
    ]

    // code to filter includes here
        //continue looking at filter table data video in learn languages

    $('#search-input').on('keyup', function(){
        var value= $(this).val()
        var data = searchTable(value, myArray)
        buildTable(data)
    })

    buildTable(myArray)

    function searchTable(value, data){
         var filteredData = []
         for (var i=0; i<data.length; i++){
             var name = data[i].name

             if(name.includes(value)){
                 filteredData.push(data[i])
             }
         }
    }

   

    function buildTable(data){
        var table = document.getElementById('myTable')

        table.innerHTML = ""

        for(var i = 0; i<data.length; i++){
            var row =   `<tr>
                            <td>${data[i].account_no}</td>
                            <td>${data[i].deposit}</td>
                            <td>${data[i].withdraw}</td>
                            <td>${data[i].trans_date}</td>
                            <td>${data[i].trans_type}</td>
                            <td>${data[i].amount}</td>
                            <td>${data[i].remark}</td>
                        </tr>`
            table.innerHTML +=row
        }
        
    }
}

