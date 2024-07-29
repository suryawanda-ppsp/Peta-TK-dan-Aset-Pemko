var wms_layers = [];


        var lyr_Sateliteimagery_0 = new ol.layer.Tile({
            'title': 'Sateliteimagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GabunganAset1_1 = new ol.format.GeoJSON();
var features_GabunganAset1_1 = format_GabunganAset1_1.readFeatures(json_GabunganAset1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GabunganAset1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GabunganAset1_1.addFeatures(features_GabunganAset1_1);
var lyr_GabunganAset1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GabunganAset1_1, 
                style: style_GabunganAset1_1,
                popuplayertitle: "Gabungan Aset 1",
                interactive: true,
    title: 'Gabungan Aset 1<br />\
    <img src="styles/legend/GabunganAset1_1_0.png" /> Aset Pemko Padang<br />\
    <img src="styles/legend/GabunganAset1_1_1.png" /> Tanah Kosong<br />\
    <img src="styles/legend/GabunganAset1_1_2.png" /> <br />'
        });

lyr_Sateliteimagery_0.setVisible(true);lyr_GabunganAset1_1.setVisible(true);
var layersList = [lyr_Sateliteimagery_0,lyr_GabunganAset1_1];
lyr_GabunganAset1_1.set('fieldAliases', {'Kode_Sert': 'Kode_Sert', 'Sertpkt': 'Sertpkt', 'No_sert': 'No_sert', 'GS_SU': 'GS_SU', 'Luas': 'Luas', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Peruntukan': 'Peruntukan', 'OPD_Pgn': 'OPD_Pgn', 'Ket': 'Ket', 'Dok_Sert': 'Dok_Sert', 'Sertifikat': 'Sertifikat', 'Tabel_Desk': 'Tabel_Desk', 'Lokasi': 'Lokasi', 'Ket_Warna': 'Ket_Warna', });
lyr_GabunganAset1_1.set('fieldImages', {'Kode_Sert': 'TextEdit', 'Sertpkt': 'TextEdit', 'No_sert': 'TextEdit', 'GS_SU': 'TextEdit', 'Luas': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Peruntukan': 'TextEdit', 'OPD_Pgn': 'TextEdit', 'Ket': 'TextEdit', 'Dok_Sert': 'TextEdit', 'Sertifikat': 'TextEdit', 'Tabel_Desk': 'TextEdit', 'Lokasi': 'TextEdit', 'Ket_Warna': 'TextEdit', });
lyr_GabunganAset1_1.set('fieldLabels', {'Kode_Sert': 'inline label - always visible', 'Sertpkt': 'inline label - always visible', 'No_sert': 'inline label - always visible', 'GS_SU': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Peruntukan': 'inline label - always visible', 'OPD_Pgn': 'inline label - always visible', 'Ket': 'inline label - always visible', 'Dok_Sert': 'inline label - always visible', 'Sertifikat': 'inline label - always visible', 'Tabel_Desk': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Ket_Warna': 'hidden field', });
lyr_GabunganAset1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});