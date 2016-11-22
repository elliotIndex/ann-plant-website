var houses = [{
    name: '1963 Thousand Oaks',
    description: 'Put your house description here. A brief description would work, or a long one',
    pictureFolder: 'thousandOaks'
  }, {
    name: '200 Small St.',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    pictureFolder: 'smallSt'
  }
];

$(document).ready(function() {
  var housesList = $('.houses-list');

  houses.forEach(function(house){
    var houseLi = $("<li>", { "class": "house-row" });
    // var houseDiv = $("<div>", { "class": "house" });
    var smallPic = $("<img>", { "src": "img/houses/" + house.pictureFolder + "/small.png"});
    var title = $("<span>" + house.name + "</span>", { "class": "house-title" });
    houseLi.click(function(){ console.log("clickin on fo fos"); });

    houseLi.append(smallPic);
    houseLi.append(title);
    $(housesList).append(houseLi);
  });
});
