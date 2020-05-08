var sign = prompt('which is your sign?');

switch (sign) {
    case 'acuario':
        console.log('tiende a la originalidad y la aventura, de manera que casa a la perfección con Sagitario y Aries, otros dos signos con clara vocación hacia lo imprevisible.También se llevan bastante bien con Géminis o Libra.En la otra cara de la moneda nos encontramos con Tauro o Escorpio, que chocan frontalmente en su manera de ver la vida.');
        break
    case 'piscis':
        console.log('por último, se encuentra muy bien con Tauro o Capricornio, ya que siente la tranquilidad que estos le inspiran. También encuentra puntos en común con Escorpio y Cáncer, especialmente en el ámbito del arte. Los Géminis son con los que menos congenia ya que ven la vida de una manera excesivamente racional para su gusto, y debe buscar emociones en otro lado.');
        break
    case 'cancer':
    case 'cáncer':
        console.log('requiere seguridad y por eso Tauro y Virgo son los que mejor congenian. Al compartir el elemento de agua con Piscis y Escorpio pueden forjar grandes amistades, mientras que Aries y Libra suelen ser dos signos a evitar por cuestiones de incompatibilidad en la base del carácter de ambos.s');

        break
    default:
        console.log('dont know search the sign from zodiacal')
        break
}