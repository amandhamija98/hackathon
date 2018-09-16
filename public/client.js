$(document).ready(function(){
 console.log("Yo");

//  $('#form1').on('submit', function(){
$("#b1").click(function(){
   alert("hello");
   console.log("CHal raha hai");
   $.ajax({
         type: 'POST',
         url: '/todo',
         data: "hi",
         //this function runs after request has been made succesfully
         //data is the response part that we pass
         success: function(data){
           //do something with the data via front-end framework
           console.log("success");
         }
       });

       return false;

   });
});

    //  var task = $('form input');

      //var todo = {task: task.val()};
      //var todo={task.val()};


  /*    $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        //this function runs after request has been made succesfully
        //data is the response part that we pass
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
    //  var item = $(this).text().replace(/ /g, "-");
     var item=$(this).text();
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
//  });*/

});
