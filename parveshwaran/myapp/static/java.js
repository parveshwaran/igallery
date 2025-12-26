var gallery = [
    { src: "Lead.png", caption: "True German" },
    { src: "binl.png", caption: "Twin Towers" },
    { src: "khan.png", caption: "The Khan" },
    { src: "sta.png", caption: "Stalin" },
    { src: "nico.png", caption: "Manipulator" },
    { src: "John.png", caption: "GOAT" }
];

var index = 0;
var imgElement = document.getElementById("image");
var captionElement = document.getElementById("caption");
var prevBtn = document.getElementById("button1");
var nextBtn = document.getElementById("button2");

function updateGallery() {
    imgElement.src = gallery[index].src;
    captionElement.textContent = gallery[index].caption;
}

button2.onclick = function() {
    index = (index + 1) % gallery.length;
    updateGallery();
}

button1.onclick = function() {
    index = (index - 1 + gallery.length) % gallery.length;
    updateGallery();
}

updateGallery();