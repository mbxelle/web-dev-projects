
<?php

// STEP 1: Get current hour (00–23)

$hour = date("H");


// STEP 2: Choose greeting + background

if ($hour >= 5 && $hour < 12) {
    $greeting = "Good morning";
    $background = "morning.jpg";
}
elseif ($hour >= 12 && $hour < 17) {
    $greeting = "Good afternoon";
    $background = "afternoon.jpg";
}
elseif ($hour >= 17 && $hour < 21) {
    $greeting = "Good evening";
    $background = "evening.jpg";
}
else {
    $greeting = "Good night";
    $background = "night.jpg";
}


// STEP 3: Output HTML + inline CSS
// echo the inline style so the background
// depends on PHP logic.

?>

<!-- apply the dynamic background image -->
<style>
#greetBox {
    background-image: url('<?php echo $background; ?>');
}
</style>

<!-- print the greeting text -->
<?php
echo $greeting;
?>
