<h1>
<?php  //codigo
  echo"Olá Mundo";
?>
</h1>

<?php 
  $valor=5;
  echo "<p>.$valor.</p>";

  $nome="Anna Laura";
  echo $nome;

  $array=["Pêra", "Maçã", "Banana"];
  echo "<br>";
  print_r($array);

  echo "<ul>";
  for($i=0;$i<=count($array);$i++){
    echo "<li> $i  $array[$i] </li>";
  }
  echo "</ul>";
?>