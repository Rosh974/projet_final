$(function() {

    $('#upreserve').on("click", function(){
            var id = $("#selectatelier").val()
            $.post( "http://localhost:3007/ateliers/updateplace/"+id, function( data ) {
            
            });       
        
    })

  });