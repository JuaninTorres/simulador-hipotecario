/* Author: Juan Torres

*/

var porcentajeMaximo = 0.25;

var tasa_15_1 = 5.3;var tasa_15_2 = 5.6;var tasa_15_3 = 5.8;
var tasa_20_1 = 5.4;var tasa_20_2 = 5.6;var tasa_20_3 = 5.9;var tasa_20_4 = 6.1;var tasa_20_5 = 4.8;
var tasa_25_1 = 5.6;var tasa_25_2 = 5.9;var tasa_25_3 = 6.2;
var tasa_30_1 = 5.8;var tasa_30_2 = 6.0;var tasa_30_3 = 6.2;

var tasa_mensual_15_1 = (Math.pow(1+(tasa_15_1/100), 1/12)-1);
var tasa_mensual_15_2 = (Math.pow(1+(tasa_15_2/100), 1/12)-1);
var tasa_mensual_15_3 = (Math.pow(1+(tasa_15_3/100), 1/12)-1);
var tasa_mensual_20_1 = (Math.pow(1+(tasa_20_1/100), 1/12)-1);
var tasa_mensual_20_2 = (Math.pow(1+(tasa_20_2/100), 1/12)-1);
var tasa_mensual_20_3 = (Math.pow(1+(tasa_20_3/100), 1/12)-1);
var tasa_mensual_20_4 = (Math.pow(1+(tasa_20_4/100), 1/12)-1);
var tasa_mensual_20_5 = (Math.pow(1+(tasa_20_5/100), 1/12)-1);
var tasa_mensual_25_1 = (Math.pow(1+(tasa_25_1/100), 1/12)-1);
var tasa_mensual_25_2 = (Math.pow(1+(tasa_25_2/100), 1/12)-1);
var tasa_mensual_25_3 = (Math.pow(1+(tasa_25_3/100), 1/12)-1);
var tasa_mensual_30_1 = (Math.pow(1+(tasa_30_1/100), 1/12)-1);
var tasa_mensual_30_2 = (Math.pow(1+(tasa_30_2/100), 1/12)-1);
var tasa_mensual_30_3 = (Math.pow(1+(tasa_30_3/100), 1/12)-1);

//$('#d_15_1_cuota_pesos').html(tasa_mensual_15_1+'%');
var valorUf = parseFloat($('#valorUf').val());
$('#valorUfFormateado').html(valorUf.formatDinero(2,',','.'));
$('#d_15_1_tasa').html(tasa_15_1+'%');
$('#d_15_2_tasa').html(tasa_15_2+'%');
$('#d_15_3_tasa').html(tasa_15_3+'%');
$('#d_20_1_tasa').html(tasa_20_1+'%');
$('#d_20_2_tasa').html(tasa_20_2+'%');
$('#d_20_3_tasa').html(tasa_20_3+'%');
$('#d_20_4_tasa').html(tasa_20_4+'%');
$('#d_20_5_tasa').html(tasa_20_5+'%');
$('#d_25_1_tasa').html(tasa_25_1+'%');
$('#d_25_2_tasa').html(tasa_25_2+'%');
$('#d_25_3_tasa').html(tasa_25_3+'%');
$('#d_30_1_tasa').html(tasa_30_1+'%');
$('#d_30_2_tasa').html(tasa_30_2+'%');
$('#d_30_3_tasa').html(tasa_30_3+'%');

function tengoCambios(){
    var puedoEjecutar = true;
    var valorUf = $('#valorUf').val();
    var opcionSubsidio = $('#montosOpcionSubsidio').val();
    var pesosRentaLiquida = $('#pesosRentaLiquida').val();
    var ufPrecioVivienda = $('#ufPrecioVivienda').val();
    
    puedoEjecutar = (isNumber(valorUf) && valorUf>0)?puedoEjecutar:false;
    puedoEjecutar = (opcionSubsidio.length>0)?puedoEjecutar:false;
    puedoEjecutar = (isNumber(pesosRentaLiquida) && pesosRentaLiquida>0)?puedoEjecutar:false;
    puedoEjecutar = (isNumber(ufPrecioVivienda) && ufPrecioVivienda>0)?puedoEjecutar:false;
    
    if(puedoEjecutar){
        calculosGenerales();
    }
}

function validarRenta(porcentaje,contenedor)
{
    if(porcentaje>porcentajeMaximo)
    {
        $('#'+contenedor).html('No Válido');
        $('#'+contenedor).parent().addClass('ui-state-error');
        //ui-state-error
        // Marco en rojo
    }
    else
    {
        $('#'+contenedor).html('Válido');
        $('#'+contenedor).parent().removeClass('ui-state-error');
    }
}
function calculosGenerales(){
    
    var pesosRentaLiquida = parseFloat($('#pesosRentaLiquida').val());
    var ufPrecioVivienda = parseFloat($('#ufPrecioVivienda').val());
    var conSubsidio = (trim($('#montosOpcionSubsidio').val())=='si')?true:false;
    
    // Calculo del subsidio
    if(conSubsidio)
    {
        if(ufPrecioVivienda>=1000 && ufPrecioVivienda<1400)
        {
            ufMontoSubsidio=800-(ufPrecioVivienda*0.5);
        }
        else
        {
            if(ufPrecioVivienda>1400)
            {
                ufMontoSubsidio=100;
            }
            else
            {
                ufMontoSubsidio=800-(ufPrecioVivienda*0.5);
            }
        }
        //Calculo del ahorro
        ufAhorroSubsidio=(ufPrecioVivienda<=1000)?30:50;
    }else
    {
        ufMontoSubsidio = 0;
        ufAhorroSubsidio = 0;
    }
    ufAhorroNecesario = 0.2 * ufPrecioVivienda;
    ufAhorroAdicional = ((ufMontoSubsidio+ufAhorroSubsidio)>ufAhorroNecesario)?0:0.2*ufPrecioVivienda-ufMontoSubsidio-ufAhorroSubsidio;
    
    ufRentaLiquida = pesosRentaLiquida/valorUf;
    ufMontoCredito = ufPrecioVivienda - ufMontoSubsidio - ufAhorroSubsidio - ufAhorroAdicional;
    
    d_15_1_cuota_uf = (ufMontoCredito*tasa_mensual_15_1)/(1-(1/Math.pow(1+tasa_mensual_15_1, 15*12)));
    d_15_1_cuota_pesos = d_15_1_cuota_uf*valorUf;
    d_15_1_renta = d_15_1_cuota_pesos * 4;
    d_15_1_credito_renta = d_15_1_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_15_1_credito_renta,'d_15_1_validez');
    
    d_15_2_cuota_uf = (ufMontoCredito*tasa_mensual_15_2)/(1-(1/Math.pow(1+tasa_mensual_15_2, 15*12)));
    d_15_2_cuota_pesos = d_15_2_cuota_uf*valorUf;
    d_15_2_renta = d_15_2_cuota_pesos * 4;
    d_15_2_credito_renta = d_15_2_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_15_2_credito_renta,'d_15_2_validez');
    
    d_15_3_cuota_uf = (ufMontoCredito*tasa_mensual_15_3)/(1-(1/Math.pow(1+tasa_mensual_15_3, 15*12)));
    d_15_3_cuota_pesos = d_15_3_cuota_uf*valorUf;
    d_15_3_renta = d_15_3_cuota_pesos * 4;
    d_15_3_credito_renta = d_15_3_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_15_3_credito_renta,'d_15_3_validez');
    
    d_20_1_cuota_uf = (ufMontoCredito*tasa_mensual_20_1)/(1-(1/Math.pow(1+tasa_mensual_20_1, 20*12)));
    d_20_1_cuota_pesos = d_20_1_cuota_uf*valorUf;
    d_20_1_renta = d_20_1_cuota_pesos * 4;
    d_20_1_credito_renta = d_20_1_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_20_1_credito_renta,'d_20_1_validez');
    
    d_20_2_cuota_uf = (ufMontoCredito*tasa_mensual_20_2)/(1-(1/Math.pow(1+tasa_mensual_20_2, 20*12)));
    d_20_2_cuota_pesos = d_20_2_cuota_uf*valorUf;
    d_20_2_renta = d_20_2_cuota_pesos * 4;
    d_20_2_credito_renta = d_20_2_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_20_2_credito_renta,'d_20_2_validez');
    
    d_20_3_cuota_uf = (ufMontoCredito*tasa_mensual_20_3)/(1-(1/Math.pow(1+tasa_mensual_20_3, 20*12)));
    d_20_3_cuota_pesos = d_20_3_cuota_uf*valorUf;
    d_20_3_renta = d_20_3_cuota_pesos * 4;
    d_20_3_credito_renta = d_20_3_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_20_3_credito_renta,'d_20_3_validez');
    
    d_20_4_cuota_uf = (ufMontoCredito*tasa_mensual_20_4)/(1-(1/Math.pow(1+tasa_mensual_20_4, 20*12)));
    d_20_4_cuota_pesos = d_20_4_cuota_uf*valorUf;
    d_20_4_renta = d_20_4_cuota_pesos * 4;
    d_20_4_credito_renta = d_20_4_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_20_4_credito_renta,'d_20_4_validez');
    
    d_20_5_cuota_uf = (ufMontoCredito*tasa_mensual_20_5)/(1-(1/Math.pow(1+tasa_mensual_20_5, 20*12)));
    d_20_5_cuota_pesos = d_20_5_cuota_uf*valorUf;
    d_20_5_renta = d_20_5_cuota_pesos * 4;
    d_20_5_credito_renta = d_20_5_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_20_5_credito_renta,'d_20_5_validez');
    
    
    d_25_1_cuota_uf = (ufMontoCredito*tasa_mensual_25_1)/(1-(1/Math.pow(1+tasa_mensual_25_1, 25*12)));
    d_25_1_cuota_pesos = d_25_1_cuota_uf*valorUf;
    d_25_1_renta = d_25_1_cuota_pesos * 4;
    d_25_1_credito_renta = d_25_1_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_25_1_credito_renta,'d_25_1_validez');
    
    d_25_2_cuota_uf = (ufMontoCredito*tasa_mensual_25_2)/(1-(1/Math.pow(1+tasa_mensual_25_2, 25*12)));
    d_25_2_cuota_pesos = d_25_2_cuota_uf*valorUf;
    d_25_2_renta = d_25_2_cuota_pesos * 4;
    d_25_2_credito_renta = d_25_2_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_25_2_credito_renta,'d_25_2_validez');
    
    d_25_3_cuota_uf = (ufMontoCredito*tasa_mensual_25_3)/(1-(1/Math.pow(1+tasa_mensual_25_3, 25*12)));
    d_25_3_cuota_pesos = d_25_3_cuota_uf*valorUf;
    d_25_3_renta = d_25_3_cuota_pesos * 4;
    d_25_3_credito_renta = d_25_3_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_25_3_credito_renta,'d_25_3_validez');
    
    d_30_1_cuota_uf = (ufMontoCredito*tasa_mensual_30_1)/(1-(1/Math.pow(1+tasa_mensual_30_1, 30*12)));
    d_30_1_cuota_pesos = d_30_1_cuota_uf*valorUf;
    d_30_1_renta = d_30_1_cuota_pesos * 4;
    d_30_1_credito_renta = d_30_1_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_30_1_credito_renta,'d_30_1_validez');
    
    d_30_2_cuota_uf = (ufMontoCredito*tasa_mensual_30_2)/(1-(1/Math.pow(1+tasa_mensual_30_2, 30*12)));
    d_30_2_cuota_pesos = d_30_2_cuota_uf*valorUf;
    d_30_2_renta = d_30_2_cuota_pesos * 4;
    d_30_2_credito_renta = d_30_2_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_30_2_credito_renta,'d_30_2_validez');
    
    d_30_3_cuota_uf = (ufMontoCredito*tasa_mensual_30_3)/(1-(1/Math.pow(1+tasa_mensual_30_3, 30*12)));
    d_30_3_cuota_pesos = d_30_3_cuota_uf*valorUf;
    d_30_3_renta = d_30_3_cuota_pesos * 4;
    d_30_3_credito_renta = d_30_3_cuota_pesos/pesosRentaLiquida;
    validarRenta(d_30_3_credito_renta,'d_30_3_validez');
    
    
    $('#d_15_1_cuota_uf').html(round_number(d_15_1_cuota_uf,2));
    $('#d_15_1_cuota_pesos').html((Math.round(d_15_1_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_15_1_renta').html((Math.round(d_15_1_renta)).formatDinero(0,',','.'));
    $('#d_15_1_credito_renta').html(round_number(d_15_1_credito_renta,3));
    $('#d_15_2_cuota_uf').html(round_number(d_15_2_cuota_uf,2));
    $('#d_15_2_cuota_pesos').html((Math.round(d_15_2_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_15_2_renta').html((Math.round(d_15_2_renta)).formatDinero(0,',','.'));
    $('#d_15_2_credito_renta').html(round_number(d_15_2_credito_renta,3));
    $('#d_15_3_cuota_uf').html(round_number(d_15_3_cuota_uf,2));
    $('#d_15_3_cuota_pesos').html((Math.round(d_15_3_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_15_3_renta').html((Math.round(d_15_3_renta)).formatDinero(0,',','.'));
    $('#d_15_3_credito_renta').html(round_number(d_15_3_credito_renta,3));
    
    $('#d_20_1_cuota_uf').html(round_number(d_20_1_cuota_uf,2));
    $('#d_20_1_cuota_pesos').html((Math.round(d_20_1_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_20_1_renta').html((Math.round(d_20_1_renta)).formatDinero(0,',','.'));
    $('#d_20_1_credito_renta').html(round_number(d_20_1_credito_renta,3));
    $('#d_20_2_cuota_uf').html(round_number(d_20_2_cuota_uf,2));
    $('#d_20_2_cuota_pesos').html((Math.round(d_20_2_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_20_2_renta').html((Math.round(d_20_2_renta)).formatDinero(0,',','.'));
    $('#d_20_2_credito_renta').html(round_number(d_20_2_credito_renta,3));
    $('#d_20_3_cuota_uf').html(round_number(d_20_3_cuota_uf,2));
    $('#d_20_3_cuota_pesos').html((Math.round(d_20_3_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_20_3_renta').html((Math.round(d_20_3_renta)).formatDinero(0,',','.'));
    $('#d_20_3_credito_renta').html(round_number(d_20_3_credito_renta,3));
    $('#d_20_4_cuota_uf').html(round_number(d_20_4_cuota_uf,2));
    $('#d_20_4_cuota_pesos').html((Math.round(d_20_4_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_20_4_renta').html((Math.round(d_20_4_renta)).formatDinero(0,',','.'));
    $('#d_20_4_credito_renta').html(round_number(d_20_4_credito_renta,3));
    $('#d_20_5_cuota_uf').html(round_number(d_20_5_cuota_uf,2));
    $('#d_20_5_cuota_pesos').html((Math.round(d_20_5_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_20_5_renta').html((Math.round(d_20_5_renta)).formatDinero(0,',','.'));
    $('#d_20_5_credito_renta').html(round_number(d_20_5_credito_renta,3));
    
    
    $('#d_25_1_cuota_uf').html(round_number(d_25_1_cuota_uf,2));
    $('#d_25_1_cuota_pesos').html((Math.round(d_25_1_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_25_1_renta').html((Math.round(d_25_1_renta)).formatDinero(0,',','.'));
    $('#d_25_1_credito_renta').html(round_number(d_25_1_credito_renta,3));
    $('#d_25_2_cuota_uf').html(round_number(d_25_2_cuota_uf,2));
    $('#d_25_2_cuota_pesos').html((Math.round(d_25_2_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_25_2_renta').html((Math.round(d_25_2_renta)).formatDinero(0,',','.'));
    $('#d_25_2_credito_renta').html(round_number(d_25_2_credito_renta,3));
    $('#d_25_3_cuota_uf').html(round_number(d_25_3_cuota_uf,2));
    $('#d_25_3_cuota_pesos').html((Math.round(d_25_3_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_25_3_renta').html((Math.round(d_25_3_renta)).formatDinero(0,',','.'));
    $('#d_25_3_credito_renta').html(round_number(d_25_3_credito_renta,3));
    
    $('#d_30_1_cuota_uf').html(round_number(d_30_1_cuota_uf,2));
    $('#d_30_1_cuota_pesos').html((Math.round(d_30_1_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_30_1_renta').html((Math.round(d_30_1_renta)).formatDinero(0,',','.'));
    $('#d_30_1_credito_renta').html(round_number(d_30_1_credito_renta,3));
    $('#d_30_2_cuota_uf').html(round_number(d_30_2_cuota_uf,2));
    $('#d_30_2_cuota_pesos').html((Math.round(d_30_2_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_30_2_renta').html((Math.round(d_30_2_renta)).formatDinero(0,',','.'));
    $('#d_30_2_credito_renta').html(round_number(d_30_2_credito_renta,3));
    $('#d_30_3_cuota_uf').html(round_number(d_30_3_cuota_uf,2));
    $('#d_30_3_cuota_pesos').html((Math.round(d_30_3_cuota_pesos)).formatDinero(0,',','.'));
    $('#d_30_3_renta').html((Math.round(d_30_3_renta)).formatDinero(0,',','.'));
    $('#d_30_3_credito_renta').html(round_number(d_30_3_credito_renta,3));
    
    /////////////////////////////////////////////////////////////////////////////////////////
    //Reemplazos varios 
    $('#pesosPrecioVivienda').html((Math.round(valorUf*ufPrecioVivienda)).formatDinero(0,',','.'));
    $('#ufMontoSubsidio').html(ufMontoSubsidio);
    $('#pesosMontoSubsidio').html((Math.round(valorUf*ufMontoSubsidio)).formatDinero(0,',','.'));
    $('#ufAhorroSubsidio').html(ufAhorroSubsidio);
    $('#pesosAhorroSubsidio').html((Math.round(valorUf*ufAhorroSubsidio)).formatDinero(0,',','.'));
    $('#ufAhorroNecesario').html(ufAhorroNecesario);
    $('#pesosAhorroNecesario').html((Math.round(valorUf*ufAhorroNecesario)).formatDinero(0,',','.'));
    $('#ufAhorroAdicional').html(ufAhorroAdicional);
    $('#pesosAhorroAdicional').html((Math.round(valorUf*ufAhorroAdicional)).formatDinero(0,',','.'));
    
    $('#ufRentaLiquida').html(Math.round(ufRentaLiquida));
    $('#ufMontoCredito').html(ufMontoCredito);
    $('#pesosMontoCredito').html((Math.round(valorUf*ufMontoCredito)).formatDinero(0,',','.'));
}

