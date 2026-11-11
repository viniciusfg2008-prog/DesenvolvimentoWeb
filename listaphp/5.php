<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


  <form action="">
    <label for="min">Mínimo</label>
    <input name="min" type="number" value="<?php echo $min ?>"></input>

    <label for="max">Máximo</label>
    <input name="max" type="number" value="<?php echo $max ?>"></input>

    <input type="submit">
  </form>

  <?php
  if(isset($_GET["min"]) && isset($_GET["min"])){
    $min = $_GET["min"];
    $max = $_GET["max"];

  echo rand($min, $max);
  }


  ?>


</body>
</html>