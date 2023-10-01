function rolarParaBaixo() {
  window.scrollTo(0, document.body.scrollHeight);
}

function rolarParaCima() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

var bmws = document.querySelectorAll(".bmw");
var volkss = document.querySelectorAll(".volks");
var fiats = document.querySelectorAll(".fiat");
var toyotas = document.querySelectorAll(".toyota");
var fords = document.querySelectorAll(".ford");
var jeeps = document.querySelectorAll(".jeep");

var cards = document.querySelectorAll(".car-section");

var Home = document.getElementById("Home");

Home.addEventListener("click", function () {
  cards.forEach(function (card) {
    card.style.display = "flex";
  });
});

bmws.forEach(function (bmw) {
  bmw.addEventListener("click", function () {
    var getId = this.getAttribute("id");

    cards.forEach(function (card) {
      var cardHref = card.getAttribute("id");

      if (getId === cardHref) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

volkss.forEach(function (volks) {
  volks.addEventListener("click", function () {
    var getId = this.getAttribute("id");

    cards.forEach(function (card) {
      var cardHref = card.getAttribute("id");

      if (getId === cardHref) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

fiats.forEach(function (fiat) {
  fiat.addEventListener("click", function () {
    var getId = this.getAttribute("id");

    cards.forEach(function (card) {
      var cardHref = card.getAttribute("id");

      if (getId === cardHref) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

toyotas.forEach(function (toyota) {
  toyota.addEventListener("click", function () {
    var getId = this.getAttribute("id");

    cards.forEach(function (card) {
      var cardHref = card.getAttribute("id");

      if (getId === cardHref) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

fords.forEach(function (ford) {
  ford.addEventListener("click", function () {
    var getId = this.getAttribute("id");

    cards.forEach(function (card) {
      var cardHref = card.getAttribute("id");

      if (getId === cardHref) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

jeeps.forEach(function (jeep) {
  jeep.addEventListener("click", function () {
    var getId = this.getAttribute("id");

    cards.forEach(function (card) {
      var cardHref = card.getAttribute("id");

      if (getId === cardHref) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
