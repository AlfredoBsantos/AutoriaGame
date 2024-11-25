(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("mapaPrincipal",
{ "compressionlevel":-1,
 "height":25,
 "infinite":false,
 "layers":[
        {
         "data":[1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176,
            1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 406, 1216, 1217, 1215, 1216, 1217, 1215, 1216,
            1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 406, 1256, 1257, 1255, 1256, 1257, 1255, 1256,
            1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176,
            1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1203, 1216,
            1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256,
            1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176,
            1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216,
            1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256,
            1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176,
            1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216,
            1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256,
            1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176,
            1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216,
            1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256,
            1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176,
            1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216,
            1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256,
            1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176,
            1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216,
            1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256,
            1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176,
            1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216, 1217, 1215, 1216,
            1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256, 1257, 1255, 1256,
            1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176, 1177, 1175, 1176],
         "height":25,
         "id":1,
         "name":"Camada de Blocos 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":35,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 124, 125, 126, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 165, 166, 1256, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 205, 206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 124, 125, 125, 126, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 164, 165, 165, 166, 0, 0,
            0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 827, 828, 829, 830, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 867, 868, 869, 870, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31,
            0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71,
            0, 0, 0, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31,
            0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71,
            0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 0, 0, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 827, 828, 829, 830, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 867, 868, 869, 870, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 0, 0, 110, 0, 149],
         "height":25,
         "id":3,
         "name":"Camada de Blocos 1.5",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":35,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 646, 647, 0, 0, 0, 0, 0, 646, 647, 0, 0, 0, 646, 647, 899, 900, 901, 902, 903, 0, 0, 406, 1201, 259, 260, 1203, 646, 647, 0,
            0, 7, 8, 9, 10, 11, 686, 687, 7, 8, 9, 10, 11, 686, 687, 0, 0, 0, 686, 687, 939, 940, 941, 942, 943, 0, 0, 406, 1201, 259, 260, 1203, 686, 687, 0,
            681, 47, 48, 49, 50, 51, 681, 0, 47, 48, 49, 50, 51, 0, 681, 0, 0, 0, 0, 0, 979, 980, 981, 982, 983, 0, 0, 406, 1201, 299, 300, 1203, 0, 0, 0,
            721, 87, 88, 89, 90, 91, 721, 0, 87, 88, 89, 90, 91, 0, 721, 0, 0, 0, 0, 0, 1019, 1020, 1021, 1022, 1023, 0, 0, 0, 164, 339, 340, 166, 0, 1203, 0,
            681, 127, 128, 129, 130, 131, 681, 0, 127, 128, 129, 130, 131, 0, 681, 0, 0, 0, 0, 0, 1059, 1060, 1061, 1062, 1063, 0, 0, 0, 0, 0, 0, 413, 0, 450, 451,
            721, 167, 168, 169, 170, 171, 721, 0, 167, 168, 169, 170, 171, 0, 721, 0, 0, 0, 0, 0, 1099, 1100, 1101, 1102, 1103, 0, 0, 0, 0, 0, 406, 406, 406, 490, 491,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 646, 647,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 686, 687,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 189, 190, 191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 230, 231, 0, 188, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 383, 384, 385, 0, 228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 423, 424, 425, 0, 268, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 463, 464, 465, 0, 308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 522, 523, 523, 523, 0, 0, 0, 0, 0,
            0, 12, 13, 14, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 562, 0, 0, 0, 12, 13, 14, 15, 16,
            0, 52, 53, 54, 55, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 562, 0, 0, 0, 52, 53, 54, 55, 56,
            0, 92, 93, 94, 95, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 562, 0, 0, 0, 92, 93, 94, 95, 96,
            0, 132, 133, 134, 135, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 562, 0, 0, 0, 132, 133, 134, 135, 136,
            0, 172, 173, 174, 175, 176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 646, 647, 0, 562, 0, 0, 0, 172, 173, 174, 175, 176,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 686, 687, 0, 602, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":25,
         "id":2,
         "name":"Camada de Blocos 2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":35,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":25,
         "id":4,
         "name":"Camada de Blocos 3",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":35,
         "x":0,
         "y":0
        }, 
        {
         "data":[1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 0, 0, 0, 0, 1441, 1441, 1441, 1441, 0, 0, 1441, 1441, 1441, 1441,
            1441, 1441, 0, 0, 0, 1441, 1441, 1441, 1441, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 0, 0, 0, 0, 1441, 1441, 1441, 1441, 0, 0, 1441, 1441, 1441, 1441,
            1441, 0, 0, 0, 0, 0, 1441, 1441, 0, 0, 0, 0, 1441, 1441, 0, 1441, 1441, 1441, 1441, 1441, 0, 0, 0, 0, 0, 1441, 1441, 1441, 1441, 0, 0, 1441, 1441, 1441, 1441,
            1441, 0, 0, 0, 0, 0, 1441, 1441, 0, 0, 0, 0, 0, 1441, 0, 1441, 0, 0, 0, 1441, 0, 0, 0, 0, 0, 1441, 1441, 1441, 0, 0, 0, 0, 0, 1441, 1441,
            1441, 0, 0, 0, 0, 0, 1441, 1441, 0, 0, 0, 0, 0, 1441, 0, 1441, 1441, 1441, 1441, 1441, 0, 0, 0, 0, 0, 1441, 1441, 1441, 0, 0, 0, 0, 0, 1441, 1441,
            1441, 1441, 0, 1441, 0, 1441, 1441, 1441, 1441, 0, 1441, 0, 1441, 1441, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 1441, 1441, 1441, 0, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 0, 0, 1441, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 0, 0, 1441, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 1441, 1441, 1441, 0, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441,
            1441, 1441, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 1441, 1441, 1441, 1441, 0, 0, 0, 1441,
            1441, 0, 0, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 1441, 1441, 1441, 0, 0, 0, 0, 0,
            1441, 0, 0, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 1441, 1441, 1441, 0, 0, 0, 0, 0,
            1441, 0, 0, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 1441, 1441, 1441, 1441, 0, 0, 0, 0,
            1441, 0, 0, 0, 0, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 1441, 1441, 1441, 1441, 0, 0, 0, 0,
            1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 0, 1441, 1441, 1441, 1441, 1441, 1441, 1441, 1441],
         "height":25,
         "id":5,
         "name":"colisao",
         "opacity":1,
         "type":"tilelayer",
         "visible":false,
         "width":35,
         "x":0,
         "y":0
        }],
 "nextlayerid":6,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"./tileset/chaoBasico.tsx"
        }, 
        {
         "firstgid":1441,
         "source":"./tileset/colisao.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.9",
 "width":35
});