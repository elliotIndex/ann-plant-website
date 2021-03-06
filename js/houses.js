var houses = [{
    name: '1963 Thousand Oaks',
    description: 'Put your house description here. A brief description would work, or a long one',
    picture: 'thousandOaks'
  }, {
    name: '200 Small St.',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
    picture: 'small'
  }
];

$(document).ready(function() {
  var housesList = $('.houses-list');

  houses.forEach(function(house){

    var picDiv = $("<div>", { "class": "col-lg-5 col-sm-6" });
    var smallPic = $("<img>", {
      "src": "img/houses/" + house.picture + ".png",
      "class": "house-pic"
    });
    picDiv.append(smallPic);

    var textDiv = $("<div>", { "class": "col-lg-6 col-lg-offset-1 col-sm-6" });
    var title = $("<h3>", { "class": "house-title" }).text(house.name);
    var description = $("<p>", { "class": "lead" }).text(house.description);
    textDiv.append(title);
    textDiv.append(description);

    var houseLi = $("<li>", { "class": "house-row row" });
    houseLi.append(picDiv);
    houseLi.append(textDiv);
    housesList.append(houseLi);
  });
});
