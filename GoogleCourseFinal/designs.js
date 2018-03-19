//Under construction - trying to fix that by myself - Thank you for your good will but do not to send me any feedback or hints... for now!
//TODO add image as a background by sending url
//Fix toggle button

document.getElementById("klik").addEventListener("click", function(event) {
document.getElementById('pixel_canvas').innerHTML = "";
const height = document.getElementById('input_height').value;
const width = document.getElementById('input_width').value;
const canvas = document.getElementById('pixel_canvas');

for (i = 0; i < height; i++){
    let row = canvas.insertRow();
    for (j = 0; j < width; j++){
      let cell = row.insertCell();
      cell.onclick = draw;
    }
} 
event.preventDefault();
});


function draw() {
const color = document.getElementById("colorPicker").value;
this.style.background = color;
}
                                                      
   function previewFile(){
       var preview = document.querySelector('img');
       var file    = document.querySelector('input[type=file]').files[0];
       var reader  = new FileReader();


       reader.onloadend = function () {
            document.getElementById('pixel_canvas').style.backgroundImage = "url('"+ reader.result+"')";
       }
       if (file) {
           reader.readAsDataURL(file);
         
       } else {
           preview.src = "";
       }
  }
  previewFile();  

function toggleImage(){
  var imageToToggle = document.getElementById('trigger');
  if(imageToToggle.checked == false){
    document.getElementById('pixel_canvas').style.backgroundImage = "none";
  }
  else{
    previewFile(); 
  }
 
}
  
