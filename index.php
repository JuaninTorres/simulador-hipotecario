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
            
            <table id="tDividendos">
                <thead>
                    <tr>
                        <th>Años Dividendo</th>
                        <th>Cuota Pesos</th>
                        <th>Tasa</th>
                        <th>Cuota UF</th>
                        <th>Renta Líquida Exigida</th>
                        <th>% Credito/Renta Liquida</th>
                        <th>Válidez</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="3">15 Años</th>
                        <td id="d_15_1_cuota_pesos">-</td>
                        <td id="d_15_1_tasa">-</td>
                        <td id="d_15_1_cuota_uf">-</td>
                        <td id="d_15_1_renta">-</td>
                        <td id="d_15_1_credito_renta">-</td>
                        <td id="d_15_1_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_15_2_cuota_pesos">-</td>
                        <td id="d_15_2_tasa">-</td>
                        <td id="d_15_2_cuota_uf">-</td>
                        <td id="d_15_2_renta">-</td>
                        <td id="d_15_2_credito_renta">-</td>
                        <td id="d_15_2_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_15_3_cuota_pesos">-</td>
                        <td id="d_15_3_tasa">-</td>
                        <td id="d_15_3_cuota_uf">-</td>
                        <td id="d_15_3_renta">-</td>
                        <td id="d_15_3_credito_renta">-</td>
                        <td id="d_15_3_validez">-</td>
                    </tr>
                    <tr>
                        <th rowspan="5">20 Años</th>
                        <td id="d_20_1_cuota_pesos">-</td>
                        <td id="d_20_1_tasa">-</td>
                        <td id="d_20_1_cuota_uf">-</td>
                        <td id="d_20_1_renta">-</td>
                        <td id="d_20_1_credito_renta">-</td>
                        <td id="d_20_1_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_20_2_cuota_pesos">-</td>
                        <td id="d_20_2_tasa">-</td>
                        <td id="d_20_2_cuota_uf">-</td>
                        <td id="d_20_2_renta">-</td>
                        <td id="d_20_2_credito_renta">-</td>
                        <td id="d_20_2_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_20_3_cuota_pesos">-</td>
                        <td id="d_20_3_tasa">-</td>
                        <td id="d_20_3_cuota_uf">-</td>
                        <td id="d_20_3_renta">-</td>
                        <td id="d_20_3_credito_renta">-</td>
                        <td id="d_20_3_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_20_4_cuota_pesos">-</td>
                        <td id="d_20_4_tasa">-</td>
                        <td id="d_20_4_cuota_uf">-</td>
                        <td id="d_20_4_renta">-</td>
                        <td id="d_20_4_credito_renta">-</td>
                        <td id="d_20_4_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_20_5_cuota_pesos">-</td>
                        <td id="d_20_5_tasa">-</td>
                        <td id="d_20_5_cuota_uf">-</td>
                        <td id="d_20_5_renta">-</td>
                        <td id="d_20_5_credito_renta">-</td>
                        <td id="d_20_5_validez">-</td>
                    </tr>
                    <tr>
                        <th rowspan="3">25 Años</th>
                        <td id="d_25_1_cuota_pesos">-</td>
                        <td id="d_25_1_tasa">-</td>
                        <td id="d_25_1_cuota_uf">-</td>
                        <td id="d_25_1_renta">-</td>
                        <td id="d_25_1_credito_renta">-</td>
                        <td id="d_25_1_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_25_2_cuota_pesos">-</td>
                        <td id="d_25_2_tasa">-</td>
                        <td id="d_25_2_cuota_uf">-</td>
                        <td id="d_25_2_renta">-</td>
                        <td id="d_25_2_credito_renta">-</td>
                        <td id="d_25_2_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_25_3_cuota_pesos">-</td>
                        <td id="d_25_3_tasa">-</td>
                        <td id="d_25_3_cuota_uf">-</td>
                        <td id="d_25_3_renta">-</td>
                        <td id="d_25_3_credito_renta">-</td>
                        <td id="d_25_3_validez">-</td>
                    </tr>
                    <tr>
                        <th rowspan="3">30 Años</th>
                        <td id="d_30_1_cuota_pesos">-</td>
                        <td id="d_30_1_tasa">-</td>
                        <td id="d_30_1_cuota_uf">-</td>
                        <td id="d_30_1_renta">-</td>
                        <td id="d_30_1_credito_renta">-</td>
                        <td id="d_30_1_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_30_2_cuota_pesos">-</td>
                        <td id="d_30_2_tasa">-</td>
                        <td id="d_30_2_cuota_uf">-</td>
                        <td id="d_30_2_renta">-</td>
                        <td id="d_30_2_credito_renta">-</td>
                        <td id="d_30_2_validez">-</td>
                    </tr>
                    <tr>
                        <td id="d_30_3_cuota_pesos">-</td>
                        <td id="d_30_3_tasa">-</td>
                        <td id="d_30_3_cuota_uf">-</td>
                        <td id="d_30_3_renta">-</td>
                        <td id="d_30_3_credito_renta">-</td>
                        <td id="d_30_3_validez">-</td>
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