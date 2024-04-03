$(document).ready(function() {
    function fetchTranslation() {
        let languageCode = $("#language_code").val();
        let apiUrl = `https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`;

        $.get(apiUrl, function(data) {
            $("#hello").text(data.hello);
        }).fail(function() {
            $("#hello").text("Error: Failed to fetch translation.");
        });
    }

    $("#btn_translate").click(fetchTranslation);

    $("#language_code").keypress(function(event) {
        if (event.which === 13) { // Check if Enter key is pressed
            fetchTranslation();
        }
    });
});

