const parralax = document.getElementById("parralax");

window.addEventListener("scroll", function(){
    var offset = window.pageYOffset;
    console.log('Titik koordinat :' + offset);
    console.log('Titik koordinat di tambah 0.7' + offset* 0.7);

    // parralax.style.backgroundPositionY = offset * 0.15 + "px";
})