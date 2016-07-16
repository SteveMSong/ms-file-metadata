<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <meta charset="UTF-8">
</head>
<body>
<div class="container">
    <h1 class="header">API Basejump: File Metadata Microservice</h1>
    <p>By Steve M Song</p>
    <blockquote>User Stories:
        <ol>
            <li>I can submit a FormData object that includes a file upload.</li>
            <li>When I submit something, I will receive the filesize in bytes within the JSON response.</li>
        </ol>
    </blockquote>
    <h2>example usage:</h2>
    <p>Upload file from the UI at the root.</p>
    <code>https://ms-file-metadata.herokuapp.com</code><br>
    <h2>example output:</h2>
    <code>https://ms-file-metadata.herokuapp.com/get-file-size</code><br><br>
    <code>{"filename":"SteveSong_Resume_2016.pdf","size":160852}</code><br><br>
    <h4>Submit a file to view its filesize</h4>
    <form action="/get-file-size" method="post" enctype="multipart/form-data">
      <input type="file" name="file-check"><br>
      <input type="submit">
    </form>
</div>
</body>
</html>
