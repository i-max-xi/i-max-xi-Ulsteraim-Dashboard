function getOTP(){
    alert(`OTP currently unavailable. Please contact support mail
    info@sullivan.mail`)
  }

  function generate_pdf(){
      alert(`PDF generation failed!!!. Please contact support 
    (info@sullivan.mail)`);
  }

  var alertMessage= `Error returning resource. Please Contact support:
            info@sullivan.mail `

function changePassword(){
    window.alert(alertMessage);
}

function cancel(){
    window.location.href="index.html";
}



function error(){
    
    // var x1= document.forms["myform"]["name1"].value;
    // var x2= document.forms["myform"]["name2"].value;
    // var x3= document.forms["myform"]["name2"].value;
    // var x4= document.forms["myform"]["name4"].value;

    // var y1 = document.getElementById('error1');
    // var y2 = document.getElementById('error2');
    // var y3 = document.getElementById('error3');
    // var y4 = document.getElementById('error4');

    let access_arr = document.getElementById('[name1, name2, name3, name4]');
    let display_arr = document.getElementById('[error1, error2, error3, error4]');

//    document.getElementsByName()
    for(i=0; i<5 ; i++){
        if(access_arr[i] == null || u[i] == ""){
            display_arr[i].style.display = "block";
            return false;
        }

        else{
            display_arr[i].style.display = "none";
        }


    }

    // code to display all when all fails...document.getElementsByTagName.requires how to selct all inputs

    // var all = document.getElementsByTagName("input")[*];

    // if(all==null || all==""){
    //     document.getElementById("error1").style.display="block";
    //     document.getElementById("error2").style.display="block";
    //     document.getElementById("error3")[2].style.display="block";
    //     document.getElementById("error4").style.display="block";
    //         return false;
    //     }

    //     else{
    //         document.getElementById("error1").style.display="none";
    //         document.getElementById("error2").style.display="none";
    //         document.getElementById("error3")[2].style.display="none";
    //         document.getElementById("error4").style.display="none";
    //     }

    // or use this  var x2= document.forms["myform"]["bank_name"].value;

        // if(x1==null || x1==""){
        //     y1.style.display="block";
        //     return false;
        // }

        // else{
        //     document.getElementsByClassName("error_messages")[0].style.display="none";
        // }

        // if(x2==null || x2==""){
        //     y2.style.display="block";
        //     return false;
        // }

        // else{
        //     document.getElementsByClassName("error_messages")[1].style.display="none";
        // }

        // if(x3==null || x3==""){
        //     y3.style.display="block";
        //     return false;
        // }

        // else{
        //     document.getElementsByClassName("error_messages")[2].style.display="none";
            
        // }

        // if(x4==null || x4==""){
        //     y4.style.display="block";
        //     return false;
        // }

        // else{
        //     document.getElementsByClassName("error_messages")[3].style.display="none";

        // }


}




