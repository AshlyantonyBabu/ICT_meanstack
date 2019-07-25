
function changee(){

        n1=parseInt(document.getElementById("num1").value);
    n2=parseInt(document.getElementById("num2").value);
var opt=document.getElementById("op").value;


if(opt=="Addition")
{
    add(n1,n2);
}
if(opt=="sub")
{
    sub(n1,n2);   
}
if(opt=="mul")
{
    mul(n1,n2);  
}
if(opt=="div")
{
    document.getElementById("lb").innerHTML=  div(n1,n2);
}
function add(n1,n2)
{
    var add1=n1+n2;
    document.getElementById("lb").innerHTML="<b>"+add1+"</b>";
}
function sub(n1,n2)
{
    if(n1>n2)
    {
    var sub1=n1-n2;
    document.getElementById("lb").innerHTML=sub1;
    }
    else
    {
        var sub2=n2-n1;
    document.getElementById("lb").innerHTML=sub2;
    }
}
function mul(n1,n2)
{
    var mul1=n1*n2;
    document.getElementById("lb").innerHTML=mul1;
}
function div(n1,n2){
    if(n2>0)
    {
        div1=n1/n2;
        return(div1);
    }
    else{
        return("integer should be grater than zero");
    }
}

        }
       