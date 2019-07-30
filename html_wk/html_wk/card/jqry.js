

function ajaxTest() {
$(document).ready(function(){
    console.log("aaaa");
    $("#butn").click(function(){
        console.log("aaaa");
    $.ajax({
        type:"GET",
        url:"libr.json",
        //dataType: "text",
        success:function(data){
            var output=" ";
            alert("load");
            for(var i in data){
                output+="<div class='card'style='width: 18rem;'>"
                output+="<img class='card-img-top' src='"+data[i].pic +"'>"
                output+="<div class='card-body'>"
                output+=  "<h5 class='card-title'>"+ data[i].title+"</h5>"
            
                output+=  "<p class='card-text'>"+ data[i].discription+"</p>"
                output+= "</div>"
                output+="<ul class='list-group list-group-flush'>"
                 output+= "<li class='list-group-item'>"+ data[i].author+"</li>"
                 output+=  "<li class='list-group-item'>"+ data[i].category+"</li>"
                 output+= "<li class='list-group-item'>"+ data[i].price+"</li>"
                 output+= "</ul>"
                output+="<div class='card-body'>"
                output+=  "<a href='' class='card-link'>Card link</a>"
                output+= "<a href='' class='card-link'>Another link</a>"
                output+= "</div>"
           output+=" </div>"
    
    
            }
            $("#dd").html(output);
        }

    })
})
    })
}