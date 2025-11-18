
<?php
// Only run the code if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form values from post
    $rows = $_POST['rows'];
    $cols = $_POST['cols'];

    // Convert to integers 
    $rows = intval($rows);
    $cols = intval($cols);


    // VALIDATION: Must be between 3 and 12
    
    if ($rows < 3 || $rows > 12 || $cols < 3 || $cols > 12) {

        // Show error message
        echo "<div class='error'>";
        echo "Both numbers must be between 3 and 12. Please try again.";
        echo "</div>";
    }

    else {

        // IS VALID INPUT → Generate table


        echo "<h3>Multiplication Table ($rows × $cols)</h3>";

        echo "<table>";

        // outer loop for each row
        for ($r = 1; $r <= $rows; $r++) {

            echo "<tr>";  // start row

            // inner loop for each column
            for ($c = 1; $c <= $cols; $c++) {

                // cell value = row × column
                $value = $r * $c;

                echo "<td>$value</td>";
            }

            echo "</tr>"; // end row
        }

        echo "</table>";
    }
}
?>
