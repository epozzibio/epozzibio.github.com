ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:22174").setExtent([4325113.227228, 6541309.897331, 4366480.453040, 6569229.470662]);
var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Cursosdeagua_2 = new ol.format.GeoJSON();
var features_Cursosdeagua_2 = format_Cursosdeagua_2.readFeatures(json_Cursosdeagua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22174'});
var jsonSource_Cursosdeagua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cursosdeagua_2.addFeatures(features_Cursosdeagua_2);
var lyr_Cursosdeagua_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cursosdeagua_2, 
                style: style_Cursosdeagua_2,
                interactive: true,
                title: '<img src="styles/legend/Cursosdeagua_2.png" /> Cursos de agua'
            });
var format_parcelas_datos_4326_1006_3 = new ol.format.GeoJSON();
var features_parcelas_datos_4326_1006_3 = format_parcelas_datos_4326_1006_3.readFeatures(json_parcelas_datos_4326_1006_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22174'});
var jsonSource_parcelas_datos_4326_1006_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_datos_4326_1006_3.addFeatures(features_parcelas_datos_4326_1006_3);
var lyr_parcelas_datos_4326_1006_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcelas_datos_4326_1006_3, 
                style: style_parcelas_datos_4326_1006_3,
                interactive: true,
                title: '<img src="styles/legend/parcelas_datos_4326_1006_3.png" /> parcelas_datos_4326_1006'
            });
var format_RedVial_4 = new ol.format.GeoJSON();
var features_RedVial_4 = format_RedVial_4.readFeatures(json_RedVial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22174'});
var jsonSource_RedVial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_4.addFeatures(features_RedVial_4);
var lyr_RedVial_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedVial_4, 
                style: style_RedVial_4,
                interactive: false,
                title: '<img src="styles/legend/RedVial_4.png" /> Red Vial'
            });
var format_puntos_relevamiento_1006_fid_22174_5 = new ol.format.GeoJSON();
var features_puntos_relevamiento_1006_fid_22174_5 = format_puntos_relevamiento_1006_fid_22174_5.readFeatures(json_puntos_relevamiento_1006_fid_22174_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22174'});
var jsonSource_puntos_relevamiento_1006_fid_22174_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_relevamiento_1006_fid_22174_5.addFeatures(features_puntos_relevamiento_1006_fid_22174_5);
var lyr_puntos_relevamiento_1006_fid_22174_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puntos_relevamiento_1006_fid_22174_5, 
                style: style_puntos_relevamiento_1006_fid_22174_5,
                interactive: true,
    title: 'puntos_relevamiento_1006_fid_22174<br />\
    <img src="styles/legend/puntos_relevamiento_1006_fid_22174_5_0.png" /> Sitios de interés<br />\
    <img src="styles/legend/puntos_relevamiento_1006_fid_22174_5_1.png" /> Fuentes de agua<br />\
    <img src="styles/legend/puntos_relevamiento_1006_fid_22174_5_2.png" /> Accesos<br />\
    <img src="styles/legend/puntos_relevamiento_1006_fid_22174_5_3.png" /> Accesos<br />'
        });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Cursosdeagua_2.setVisible(true);lyr_parcelas_datos_4326_1006_3.setVisible(true);lyr_RedVial_4.setVisible(true);lyr_puntos_relevamiento_1006_fid_22174_5.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_GoogleSatellite_1,lyr_Cursosdeagua_2,lyr_parcelas_datos_4326_1006_3,lyr_RedVial_4,lyr_puntos_relevamiento_1006_fid_22174_5];
lyr_Cursosdeagua_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', });
lyr_parcelas_datos_4326_1006_3.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Agua disponible': 'Agua disponible', 'Referencia': 'Referencia', 'Accesibilidad vehículo': 'Accesibilidad vehículo', 'Propietario/a': 'Propietario/a', 'Contacto': 'Contacto', 'Señal teléfono': 'Señal teléfono', 'Teléfono': 'Teléfono', 'Punto de acceso': 'Punto de acceso', });
lyr_RedVial_4.set('fieldAliases', {'fid': 'fid', 'long(m)': 'long(m)', });
lyr_puntos_relevamiento_1006_fid_22174_5.set('fieldAliases', {'fid': 'fid', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Clase': 'Clase', 'Referencia': 'Referencia', 'Tipo de fuente': 'Tipo de fuente', 'Capacidad (l)': 'Capacidad (l)', 'Profundidad (m)': 'Profundidad (m)', 'Disponibilidad': 'Disponibilidad', 'Accesibilidad vehículo': 'Accesibilidad vehículo', 'Accesibilidad helicóptero': 'Accesibilidad helicóptero', 'Propietario/a': 'Propietario/a', 'Contacto': 'Contacto', 'Señal de teléfono': 'Señal de teléfono', 'Teléfono': 'Teléfono', 'Número': 'Número', 'Punto de acceso': 'Punto de acceso', });
lyr_Cursosdeagua_2.set('fieldImages', {'fid': '', 'nombre': '', });
lyr_parcelas_datos_4326_1006_3.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Agua disponible': 'TextEdit', 'Referencia': 'TextEdit', 'Accesibilidad vehículo': 'TextEdit', 'Propietario/a': 'TextEdit', 'Contacto': '', 'Señal teléfono': 'TextEdit', 'Teléfono': '', 'Punto de acceso': 'Range', });
lyr_RedVial_4.set('fieldImages', {'fid': '', 'long(m)': '', });
lyr_puntos_relevamiento_1006_fid_22174_5.set('fieldImages', {'fid': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Clase': 'TextEdit', 'Referencia': 'TextEdit', 'Tipo de fuente': 'TextEdit', 'Capacidad (l)': 'Range', 'Profundidad (m)': 'TextEdit', 'Disponibilidad': 'TextEdit', 'Accesibilidad vehículo': 'TextEdit', 'Accesibilidad helicóptero': 'TextEdit', 'Propietario/a': 'TextEdit', 'Contacto': '', 'Señal de teléfono': 'TextEdit', 'Teléfono': 'TextEdit', 'Número': 'Range', 'Punto de acceso': 'Range', });
lyr_Cursosdeagua_2.set('fieldLabels', {'fid': 'no label', 'nombre': 'inline label', });
lyr_parcelas_datos_4326_1006_3.set('fieldLabels', {'fid': 'no label', 'Nombre': 'inline label', 'Agua disponible': 'inline label', 'Referencia': 'inline label', 'Accesibilidad vehículo': 'inline label', 'Propietario/a': 'inline label', 'Contacto': 'inline label', 'Señal teléfono': 'inline label', 'Teléfono': 'inline label', 'Punto de acceso': 'inline label', });
lyr_RedVial_4.set('fieldLabels', {'fid': 'no label', 'long(m)': 'no label', });
lyr_puntos_relevamiento_1006_fid_22174_5.set('fieldLabels', {'fid': 'no label', 'Latitud': 'inline label', 'Longitud': 'inline label', 'Clase': 'inline label', 'Referencia': 'inline label', 'Tipo de fuente': 'inline label', 'Capacidad (l)': 'inline label', 'Profundidad (m)': 'inline label', 'Disponibilidad': 'inline label', 'Accesibilidad vehículo': 'inline label', 'Accesibilidad helicóptero': 'inline label', 'Propietario/a': 'inline label', 'Ccontacto': 'inline label', 'Señal de teléfono': 'inline label', 'Teléfono': 'inline label', 'Número': 'inline label', 'Punto de acceso': 'inline label', });
lyr_puntos_relevamiento_1006_fid_22174_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});