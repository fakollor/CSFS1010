let galleryImages = document.querySelectorAll(".text");
let getLatestOpen;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image,index){
        image.onclick = function() {
            getLatestOpen = index + 1;
            
            let container = document.body;
            let newImageWin = document.createElement("div");
            container.appendChild(newImageWin);
            newImageWin.setAttribute("class", "img-window");
            newImageWin.setAttribute("onclick", "closeImg()");
            
            let newImg = document.createElement("img");
            newImageWin.appendChild(newImg);
            newImg.setAttribute("src", "NightImages/pic" + getLatestOpen + ".jpg");
            
        }
    });
   }

function closeImg() {
    document.querySelector(".img-window").remove();
}
