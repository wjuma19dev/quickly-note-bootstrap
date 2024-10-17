window.addEventListener("load", function () {
  new TypeIt("#searchbar", {
    strings: ["Busca lo que quieras ..."],
    waitUntilVisible: true,
    speed: 100,
  }).go();
});
