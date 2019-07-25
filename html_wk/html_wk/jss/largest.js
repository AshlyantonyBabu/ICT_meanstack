

function funlarge()
{

var x=parseInt(document.getElementById("name").value);
var y=parseInt(document.getElementById("name").value);
console.log(x)

if(x< y)
{
 document.getElementById("lb1").innerHTML= y;
}
else{
    document.getElementById("lb1").innerHTML= x;
}
}