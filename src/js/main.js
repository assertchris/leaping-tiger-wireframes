import $ from "jquery"
import collapse from "bootstrap/collapse"

$(function() {
  $("#nav").load("includes/nav.html", null, function() {
    $("#logo").load("includes/logo.html")
  })

  $("#carousel").load("includes/carousel.html")

  $("#content").load("includes/content.html", null, function() {
    $("#news").load("includes/news.html")
  })

  $("#footer").load("includes/footer.html")
})
