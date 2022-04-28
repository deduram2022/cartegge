var wms_layers = [];


        var lyr_hybride_0 = new ol.layer.Tile({
            'title': 'hybride',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_secteur_hydraulique_1 = new ol.format.GeoJSON();
var features_secteur_hydraulique_1 = format_secteur_hydraulique_1.readFeatures(json_secteur_hydraulique_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secteur_hydraulique_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secteur_hydraulique_1.addFeatures(features_secteur_hydraulique_1);
var lyr_secteur_hydraulique_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_secteur_hydraulique_1, 
                style: style_secteur_hydraulique_1,
                interactive: true,
    title: 'secteur_hydraulique<br />\
    <img src="styles/legend/secteur_hydraulique_1_0.png" /> amenage<br />\
    <img src="styles/legend/secteur_hydraulique_1_1.png" /> non amenage<br />\
    <img src="styles/legend/secteur_hydraulique_1_2.png" /> <br />'
        });
var format_quartier_hydraulique_2_2 = new ol.format.GeoJSON();
var features_quartier_hydraulique_2_2 = format_quartier_hydraulique_2_2.readFeatures(json_quartier_hydraulique_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quartier_hydraulique_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quartier_hydraulique_2_2.addFeatures(features_quartier_hydraulique_2_2);
var lyr_quartier_hydraulique_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_quartier_hydraulique_2_2, 
                style: style_quartier_hydraulique_2_2,
                interactive: true,
    title: 'quartier_hydraulique_2<br />\
    <img src="styles/legend/quartier_hydraulique_2_2_0.png" /> a amenage<br />\
    <img src="styles/legend/quartier_hydraulique_2_2_1.png" /> amenage<br />\
    <img src="styles/legend/quartier_hydraulique_2_2_2.png" /> Lieu sacrÃ©<br />\
    <img src="styles/legend/quartier_hydraulique_2_2_3.png" /> non_amenage<br />\
    <img src="styles/legend/quartier_hydraulique_2_2_4.png" /> <br />'
        });
var format_ouvrage_gge_3 = new ol.format.GeoJSON();
var features_ouvrage_gge_3 = format_ouvrage_gge_3.readFeatures(json_ouvrage_gge_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ouvrage_gge_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ouvrage_gge_3.addFeatures(features_ouvrage_gge_3);cluster_ouvrage_gge_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ouvrage_gge_3
});
var lyr_ouvrage_gge_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ouvrage_gge_3, 
                style: style_ouvrage_gge_3,
                interactive: true,
                title: '<img src="styles/legend/ouvrage_gge_3.png" /> ouvrage_gge'
            });
var format_digue_ceinture_4 = new ol.format.GeoJSON();
var features_digue_ceinture_4 = format_digue_ceinture_4.readFeatures(json_digue_ceinture_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digue_ceinture_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_digue_ceinture_4.addFeatures(features_digue_ceinture_4);
var lyr_digue_ceinture_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_digue_ceinture_4, 
                style: style_digue_ceinture_4,
                interactive: true,
                title: '<img src="styles/legend/digue_ceinture_4.png" /> digue_ceinture'
            });
var format_ouvrage_gep_5 = new ol.format.GeoJSON();
var features_ouvrage_gep_5 = format_ouvrage_gep_5.readFeatures(json_ouvrage_gep_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ouvrage_gep_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ouvrage_gep_5.addFeatures(features_ouvrage_gep_5);cluster_ouvrage_gep_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ouvrage_gep_5
});
var lyr_ouvrage_gep_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ouvrage_gep_5, 
                style: style_ouvrage_gep_5,
                interactive: true,
                title: '<img src="styles/legend/ouvrage_gep_5.png" /> ouvrage_gep'
            });

lyr_hybride_0.setVisible(true);lyr_secteur_hydraulique_1.setVisible(true);lyr_quartier_hydraulique_2_2.setVisible(true);lyr_ouvrage_gge_3.setVisible(true);lyr_digue_ceinture_4.setVisible(true);lyr_ouvrage_gep_5.setVisible(true);
var layersList = [lyr_hybride_0,lyr_secteur_hydraulique_1,lyr_quartier_hydraulique_2_2,lyr_ouvrage_gge_3,lyr_digue_ceinture_4,lyr_ouvrage_gep_5];
lyr_secteur_hydraulique_1.set('fieldAliases', {'gid': 'gid', 'nom': 'nom', 'superficie': 'superficie', 'etat': 'etat', 'nbr_ouv_p': 'nbr_ouv_p', 'nbr_ouv_s': 'nbr_ouv_s', 'annee_amg': 'annee_amg', 'perimetre': 'perimetre', 'gid_perimetre': 'gid_perimetre', });
lyr_quartier_hydraulique_2_2.set('fieldAliases', {'gid': 'gid', 'superficie': 'superficie', 'annee': 'annee', 'libelle': 'libelle', 'nbr_pipe': 'nbr_pipe', 'perimetre': 'perimetre', 'gid_secteur': 'gid_secteur', 'canal_pr_1': 'canal_pr_1', 'digue_cein': 'digue_cein', 'canal_seco': 'canal_seco', 'position': 'position', 'position_2': 'position_2', });
lyr_ouvrage_gge_3.set('fieldAliases', {'gid': 'gid', 'diametre': 'diametre', 'nombre': 'nombre', 'date': 'date', 'type': 'type', 'nom': 'nom', 'perimetre': 'perimetre', 'gid_secteur': 'gid_secteur', 'libelle': 'libelle', 'nom_secteur': 'nom_secteur', 'Estado barragem': 'Estado barragem', ' descrever os critérios': ' descrever os critérios', 'Cm entre lamina agua et tubos de regulação de excesso ': 'Cm entre lamina agua et tubos de regulação de excesso ', 'entre lamina agua et tubos de regulação de excesso ': 'entre lamina agua et tubos de regulação de excesso ', 'Obervacao': 'Obervacao', });
lyr_digue_ceinture_4.set('fieldAliases', {'gid': 'gid', 'labelle': 'labelle', 'longueur': 'longueur', 'annee': 'annee', 'gid_perimetre': 'gid_perimetre', });
lyr_ouvrage_gep_5.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'gid_perimetre': 'gid_perimetre', });
lyr_secteur_hydraulique_1.set('fieldImages', {'gid': 'TextEdit', 'nom': 'TextEdit', 'superficie': 'TextEdit', 'etat': 'TextEdit', 'nbr_ouv_p': 'Range', 'nbr_ouv_s': 'Range', 'annee_amg': 'TextEdit', 'perimetre': 'TextEdit', 'gid_perimetre': 'Range', });
lyr_quartier_hydraulique_2_2.set('fieldImages', {'gid': 'TextEdit', 'superficie': 'TextEdit', 'annee': 'TextEdit', 'libelle': 'TextEdit', 'nbr_pipe': 'TextEdit', 'perimetre': 'TextEdit', 'gid_secteur': 'TextEdit', 'canal_pr_1': 'TextEdit', 'digue_cein': 'TextEdit', 'canal_seco': 'TextEdit', 'position': 'TextEdit', 'position_2': 'TextEdit', });
lyr_ouvrage_gge_3.set('fieldImages', {'gid': '', 'diametre': '', 'nombre': '', 'date': '', 'type': '', 'nom': '', 'perimetre': '', 'gid_secteur': '', 'libelle': '', 'nom_secteur': '', 'Estado barragem': '', ' descrever os critérios': '', 'Cm entre lamina agua et tubos de regulação de excesso ': '', 'entre lamina agua et tubos de regulação de excesso ': '', 'Obervacao': '', });
lyr_digue_ceinture_4.set('fieldImages', {'gid': '', 'labelle': '', 'longueur': '', 'annee': '', 'gid_perimetre': '', });
lyr_ouvrage_gep_5.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'Range', 'gid_perimetre': 'Range', });
lyr_secteur_hydraulique_1.set('fieldLabels', {'gid': 'no label', 'nom': 'no label', 'superficie': 'no label', 'etat': 'no label', 'nbr_ouv_p': 'no label', 'nbr_ouv_s': 'no label', 'annee_amg': 'no label', 'perimetre': 'no label', 'gid_perimetre': 'no label', });
lyr_quartier_hydraulique_2_2.set('fieldLabels', {'gid': 'no label', 'superficie': 'no label', 'annee': 'no label', 'libelle': 'no label', 'nbr_pipe': 'no label', 'perimetre': 'no label', 'gid_secteur': 'no label', 'canal_pr_1': 'no label', 'digue_cein': 'no label', 'canal_seco': 'no label', 'position': 'no label', 'position_2': 'no label', });
lyr_ouvrage_gge_3.set('fieldLabels', {'gid': 'no label', 'diametre': 'no label', 'nombre': 'no label', 'date': 'no label', 'type': 'no label', 'nom': 'no label', 'perimetre': 'no label', 'gid_secteur': 'no label', 'libelle': 'no label', 'nom_secteur': 'no label', 'Estado barragem': 'no label', ' descrever os critérios': 'no label', 'Cm entre lamina agua et tubos de regulação de excesso ': 'no label', 'entre lamina agua et tubos de regulação de excesso ': 'no label', 'Obervacao': 'no label', });
lyr_digue_ceinture_4.set('fieldLabels', {'gid': 'no label', 'labelle': 'no label', 'longueur': 'no label', 'annee': 'no label', 'gid_perimetre': 'no label', });
lyr_ouvrage_gep_5.set('fieldLabels', {'gid': 'no label', 'nombre': 'no label', 'gid_perimetre': 'no label', });
lyr_ouvrage_gep_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});