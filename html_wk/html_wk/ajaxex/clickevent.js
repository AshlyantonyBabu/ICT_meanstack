$(document).ready(function(){
$("#btn1").click(function(){

    $.ajax({
        type:"GET",
        url:"http://jsonplaceholder.typicode.com/users",
        success:(function(data){
            var output=" ";
           
           //var output="<table class='table'><thead><tr> <th>NAME </th> <th> AGE</th> <th>SEMESTER </th><th>MOBILE </th> </th><th>MOBILE </th></tr> </thead>"
            for(var i in data){
                output+="<div class='card' style='width: 18rem;'><div class='card-body'>"
               
                 output+="<h5 class='card-title'>"+data[i].name+"</h5>    "
               //  console.log(output);
                output+="<h6 class='card-subtitle mb-2 text-muted'>"+data[i].username+"</h6>"
                output+=" <p class='card-text>"+data[i].address.street+ "</p>"
              output+="    <a href='' class='card-link'>"+data[i].address.suite+"</a>"
              output+="<a href='' class='card-link'>"+ data[i].address.zipcode+"</a>"
              
                //console.log(output);

               output+="</div></div>"
            }
           
            

            $('.di22').html(output);
                //output+="<tr> <td>"+data[i].id+"</td>";
               // output+=" <td>"+data[i].name+"</td>";
               // output+=" <td>"+data[i].username+"</td>";
               // output+=" <td>"+data[i].address.street+"</td>";
              //  output+=" <td>"+data[i].address.suite+"</td>";
              //  output+=" <td>"+data[i].address.zipcode+"</td>";
               
               // output+=" <td>"+data[i].address.city+"</td> </tr>";
            
//output+="</table>";

        })


    })

});
});