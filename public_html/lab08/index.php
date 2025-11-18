
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Time-Based Greeting</title>

    <link rel="stylesheet" href="lab08.css">
</head>

<body>

<!-- 
    note: This div will receive:
    1. The greeting text
    2. The correct background image
    from greeting.php
-->
<h1> Problem 1 greeting box </h1>
<div id="greetBox">

    <!-- Insert PHP output from greeting.php -->
    <?php include("lab08.php"); ?>

</div>

<h1> Problem 2 form</h1>
<div>
<form action="index.php" method="post">

    <!-- Input for rows -->
    Enter number of rows (3–12): 
    <input type="text" name="rows">

    <br><br>

    <!-- Input for columns -->
    Enter number of columns (3–12):
    <input type="text" name="cols">

    <br><br>

    <input type="submit" value="Generate Table">

</form>

<br>

<!-- include tha PHP code that validates input and prints table -->
<?php include("process.php"); ?>
</div>
<!--   PROBLEM 3  -->

<div id="problem3" class="section">

    <h2>Problem 3: Pick Your Favourite Image</h2>

    <!-- Form lets user choose a favorite image -->
    <form action="index.php" method="post">

        <p>Select your favourite image:</p>

        <!-- 5 images  -->
        <input type="radio" name="fav" value="image1.png"> Image 1<br>
        <input type="radio" name="fav" value="image2.png"> Image 2<br>
        <input type="radio" name="fav" value="image3.png"> Image 3<br>
        <input type="radio" name="fav" value="image4.png"> Image 4<br>
        <input type="radio" name="fav" value="image5.png"> Image 5<br>

        <br>
        <input type="submit" value="Save Favourite">

    </form>

    <br>

    <!-- Display -->
    <?php include("favorite.php"); ?>

</div>

</body>
</html>
