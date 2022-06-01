var x=0 ,FD =0 , LA =0 ,FT =0 ,Sc =0 ,AS =0 ,ST =0 ;

function drop_nav1(){
if(x==0){
        document.getElementsByClassName("sub-nav")[0].style.display="block";
        x=1;
        Open();
        document.getElementsByClassName("sub-nav")[1].style.display="none";
        document.getElementsByClassName("sub-nav")[2].style.display="none";
        document.getElementsByClassName("sub-nav")[3].style.display="none";
        document.getElementsByClassName("sub-nav")[4].style.display="none";
        document.getElementsByClassName("sub-nav")[5].style.display="none";
        document.getElementsByClassName("sub-nav")[6].style.display="none";
       document.getElementById('left-icon-1').style.display="inline";
       document.getElementById('down-icon-1').style.display="none";
}
else{
    document.getElementsByClassName("sub-nav")[0].style.display="none";
    document.getElementById('down-icon-1').style.display="inline";
    document.getElementById('left-icon-1').style.display="none";
    x=0;
}
            
}

function drop_nav2(){
    if(FD==0){
        document.getElementsByClassName("sub-nav")[1].style.display="block";
        FD=1;
        Open();
        document.getElementsByClassName("sub-nav")[0].style.display="none";
        document.getElementsByClassName("sub-nav")[2].style.display="none";
        document.getElementsByClassName("sub-nav")[3].style.display="none";
        document.getElementsByClassName("sub-nav")[4].style.display="none";
        document.getElementsByClassName("sub-nav")[5].style.display="none";
        document.getElementsByClassName("sub-nav")[6].style.display="none";
        document.getElementById('left-icon-2').style.display="inline";
       document.getElementById('down-icon-2').style.display="none";
        
}
else{
    document.getElementsByClassName("sub-nav")[1].style.display="none";
    FD=0;
    document.getElementById('down-icon-2').style.display="inline";
    document.getElementById('left-icon-2').style.display="none";
}
}

function drop_nav3(){
    if(LA==0){
        document.getElementsByClassName("sub-nav")[2].style.display="block";
        LA=1;
        Open();
        document.getElementsByClassName("sub-nav")[0].style.display="none";
        document.getElementsByClassName("sub-nav")[1].style.display="none";
        document.getElementsByClassName("sub-nav")[3].style.display="none";
        document.getElementsByClassName("sub-nav")[4].style.display="none";
        document.getElementsByClassName("sub-nav")[5].style.display="none";
        document.getElementsByClassName("sub-nav")[6].style.display="none";
        document.getElementById('left-icon-3').style.display="inline";
       document.getElementById('down-icon-3').style.display="none";

}
else{
    document.getElementsByClassName("sub-nav")[2].style.display="none";
    LA=0;
    document.getElementById('down-icon-3').style.display="inline";
    document.getElementById('left-icon-3').style.display="none";
}

}

function drop_nav4(){
    if(FT==0){
        document.getElementsByClassName("sub-nav")[3].style.display="block";
        FT=1;
        Open();
        document.getElementsByClassName("sub-nav")[0].style.display="none";
        document.getElementsByClassName("sub-nav")[1].style.display="none";
        document.getElementsByClassName("sub-nav")[2].style.display="none";
        document.getElementsByClassName("sub-nav")[4].style.display="none";
        document.getElementsByClassName("sub-nav")[5].style.display="none";
        document.getElementsByClassName("sub-nav")[6].style.display="none";
        document.getElementById('left-icon-4').style.display="inline";
       document.getElementById('down-icon-4').style.display="none";
}
else{
    document.getElementsByClassName("sub-nav")[3].style.display="none";
    FT=0;
    document.getElementById('down-icon-4').style.display="inline";
    document.getElementById('left-icon-4').style.display="none";
}
}

function drop_nav5(){
    if(Sc==0){
        document.getElementsByClassName("sub-nav")[4].style.display="block";
        Sc=1;
        Open();
        document.getElementsByClassName("sub-nav")[0].style.display="none";
        document.getElementsByClassName("sub-nav")[1].style.display="none";
        document.getElementsByClassName("sub-nav")[3].style.display="none";
        document.getElementsByClassName("sub-nav")[2].style.display="none";
        document.getElementsByClassName("sub-nav")[5].style.display="none";
        document.getElementsByClassName("sub-nav")[6].style.display="none";
        document.getElementById('left-icon-5').style.display="inline";
       document.getElementById('down-icon-5').style.display="none";
}
else{
    document.getElementsByClassName("sub-nav")[4].style.display="none";
    Sc=0;
    document.getElementById('down-icon-5').style.display="inline";
    document.getElementById('left-icon-5').style.display="none";
}

}

function drop_nav6(){
    if(AS==0){
        document.getElementsByClassName("sub-nav")[5].style.display="block";
        AS=1;
        Open();
        document.getElementsByClassName("sub-nav")[0].style.display="none";
        document.getElementsByClassName("sub-nav")[1].style.display="none";
        document.getElementsByClassName("sub-nav")[3].style.display="none";
        document.getElementsByClassName("sub-nav")[4].style.display="none";
        document.getElementsByClassName("sub-nav")[2].style.display="none";
        document.getElementsByClassName("sub-nav")[6].style.display="none";
        document.getElementById('left-icon-6').style.display="inline";
       document.getElementById('down-icon-6').style.display="none";

}
else{
    document.getElementsByClassName("sub-nav")[5].style.display="none";
    AS=0;
    document.getElementById('down-icon-6').style.display="inline";
    document.getElementById('left-icon-6').style.display="none";
}
}

function drop_nav7(){
    if(ST==0){
        document.getElementsByClassName("sub-nav")[6].style.display="block";
        ST=1;
        Open();
        document.getElementsByClassName("sub-nav")[0].style.display="none";
        document.getElementsByClassName("sub-nav")[1].style.display="none";
        document.getElementsByClassName("sub-nav")[3].style.display="none";
        document.getElementsByClassName("sub-nav")[4].style.display="none";
        document.getElementsByClassName("sub-nav")[5].style.display="none";
        document.getElementsByClassName("sub-nav")[2].style.display="none";
        document.getElementById('left-icon-7').style.display="inline";
       document.getElementById('down-icon-7').style.display="none";

}
else{
    document.getElementsByClassName("sub-nav")[6].style.display="none";
    ST=0;
    document.getElementById('down-icon-7').style.display="inline";
    document.getElementById('left-icon-7').style.display="none";
}
}

