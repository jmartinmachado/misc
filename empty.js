/**
 * Descripción: Verfica si un elemente esta vacio
 * 
 * @author Juan Martin Machado
 *
 * @internal Fecha de creación:   2014-06-19
 * @internal Ultima modificación: 2014-06-19
 * @internal Razón: Creación
 * 
 * ejemplo 1: empty(null);
 * retorna 1: true
 * ejemplo 2: empty(undefined);
 * retorna 2: true
 * ejemplo 3: empty([]);
 * retorna 3: true
 * ejemplo 4: empty({});
 * retorna 4: true
 * ejemplo 5: empty({'aFunc' : function () { alert('humpty'); } });
 * retorna 5: false
 * 
 * @param  object mixed_var Cualquier tipo de variable que querramos verificar que no contiene ningun elemento
 * @return boolean Resultado de la operación
 */
function empty(mixed_var) {
  var undef, key, i, len;
  var emptyValues = [undef, null, false, 0, '', '0'];

  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixed_var === emptyValues[i]) {
      return true;
    }
  }

  if (typeof mixed_var === 'object') {
    for (key in mixed_var) {
      return false;
    }
    return true;
  }

  return false;
}
