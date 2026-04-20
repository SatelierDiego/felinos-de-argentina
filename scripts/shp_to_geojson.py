"""
Convierte todos los shapefiles en /maps a GeoJSON en /public/maps.
Nombre de salida: nombre-científico-en-kebab-case.geojson
"""

import json
import os
import shapefile  # pyshp

MAPS_DIR = os.path.join(os.path.dirname(__file__), "..", "maps")
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "maps")

# Mapeo carpeta → nombre de archivo de salida
SPECIES = {
    "herpailurus-yagouaroundi": "herpailurus-yagouaroundi",
    "leopardus-jacobita":       "leopardus-jacobita",
    "Leopardus colocolo":       "leopardus-colocolo",
    "Leopardus geoffroyi":      "leopardus-geoffroyi",
    "Leopardus guigna":         "leopardus-guigna",
    "Leopardus guttulus":       "leopardus-guttulus",
    "Leopardus pardalis":       "leopardus-pardalis",
    "Leopardus tigrinus":       "leopardus-tigrinus",
    "Leopardus wiedii":         "leopardus-wiedii",
    "Panthera onca":            "panthera-onca",
    "Puma concolor":            "puma-concolor",
}

os.makedirs(OUT_DIR, exist_ok=True)


def shp_to_geojson(shp_path: str) -> dict:
    sf = shapefile.Reader(shp_path, encoding="latin-1")
    fields = [f[0] for f in sf.fields[1:]]  # skip DeletionFlag
    features = []
    for sr in sf.shapeRecords():
        if sr.shape.shapeType == 0:  # NULL shape — skip
            continue
        geom = sr.shape.__geo_interface__
        props = dict(zip(fields, sr.record))
        # Asegurar que los valores sean JSON-serializables
        props = {k: (v if not isinstance(v, bytes) else v.decode("latin-1")) for k, v in props.items()}
        features.append({
            "type": "Feature",
            "geometry": geom,
            "properties": props,
        })
    return {"type": "FeatureCollection", "features": features}


for folder, out_name in SPECIES.items():
    folder_path = os.path.join(MAPS_DIR, folder)
    shp_files = [f for f in os.listdir(folder_path) if f.endswith(".shp")]
    if not shp_files:
        print(f"[SKIP] No .shp found in {folder}")
        continue

    shp_path = os.path.join(folder_path, shp_files[0])
    out_path = os.path.join(OUT_DIR, f"{out_name}.geojson")

    # Si ya existe y no es de las recién creadas (los dos previos), sobreescribir igual
    try:
        geojson = shp_to_geojson(shp_path)
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(geojson, f, ensure_ascii=False, separators=(",", ":"))
        feat_count = len(geojson["features"])
        print(f"[OK] {out_name}.geojson  ({feat_count} features)")
    except Exception as e:
        print(f"[ERR] {folder}: {e}")
