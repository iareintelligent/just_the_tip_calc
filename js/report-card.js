//run this first to get the list (even if empty) from local storage
function getRatings() {
  var ratings = new Array;
  var ratings_str = localStorage.getItem('rating');
  if (ratings_str != null) {
    ratings = JSON.parse(ratings_str);
  }
  return ratings;
}

function addRating() {
  var report = document.getElementById('report_card');
  debugger;
  var ratings = getRatings();
  ratings.push(report);
  localStorage.setItem('rating', JSON.stringify(ratings));

  return false;
}

document.getElementById('submit').addEventListener('click', addRating);
