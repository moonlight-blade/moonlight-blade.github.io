$(document).ready(function () {

  $('#search_term').keyup(function () {

      var searchField = $('#search_term').val();
      var regex = new RegExp(searchField, 'i');
      var output = '';

      $.getJSON('data/blues.json', function (data) {
        $.each(data, function (key, val) {
          if ((val.Artist.search(regex) != -1) || (val.Title.search(regex) != -1)) {
            output += '<div class="result_artist">' + val.Artist + '</div>';
            output += '<div class="result_title">' + val.Title + '</div>';
          }
        }
      );
        $('#search_results').html(output);
      });
    });
});
