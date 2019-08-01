


    $(document).ready(function(){
       
        $.ajax({
            type:"GET",
            url:"https://newsapi.org/v2/top-headlines?country=in&apiKey=7c6214c3e9ad46fbb054b6e7a81f577f",
           
           
    
            
            success:function(data){
                
                alert("load");
                console.log("aa1")
                    var output=" ";
                    var out=data.articles;
                for(var i in out)
                {
                    console.log("aa11")
                    
    
                     alert("aaa");
                   
                    output+=" <div class='col col-12 col-sm-3  d-flex align-items-stretch pt-4 bg-warning'>"
                    output+="<div class='card'style='width: 18rem; '>"
                    output+="<img class='card-img-top' src='"+out[i].urlToImage +" 'height='300px' width='50px' >"
                    output+="<div class='card-body'>"
                    output+=  "<b><center><h class='card-title' style='font-style: italic ;font: size 5px;'>"+ out[i].title+"</b></center></h>"
                
                    output+=  "<p class='card-text'style='text-align:justify ;font-style: italic ;' id='p1'>"+ out[i].description+"<a href='"+out[i].url+"'>Readmore</a>" +" </p>"
                   
                  
                    output+= "</div>"
                    output+="<ul class='list-group list-group-flush'>"
                     output+= "<li class='list-group-item'>"+ out[i].publishedAt+"</li>"
                    // output+=  "<li class='list-group-item'>"+ out[i].content+"</li>"
                     //output+= "<li class='list-group-item'> <b>Price :  </b>"+ data[i].price+"</li>"
                     output+= "</ul>"
                   // output+="<div class='card-body'>"
                    //output+=  "<a href='' class='card-link'>Card link</a>"
                   // output+= "<a href='' class='card-link'>Another link</a>"
                   // output+= "</div>"
               output+=" </div>"
               output+=" </div>"
        
        
                }

                $("#dd").html(output);
            
            }
    
        })
       
        })
        
    
        
    // })
    //         }
    //     })
    //   })
    //})