<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reports</title>
    <style>
        body{ background-color: Black;
       background-attachment:fixed ;
       background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
       background-size:100%100%;}

        tr{background-color: transparent;
        margin: calc(25%);
        margin-top: 60px;
        padding: 6px;
        margin-top: 25px;}
        
        td{background-color: transparent;
        border: solid 1px white;
        color: white;
        width: calc(20%);
        height: 100px;
        padding: 6px;
        margin-top: 25px;
        font-size: 20px;
        text-align:center;}
        .tdt{
            height: 50px;
        }
        a{text-decoration: none;
        text-transform: uppercase;
        margin: 20px;
        padding: 12px 14px;
        font-size:calc(0.5em + 1vw);
        background-color: #2196f3;
        z-index: 99;
        border-radius: 30px;
        width: calc(12%);
        height: calc(2%);
        text-align: center;
        position: absolute;
        text-decoration: none;
        color: black;}
        a:hover{ opacity : 0.5;
        box-shadow: 0 0 40px #2196f3,  0 0 10px #2196f3, 0 0 30px #2196f3;}
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
<center>
<table>
		<tr>
			<td class="tdt">Id</td>
			<td class="tdt">Nombre</td>
            <td class="tdt">Pregunta</td>
            <td class="tdt">Respuesta</td>
		</tr>
	
<?php
$enlace = mysqli_connect("localhost","id12570025_root","gBFL3_{ue2?ewW%O", "id12570025_sophia_database");
   $select = "SELECT * from bd";
   $datos = mysqli_query($enlace, $select);
   while ($ver = mysqli_fetch_array($datos))
   {
?>
		<tr>
			<td> <?php echo $ver['id'] ?> </td>
			<td> <?php echo $ver['nombre'] ?> </td>
            <td> <?php echo $ver['pregunta'] ?> </td>
            <td> <?php echo $ver['respuesta'] ?> </td>
			
		</tr>
		<?php 
        }
		 ?>
	</table>
</center>

<center><a href="../../index.html">Regresar</a></center>
</body>
</html>