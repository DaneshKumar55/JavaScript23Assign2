var container = document.getElementById("container");
var profileList = ["https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", "https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg", "","https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg",  "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg","",  "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp","https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg","https://static.fotor.com/app/features/img/aiface/advance/2.png",     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToY58iNK-O5swDIXfPCenWrWREVpGSYvBBDQ&usqp=CAU", ] ;
for (i = 0; i<profileList.length; i++){
    var card = document.createElement("div");
    container.appendChild(card);
    card.setAttribute("class", "card col-md-6 ");
    card.setAttribute("style", "width: 18rem;");

    // xl-2 col-lg-3 col-md-3 col-sm-6 col-12

    var img = document.createElement("img");
    card.appendChild(img);

    if (profileList[i] === ""){
        img.setAttribute("src", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    } else{
        img.setAttribute("src", profileList[i]);
    }
    
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", "profile picture");

    var card_body = document.createElement("div");
    card.appendChild(card_body);
    card_body.setAttribute("class", "card_body");

    var heading = document.createElement("h5");
    card_body.appendChild(heading);
    heading.innerHTML= "Card title";

    var p_tag = document.createElement("p");
    card_body.appendChild(p_tag);
    p_tag.innerHTML="Some quick example text to build on the card title and make up the bulk of the card's content.";

    var button_tag = document.createElement("a");
    card_body.appendChild(button_tag);
    button_tag.setAttribute("href", "#");
    button_tag.setAttribute("class", "btn btn-primary");
    button_tag.innerHTML="Go somewhere"
}