/* Author: Juan Torres

*/

function tengoCambios(){
    var puedoEjecutar = true;
    var valorUf = $('#valorUf').html();
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

function calculosGenerales(){
    var valorUf = parseFloat($('#valorUf').html());
    var pesosRentaLiquida = parseFloat($('#pesosRentaLiquida').val());
    var ufPrecioVivienda = parseFloat($('#ufPrecioVivienda').val());
    var conSubsidio = (trim($('#montosOpcionSubsidio').val())=='si')?true:false;
    
    $('#pesosPrecioVivienda').html((Math.round(valorUf*ufPrecioVivienda)).formatDinero(0,',','.'));
    
    // Calculo del subsidio
    if(conSubsidio)
    {
        
    }else
    {
        ufMontoSubsidio = 0;
    }
}

