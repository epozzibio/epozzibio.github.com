var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Puestos_y_Parcelas_1 = new ol.format.GeoJSON();
var features_Puestos_y_Parcelas_1 = format_Puestos_y_Parcelas_1.readFeatures(json_Puestos_y_Parcelas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puestos_y_Parcelas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puestos_y_Parcelas_1.addFeatures(features_Puestos_y_Parcelas_1);
var lyr_Puestos_y_Parcelas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puestos_y_Parcelas_1, 
                style: style_Puestos_y_Parcelas_1,
                interactive: true,
                title: '<img src="styles/legend/Puestos_y_Parcelas_1.png" /> Puestos_y_Parcelas'
            });
var format_track_relevamiento_mp_0409_2 = new ol.format.GeoJSON();
var features_track_relevamiento_mp_0409_2 = format_track_relevamiento_mp_0409_2.readFeatures(json_track_relevamiento_mp_0409_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_track_relevamiento_mp_0409_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_track_relevamiento_mp_0409_2.addFeatures(features_track_relevamiento_mp_0409_2);
var lyr_track_relevamiento_mp_0409_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_track_relevamiento_mp_0409_2, 
                style: style_track_relevamiento_mp_0409_2,
                interactive: true,
                title: '<img src="styles/legend/track_relevamiento_mp_0409_2.png" /> track_relevamiento_mp_04-09'
            });
var format_caminos_internos_3 = new ol.format.GeoJSON();
var features_caminos_internos_3 = format_caminos_internos_3.readFeatures(json_caminos_internos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caminos_internos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caminos_internos_3.addFeatures(features_caminos_internos_3);
var lyr_caminos_internos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caminos_internos_3, 
                style: style_caminos_internos_3,
                interactive: true,
                title: '<img src="styles/legend/caminos_internos_3.png" /> caminos_internos'
            });
var format_puntos_relevamient_4 = new ol.format.GeoJSON();
var features_puntos_relevamient_4 = format_puntos_relevamient_4.readFeatures(json_puntos_relevamient_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntos_relevamient_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_relevamient_4.addFeatures(features_puntos_relevamient_4);
var lyr_puntos_relevamient_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puntos_relevamient_4, 
                style: style_puntos_relevamient_4,
                interactive: true,
                title: '<img src="styles/legend/puntos_relevamient_4.png" /> puntos_relevamient'
            });
var format_idecorred_vial_provincial_5 = new ol.format.GeoJSON();
var jsonSource_idecorred_vial_provincial_5 = new ol.source.Vector({
    attributions: ' ',
    format: format_idecorred_vial_provincial_5
});var lyr_idecorred_vial_provincial_5 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_idecorred_vial_provincial_5, 
    style: style_idecorred_vial_provincial_5,
    interactive: true,
    title: "idecor:red_vial_provincial"
});

function getidecorred_vial_provincial_5Json(geojson) {
    var features_idecorred_vial_provincial_5 = format_idecorred_vial_provincial_5.readFeatures(geojson);
    jsonSource_idecorred_vial_provincial_5.addFeatures(features_idecorred_vial_provincial_5);
}
var format_idecorcursos_agua_6 = new ol.format.GeoJSON();
var jsonSource_idecorcursos_agua_6 = new ol.source.Vector({
    attributions: ' ',
    format: format_idecorcursos_agua_6
});var lyr_idecorcursos_agua_6 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_idecorcursos_agua_6, 
    style: style_idecorcursos_agua_6,
    interactive: true,
    title: "idecor:cursos_agua"
});

function getidecorcursos_agua_6Json(geojson) {
    var features_idecorcursos_agua_6 = format_idecorcursos_agua_6.readFeatures(geojson);
    jsonSource_idecorcursos_agua_6.addFeatures(features_idecorcursos_agua_6);
}

lyr_GoogleHybrid_0.setVisible(true);lyr_Puestos_y_Parcelas_1.setVisible(true);lyr_track_relevamiento_mp_0409_2.setVisible(true);lyr_caminos_internos_3.setVisible(true);lyr_puntos_relevamient_4.setVisible(true);lyr_idecorred_vial_provincial_5.setVisible(true);lyr_idecorcursos_agua_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Puestos_y_Parcelas_1,lyr_track_relevamiento_mp_0409_2,lyr_caminos_internos_3,lyr_puntos_relevamient_4,lyr_idecorred_vial_provincial_5,lyr_idecorcursos_agua_6];
lyr_Puestos_y_Parcelas_1.set('fieldAliases', {'Nombre': 'Nombre', 'Superficie': 'Superficie', 'Perímetro': 'Perímetro', 'Tipo': 'Tipo', });
lyr_track_relevamiento_mp_0409_2.set('fieldAliases', {'type': 'type', 'tident': 'tident', 'ident': 'ident', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'y_proj': 'y_proj', 'x_proj': 'x_proj', 'comment': 'comment', 'new_trk': 'new_trk', 'new_seg': 'new_seg', 'display': 'display', 'color': 'color', 'altitude': 'altitude', 'depth': 'depth', 'temp': 'temp', 'time': 'time', 'model': 'model', 'filename': 'filename', 'ltime': 'ltime', 'desc': 'desc', 'link': 'link', });
lyr_caminos_internos_3.set('fieldAliases', {'id': 'id', 'long(m)': 'long(m)', 'Referencia': 'Referencia', 'referenc_1': 'referenc_1', });
lyr_puntos_relevamient_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'type': 'type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'y_proj': 'y_proj', 'x_proj': 'x_proj', 'display': 'display', 'symbol': 'symbol', 'dist': 'dist', 'proximity': 'proximity', 'color': 'color', 'altitude': 'altitude', 'depth': 'depth', 'temp': 'temp', 'time': 'time', 'wpt_class': 'wpt_class', 'sub_class': 'sub_class', 'attrib': 'attrib', 'link': 'link', 'state': 'state', 'country': 'country', 'city': 'city', 'address': 'address', 'zip': 'zip', 'facility': 'facility', 'crossroad': 'crossroad', 'ete': 'ete', 'dtype': 'dtype', 'model': 'model', 'filename': 'filename', 'ltime': 'ltime', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'desc': 'desc', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'dir': 'dir', 'Tipo': 'Tipo', 'AguaSiNo': 'AguaSiNo', 'Referencia_tranquera': 'Referencia_tranquera', 'Referencia': 'Referencia', 'tipo_fuente': 'tipo_fuente', 'capacidad_l': 'capacidad_l', 'profundidad': 'profundidad', 'disponibilidad': 'disponibilidad', 'accesibilidad': 'accesibilidad', 'helicoptero': 'helicoptero', 'propietario': 'propietario', 'contacto': 'contacto', 'senal_tel': 'senal_tel', 'telefono': 'telefono', });
lyr_idecorred_vial_provincial_5.set('fieldAliases', {'nombre': 'nombre', 'codigo': 'codigo', 'tipo': 'tipo', 'regional': 'regional', 'nombre_consorcio': 'nombre_consorcio', 'nro_consorcio': 'nro_consorcio', 'estado': 'estado', 'red': 'red', });
lyr_idecorcursos_agua_6.set('fieldAliases', {'nombre': 'nombre', });
lyr_Puestos_y_Parcelas_1.set('fieldImages', {'Nombre': 'TextEdit', 'Superficie': 'TextEdit', 'Perímetro': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_track_relevamiento_mp_0409_2.set('fieldImages', {'type': '', 'tident': '', 'ident': '', 'Latitude': '', 'Longitude': '', 'y_proj': '', 'x_proj': '', 'comment': '', 'new_trk': '', 'new_seg': '', 'display': '', 'color': '', 'altitude': '', 'depth': '', 'temp': '', 'time': '', 'model': '', 'filename': '', 'ltime': '', 'desc': '', 'link': '', });
lyr_caminos_internos_3.set('fieldImages', {'id': 'TextEdit', 'long(m)': 'TextEdit', 'Referencia': 'TextEdit', 'referenc_1': 'TextEdit', });
lyr_puntos_relevamient_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'y_proj': 'TextEdit', 'x_proj': 'TextEdit', 'display': 'TextEdit', 'symbol': 'TextEdit', 'dist': 'TextEdit', 'proximity': 'TextEdit', 'color': 'TextEdit', 'altitude': 'TextEdit', 'depth': 'TextEdit', 'temp': 'TextEdit', 'time': 'TextEdit', 'wpt_class': 'TextEdit', 'sub_class': 'TextEdit', 'attrib': 'TextEdit', 'link': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'zip': 'TextEdit', 'facility': 'TextEdit', 'crossroad': 'TextEdit', 'ete': 'TextEdit', 'dtype': 'TextEdit', 'model': 'TextEdit', 'filename': 'TextEdit', 'ltime': 'TextEdit', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'desc': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'Range', 'dgpsid': 'Range', 'dir': 'TextEdit', 'Tipo': 'TextEdit', 'AguaSiNo': 'TextEdit', 'Referencia_tranquera': 'Range', 'Referencia': 'TextEdit', 'tipo_fuente': 'TextEdit', 'capacidad_l': 'Range', 'profundidad': 'TextEdit', 'disponibilidad': 'TextEdit', 'accesibilidad': 'TextEdit', 'helicoptero': 'TextEdit', 'propietario': 'TextEdit', 'contacto': 'TextEdit', 'senal_tel': 'TextEdit', 'telefono': 'TextEdit', });
lyr_idecorred_vial_provincial_5.set('fieldImages', {'nombre': 'TextEdit', 'codigo': 'TextEdit', 'tipo': 'TextEdit', 'regional': 'Range', 'nombre_consorcio': 'TextEdit', 'nro_consorcio': 'TextEdit', 'estado': 'TextEdit', 'red': 'TextEdit', });
lyr_idecorcursos_agua_6.set('fieldImages', {'nombre': 'TextEdit', });
lyr_Puestos_y_Parcelas_1.set('fieldLabels', {'Nombre': 'no label', 'Superficie': 'no label', 'Perímetro': 'no label', 'Tipo': 'no label', });
lyr_track_relevamiento_mp_0409_2.set('fieldLabels', {'type': 'no label', 'tident': 'no label', 'ident': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'y_proj': 'no label', 'x_proj': 'no label', 'comment': 'no label', 'new_trk': 'no label', 'new_seg': 'no label', 'display': 'no label', 'color': 'no label', 'altitude': 'no label', 'depth': 'no label', 'temp': 'no label', 'time': 'no label', 'model': 'no label', 'filename': 'no label', 'ltime': 'no label', 'desc': 'no label', 'link': 'no label', });
lyr_caminos_internos_3.set('fieldLabels', {'id': 'no label', 'long(m)': 'no label', 'Referencia': 'no label', 'referenc_1': 'no label', });
lyr_puntos_relevamient_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'type': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'y_proj': 'no label', 'x_proj': 'no label', 'display': 'no label', 'symbol': 'no label', 'dist': 'no label', 'proximity': 'no label', 'color': 'no label', 'altitude': 'no label', 'depth': 'no label', 'temp': 'no label', 'time': 'no label', 'wpt_class': 'no label', 'sub_class': 'no label', 'attrib': 'no label', 'link': 'no label', 'state': 'no label', 'country': 'no label', 'city': 'no label', 'address': 'no label', 'zip': 'no label', 'facility': 'no label', 'crossroad': 'no label', 'ete': 'no label', 'dtype': 'no label', 'model': 'no label', 'filename': 'no label', 'ltime': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'desc': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', 'dir': 'no label', 'Tipo': 'no label', 'AguaSiNo': 'no label', 'Referencia_tranquera': 'no label', 'Referencia': 'no label', 'tipo_fuente': 'no label', 'capacidad_l': 'no label', 'profundidad': 'no label', 'disponibilidad': 'no label', 'accesibilidad': 'no label', 'helicoptero': 'no label', 'propietario': 'no label', 'contacto': 'no label', 'senal_tel': 'no label', 'telefono': 'no label', });
lyr_idecorred_vial_provincial_5.set('fieldLabels', {'nombre': 'no label', 'codigo': 'no label', 'tipo': 'no label', 'regional': 'no label', 'nombre_consorcio': 'no label', 'nro_consorcio': 'no label', 'estado': 'no label', 'red': 'no label', });
lyr_idecorcursos_agua_6.set('fieldLabels', {'nombre': 'no label', });
lyr_idecorcursos_agua_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});