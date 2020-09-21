function bloonmotion() {
  var boxwidth = (box.getBoundingClientRect().width);

  var boxheight = (box.getBoundingClientRect().height);


  var allbloon = document.querySelectorAll(".bloonclass");



  allbloon.forEach(element => {
    element.directionY = 1;
    element.directionX = 1;
    element.style.left = (Math.round((Math.random(boxwidth) * 600))) + 'px';
    element.style.top = (Math.round((Math.random(boxheight) * 600))) + 'px';
  });

  let startkey = setInterval(() => {


    addbloonn = document.querySelectorAll(".bloonclass");


    addbloonn.forEach(element => {

      if (element.directionY == 1) {
        var upper = parseInt(element.style.top) + 1;

        element.style.top = upper + 'px';




      } else {

        var upper = parseInt(element.style.top) - 1;

        element.style.top = upper + 'px';


      }
      if (element.directionX == 1) {
        var leftside = parseInt(element.style.left) + 1;

        element.style.left = leftside + 'px';



      } else {
        var leftside = parseInt(element.style.left) - 1;

        element.style.left = leftside + 'px';


      }
      var boxx = box.getBoundingClientRect();

      var baloon = element.getBoundingClientRect();
      if (baloon.top + baloon.height >= boxx.bottom) {
        element.directionY = 0;

      }

      if (baloon.top <= boxx.top) {
        element.directionY = 1;
      }
      if (baloon.left <= boxx.left) {
        element.directionX = 1;
      }

      if (baloon.right >= boxx.width) {
        element.directionX = 0;


      }

    });

  }, 10)




}

function addbloon() {


  var addbloonn = document.createElement("img");
  addbloonn.setAttribute("src", "images/bal" + (Math.round(Math.random() * 2)) + ".png");
  addbloonn.setAttribute("class","bloonclass")

addbloonn.style.left = (Math.round((Math.random(700) * 600))) + 'px';
addbloonn.style.top = (Math.round((Math.random(700) * 600))) + 'px';
addbloonn.directionY = 1;
addbloonn.directionX = 1;
  box.appendChild(addbloonn)


}