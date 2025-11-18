
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Time-Based Greeting</title>

    <!-- Link to external CSS file -->
    <link rel="stylesheet" href="lab08.css">
</head>

<body>

<!-- 
    note: This div will receive:
    1. The greeting text
    2. The correct background image
    from greeting.php
-->
<div id="greetBox">

    <!-- Insert PHP output from greeting.php -->
    <?php include("lab08.php"); ?>

</div>

</body>
</html>
