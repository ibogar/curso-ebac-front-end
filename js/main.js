$(document).ready(function () {
    let telMascara = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }
    let telOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(telMascara.apply({}, arguments), options);
        }
    };

    
    $('#telefone').mask(telMascara, telOptions);
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00.000-00')
    
})