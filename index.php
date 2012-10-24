<?php
require_once 'uf.class.php';
?>
<?php /* $uf = new Uf;echo $uf->getDate(date('d-m-Y')); */?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="es_ES"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="es_ES"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="es_ES"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="es_ES"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Simulador Hipotecario</title>
	<meta name="description" content="Sistema de simulacion de crédito hipotecario">
	<meta name="author" content="Juan Torres">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/ui-lightness/jquery-ui-1.9.0.custom.min.css">
	<script src="js/libs/modernizr-2.5.3-respond-1.1.0.min.js"></script>
</head>
<body>
	<header>

	</header>
	<div role="main">
            <table id="tMontos">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Pesos</th>
                    <th>UF</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Precio vivienda</th>
                    <td id="pesosPrecioVivienda">-</td>
                    <td><input onblur="tengoCambios()" type="number" id="ufPrecioVivienda" value="1500" /></td>
                </tr>
                <tr>
                    <th>Subsidio</th>
                    <td><select onchange="tengoCambios()" id="montosOpcionSubsidio">
                            <option value="si">Si</option>
                            <option value="no" selected>No</option>
                        </select></td>
                    <td>-</td>
                </tr>
                <tr>
                    <th>Monto Subsidio</th>
                    <td id="pesosMontoSubsidio">-</td>
                    <td id="ufMontoSubsidio">-</td>
                </tr>
                <tr>
                    <th>Ahorro Subsidio</th>
                    <td id="pesosAhorroSubsidio">-</td>
                    <td id="ufAhorroSubsidio">-</td>
                </tr>
                <tr>
                    <th>Ahorro Adicional</th>
                    <td id="pesosAhorroAdicional">-</td>
                    <td id="ufAhorroAdicional">-</td>
                </tr>
                <tr>
                    <th>Ahorro Necesario</th>
                    <td id="pesosAhorroNecesario">-</td>
                    <td id="ufAhorroNecesario">-</td>
                </tr>
                <tr>
                    <th>Renta Líquida</th>
                    <td><input onblur="tengoCambios()" type="number" id="pesosRentaLiquida" value="" /></td>
                    <td id="ufRentaLiquida"></td>
                </tr>
                <tr>
                    <th>Monto Crédito</th>
                    <td id="pesosMontoCredito">-</td>
                    <td id="ufMontoCredito">-</td>
                </tr>
                </tbody>
            </table>
            <table id="tValorUf">
                <tbody>
                    <tr>
                        <th>Valor UF</th>
                        <td><?php echo date('d-m-Y'); ?></td>
                        <td id="valorUf">22691.92</td>
                    </tr>
                </tbody>
            </table>
	</div>
	<footer>

	</footer>

	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.8.2.min.js"><\/script>')</script>
        <script src="js/libs/jquery-ui-1.9.0.custom.min.js"></script>
	<script src="js/plugins.js"></script>
	<script src="js/script.js"></script>
</body>
</html>