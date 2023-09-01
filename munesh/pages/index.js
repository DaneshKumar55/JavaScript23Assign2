var container = document.getElementById("main")
var profilelist = ["https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" , "https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw", "https://cdn.wallpapersafari.com/6/37/J9sSN6.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsP3-heU81s-Ju76zPHezibm9hlNCfFOYH54PUZCmweQnD6LtW9kgb_3U_AQWgq1Cepls&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3a4O2NECAAOfHAMxUuGJ5rg0LQf2cgJ_h20YWRNa7CSliiiHY4kCQHWyPGRmGeLMohWE&usqp=CAU", "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg", "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-250nw-1714666150.jpg", "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDp9HaN3zejiSMZfG-35sPpElWu5-YF_uFZg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPf5JtWX65XwbOr-KHHcn-97HklVvmv8c3w&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFreAtrOzdfbsrEHLCtHyBDY4x80z6RBeVA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrlH9QlMjus9pQY0IPfd97FE7RdNVga3MY-lMqsaltgspxx3q_-Bg6wcOJDYGnPy1gIU&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYeu7nVVK0xQihc6QEFLmHVnJI6u6EWLDLA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VvqwlDjUJ6i1fiQpWJgvnEPFjdksQEde-KEjCx66skt39oib1QtroMgS8W-_Ihu8P6Q&usqp=CAU", "https://i.pinimg.com/564x/75/d8/1d/75d81d0d28e61b45d4ff70c7156ed36c.jpg", "https://cdn.statusqueen.com/dpimages/thumbnail/Boy_Stylish__Dp_Image-2277.jpg", "https://i.pinimg.com/736x/70/8e/07/708e07ee6cdde76befcc841ee92a8c6b.jpg", "https://photosfile.com/wp-content/uploads/2022/07/Single-Boy-DP-1.jpeg","https://i.pinimg.com/236x/98/5d/84/985d84c04cf84c0926e63a8d349dab60.jpg"];
for(i = 0; i<profilelist.length; i++){
    var card = document.createElement("div");
    var img = document.createElement("img");
    var data = document.createElement("div");
    var heading = document.createElement("h1");
    var paraghraph = document.createElement("p")
    container.appendChild(card);
    card.appendChild(img);
    card.appendChild(data);
    data.appendChild(heading);
    data.appendChild(paraghraph);
    data.setAttribute("class" , "data")
    card.setAttribute("class" , "card");
    img.setAttribute("src", profilelist[i]);
    container.setAttribute("id", "main")
    heading.innerHTML = "Jeremy Flores";
    paraghraph.innerHTML= "Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem maxime quas distinctio vero, sit accusantium blanditiis cupiditate tempora placeat quod!";
    
}