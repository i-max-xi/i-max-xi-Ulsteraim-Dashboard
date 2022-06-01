

//open sidebar
  function Open(){

    
    var y = document.getElementsByClassName('side-arrows');
    var j;
    for( j=0; j < y.length; j++ ){
      y[j].style.display = "inline";
    }

    var x = document.getElementsByClassName("menu-writing");
    var i;
    for( i=0; i < x.length; i++ ){
      x[i].style.display = "inline";
    }

    if(window.matchMedia("(max-width: 1200px)").matches){
      document.getElementsByClassName("main-menu")[0].style.width="55%";
      document.getElementById('main-nvgn').style.display="inline";
      document.getElementsByClassName("main-body")[0].style.left="14%";
      document.getElementsByClassName("main-menu")[0].style.display="block";
      document.getElementsByClassName("menu-icon")[0].style.display="none";
      document.getElementsByClassName('close-icon')[0].style.display="inline";
      document.getElementsByClassName("profile_panel_container")[0].style.left="70%";
    }
    else{
      document.getElementById('main-nvgn').style.display="inline";
      document.getElementsByClassName("main-body")[0].style.left="14%";
      document.getElementsByClassName("main-menu")[0].style.display="block";
      document.getElementsByClassName("main-menu")[0].style.width="15%";
      document.getElementsByClassName("menu-icon")[0].style.display="none";
      document.getElementsByClassName('close-icon')[0].style.display="inline";
      document.getElementsByClassName("profile_panel_container")[0].style.left="87.6%";
      document.getElementsByClassName("profile_panel_intro")[0].style.display="none";
      
      
    }


    
  }


//collapse sidebar
function Close(){

  var y = document.getElementsByClassName('side-arrows');
    var j;
    for( j=0; j < y.length; j++ ){
      y[j].style.display = "none";
    }

  var x = document.getElementsByClassName("menu-writing");
  var i;
  for( i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }

  var z = document.getElementsByClassName("sub-nav");
  var k;
  for( k = 0; k < z.length; k++){
    z[k].style.display = "none";
  }

  if(window.matchMedia("(max-width: 1200px)").matches){
    document.getElementById('main-nvgn').style.display="none";
    document.getElementsByClassName("main-menu")[0].style.width = "35px";
    document.getElementsByClassName("menu-icon")[0].style.display = "inline";
    document.getElementsByClassName('close-icon')[0].style.display="none";
    document.getElementsByClassName("main-body")[0].style.left="35px";
    document.getElementsByClassName("profile_panel_container")[0].style.left="70%";
  }
  else{
  document.getElementById('main-nvgn').style.display="none";
  document.getElementsByClassName("main-menu")[0].style.width = "35px";
  document.getElementsByClassName("menu-icon")[0].style.display = "inline";
  document.getElementsByClassName('close-icon')[0].style.display="none";
  document.getElementsByClassName("main-body")[0].style.left="35px";
  document.getElementsByClassName("profile_panel_container")[0].style.left="101%";
  document.getElementsByClassName("profile_panel_intro")[0].style.display="block";
}
}

var prof =0;
// drop profile panel 
function drop_profile_panel(){
  
  if(prof==0){
          document.getElementsByClassName("profile_panel_container")[0].style.display = "block";
          document.getElementsByClassName('back-img')[3].style.display="none"; 
          prof=1;
  }
  else{
    document.getElementsByClassName("profile_panel_container")[0].style.display = "none";
    document.getElementsByClassName('back-img')[3].style.width="45%"; 
    document.getElementsByClassName('back-img')[3].style.display="inline"; 
      prof=0;
  }
              
  }

  function close_report(){
    document.getElementsByClassName('report')[0].style.display="none";
  }


  function minimise_report(){
    document.getElementsByClassName('report')[0].style.height="50px";
    document.getElementById('table_2').style.display="none";
    document.getElementById('main_table').style.display="none";
    document.getElementById('minimise').style.display="none";
    document.getElementById('add').style.display="inline";
  }

  function add_report(){
    document.getElementsByClassName('report')[0].style.height="400px";
    document.getElementById('table_2').style.display="inline-table";
    document.getElementById('main_table').style.display="block";
    document.getElementById('minimise').style.display="inline";
    document.getElementById('add').style.display="none";
  }

  // var min=0;
  // function minimise_report(){
  //   if(min==0){
  //     document.getElementsByClassName('table_1_main')[0].style.display="none";
  //     document.getElementById('table_2').style.display="none";
      
  //     min=1;
  //   }
  //   if(min==1){
  //     document.getElementsByClassName('table_1_main')[0].style.display="block";
  //     document.getElementById('table_2').style.display="block";
  //     min=0;
  //   }
    
  // }

