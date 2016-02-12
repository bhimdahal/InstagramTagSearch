

var newUrl, newImage, JSONurl;

function downloadImage(downloadLink){

    //  this variable is the link from which we get the JSON
	$.get(JSONurl, function(data) {

	    newUrl = data["pagination"]["next_url"]; 
        console.log(newUrl);

        // this area you created is holding all the Images data in the  JSON
	    var dataArray = data ["data"];

    //This for loop iterates over all the images stores  in the array
	for (var i = 0; i < dataArray.length; i++) {
        var link = dataArray[i].images.low_resolution.url;
        newImage = "<a href= '"+link+"'><img src='" + link + "' /></a>";
        
        $("#theElement").append(newImage);
    }

	});

}


$(document).ready(function(){
     $("input").keyup(function() {
         $("#theElement").html(" ");
         var userInput = $("#userInput").val().replace(/ /g,"_");
         //var userInput = document.getElementById("userInput").value.replace(/ /g,"_");
         JSONurl = "https://api.instagram.com/v1/tags/"+userInput+"/media/recent/?client_id=enter your client id here";

         console.log(userInput);

         downloadImage(JSONurl);
     });
 });



 $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	   downloadImage(newUrl);
   }
   
});




