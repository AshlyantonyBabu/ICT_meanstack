var i=0;
var m=Array();

function movee()
{
    res=" ";
   var mo=document.getElementById("nam").value;
   
   
    m[i]=mo;
   
    i++;
    for(var j=0;j<m.length;j++){
        console.log(m[j]);
        
         res=res+m[j]+"<br>";
         document.getElementById("lb1").innerHTML=res;
         
    }
    
    
}