<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Holberton School</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#btn_translate').click(function() {
                var languageCode = $('#language_code').val();
                var apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/';

                $.getJSON(apiUrl + '?lang=' + languageCode, function(data) {
                    $('#hello').text(data.hello);
                });
            });
        });
    </script>
</head>
<body>
    <header> 
        Say Hello
    </header>
    <br />
    <input id="language_code" type="text" placeholder="Language code"/>
    <input id="btn_translate" type="button" value="Translate"/>
    <br />
    <div id="hello"></div>
    <br />
    <footer>
        Holberton School - 2017
    </footer>
</body>
</html>
