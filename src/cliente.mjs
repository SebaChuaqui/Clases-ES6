// Exportando la clase
export default class Cliente{
    contructor(nombre,impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    // Getter
    get nombre(){
        return this._nombre;
    }
    
    // Setter
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    // Método de cálculo
    calcularImpuesto(monto_bruto_anual,deducciones){
        return (monto_bruto_anual - deducciones) * 21/100;
    }
}