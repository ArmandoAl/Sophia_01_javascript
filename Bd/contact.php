<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      body{ background-color: Black;
       background-attachment:fixed ;
       background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
       background-size:100%100%;}
      
      h1{
        color: white;
        font-size: 50px;
        font-family: 'Courier New', Courier, monospaces;
        z-index: 99;
        padding: 16px 14px;
        text-align: center;
        position: relative;}

        h2{
          color: white;
          font-size: calc(1em + 1vw);
          position: relative;
          text-align: center;}

          a{
            text-decoration: none;
            text-transform: uppercase;
            background-color: transparent;
            color: white;
            width: calc(10%);
            height: calc(10%);
            padding: 14px 16px;
            border: solid 1px white;}
          a:hover{
            box-shadow: 0 0 40px cyan;}

          #particles-js{ 
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: -1; }
    </style>
</head>
<body>
<div id="particles-js"></div>
<script src="particles.js"></script>
<script src="app.js"></script>
<?php
if(isset($_POST['Add'])){
  echo "<h1>Practica 11</h1>";
  $enlace = mysqli_connect("localhost","id12570025_contact","4PR!RXFbbSso=S]k", "id12570025_database");
   if ($enlace -> connect_errno) {
      echo "sin Conexion<br>";
    } else{
      echo "<h1>Conexion establecida</h1><br>";
    }


    id12570025_sophia

    function vshacker($data){
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
          if(strlen($_POST['Name']) >=1 && strlen($_POST['Gmail']) >=1 && strlen($_POST['Coment']) >=1 )
          {
              $nombre = trim($_POST['Name']);
               $gmail = trim($_POST['Gmail']);
                $coment = trim($_POST['Coment']);
                $Consulta = "INSERT INTO `contacto`(`id`, `nombre`, `correo`, `comentario`) VALUES (NULL , '$nombre', '$gmail', '$coment')";

                if(mysqli_query($enlace, $Consulta) == true)
                {echo "<h2>Gracias $nombre por tu interes, tratare de contactarme contigo lo mas pronto posible</h2>";}
          }
}
?>
<center><a href="../../index.html"> Index</a></center>
</body>
</html>
