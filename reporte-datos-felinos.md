# Reporte de Datos Faltantes o Erróneos — Felinos de Argentina

Comparación entre los archivos de `src/content/felinos/` y la fuente de referencia:
**Categorización 2019 de los mamíferos de Argentina — SAyDS–SAREM** (`cma.sarem.org.ar`)

---

## Resumen ejecutivo

| Campo                      | Estado general                     |
| -------------------------- | ---------------------------------- |
| `conservation_status_ar`   | ✅ Correcto en todas las especies  |
| `conservation_status_iucn` | ✅ Correcto en todas las especies  |
| `scientific_name`          | ⚠️ Error en 1 especie              |
| `stats.weight`             | ❌ Errores en 6 especies           |
| `stats.size`               | ⚠️ Inconsistencias en 2 especies   |
| `stats.generationTime`     | ❌ Faltante en 9 de 11 especies    |
| `stats.habits`             | ❌ Faltante en 8 de 11 especies    |
| `stats.activity`           | ❌ Faltante en 8 de 11 especies    |
| Contenido de secciones     | ❌ Errores factuales en 5 especies |

---

## 1. Yaguarundí — `yaguarundi.md`

**Especie:** _Herpailurus yagouaroundi_ · ID SAREM: 141

### Campos del frontmatter

| Campo                  | Valor actual | Valor SAREM   | Estado                              |
| ---------------------- | ------------ | ------------- | ----------------------------------- |
| `stats.weight`         | `"3–9 kg"`   | 3.000–7.600 g | ❌ Máximo erróneo (7,6 kg, no 9 kg) |
| `stats.habits`         | vacío        | Terrestre     | ❌ Faltante                         |
| `stats.activity`       | vacío        | Diurno        | ❌ Faltante                         |
| `stats.generationTime` | vacío        | 6,16 años     | ❌ Faltante                         |

### Contenido de secciones

- **Sección `behavior`:** el texto repite "3 a 9 kg", propagando el error de peso.

---

## 2. Gato del Pajonal — `gato-del-pajonal.md`

**Especie:** _Leopardus colocolo_ · ID SAREM: 142

### Campos del frontmatter

| Campo                  | Valor actual           | Valor SAREM                         | Estado                                                                    |
| ---------------------- | ---------------------- | ----------------------------------- | ------------------------------------------------------------------------- |
| `scientific_name`      | `"Leopardus colocola"` | _Leopardus colocolo_ (Molina, 1782) | ❌ Nombre científico incorrecto ("colocola" → "colocolo")                 |
| `stats.habits`         | vacío                  | Terrestre                           | ❌ Faltante                                                               |
| `stats.generationTime` | vacío                  | 7,00 años                           | ❌ Faltante (el campo está presente pero el valor es correcto; verificar) |

> **Nota:** `activity: Nocturno` es parcialmente correcto; SAREM indica nocturno **y crepuscular**.

### Contenido de secciones

- **Sección `appearance`:** indica peso "2 a 4 kg" en el texto, mientras que el frontmatter dice "3–5 kg" y SAREM confirma 3.000–5.000 g. El texto contradice tanto el frontmatter correcto como la fuente. ❌

---

## 3. Gato Montés — `gato-montes.md`

**Especie:** _Leopardus geoffroyi_ · ID SAREM: 143

### Campos del frontmatter

| Campo                  | Valor actual | Valor SAREM                                | Estado                            |
| ---------------------- | ------------ | ------------------------------------------ | --------------------------------- |
| `stats.weight`         | `"2–6 kg"`   | Hembra 2.500–4.900 g / Macho 3.500–8.000 g | ❌ Máximo erróneo (8 kg, no 6 kg) |
| `stats.habits`         | vacío        | Terrestre                                  | ❌ Faltante                       |
| `stats.activity`       | vacío        | Catemeral                                  | ❌ Faltante                       |
| `stats.generationTime` | vacío        | 7,70 años                                  | ❌ Faltante                       |

### Contenido de secciones

- **Sección `behavior`:** indica gestación de "74 a 76 días"; SAREM indica 66–78 días. ❌
- **Sección `behavior`:** indica área de acción de hembras de "3,5 km²"; SAREM indica rangos de 0,2–5,5 km² según zona, sin dar ese valor preciso como representativo. Dato poco preciso / sin fuente clara.

---

## 4. Guiña — `guina.md`

**Especie:** _Leopardus guigna_ · ID SAREM: 144

### Campos del frontmatter

| Campo                  | Valor actual | Valor SAREM                                                  | Estado                                        |
| ---------------------- | ------------ | ------------------------------------------------------------ | --------------------------------------------- |
| `stats.weight`         | `"2–3 kg"`   | Hembra 1.600–1.800 g / Macho 1.900–2.500 g / General 2.000 g | ❌ Rango erróneo (debe ser aprox. 1,6–2,5 kg) |
| `stats.habits`         | vacío        | Terrestre                                                    | ❌ Faltante                                   |
| `stats.activity`       | vacío        | Nocturno / Crepuscular                                       | ❌ Faltante                                   |
| `stats.generationTime` | vacío        | 6,00 años                                                    | ❌ Faltante                                   |

### Contenido de secciones

- **Sección `appearance`:** repite "2 a 3 kg", propagando el error de peso. ❌
- **Sección `distribution`:** menciona posible presencia en "Santa Cruz"; SAREM solo confirma Chubut, Neuquén y Río Negro. Santa Cruz no figura. ⚠️

---

## 5. Tirica — `tirica.md`

**Especie:** _Leopardus guttulus_ · ID SAREM: 145

### Campos del frontmatter

| Campo                  | Valor actual | Valor SAREM   | Estado                                           |
| ---------------------- | ------------ | ------------- | ------------------------------------------------ |
| `stats.weight`         | `"1.5–3 kg"` | 1.750–3.500 g | ❌ Rango erróneo (mínimo 1,75 kg; máximo 3,5 kg) |
| `stats.habits`         | vacío        | Terrestre     | ❌ Faltante                                      |
| `stats.activity`       | vacío        | Catemeral     | ❌ Faltante                                      |
| `stats.generationTime` | vacío        | 6,00 años     | ❌ Faltante                                      |

### Contenido de secciones

- **Sección `distribution`:** indica rango altitudinal "hasta los 4500 metros"; SAREM indica 0–2.000 msnm. ❌ Error grave.
- **Sección `distribution`:** indica distribución "Desde Costa Rica hasta el sur de Brasil y norte de Argentina". _L. guttulus_ está restringido al Bosque Atlántico del Sur (centro-sur de Brasil, este de Paraguay y Misiones). Costa Rica corresponde a _L. tigrinus_, no a _L. guttulus_. ❌ Error taxonómico importante.

---

## 6. Tigrina — `tigrina.md`

**Especie:** _Leopardus tigrinus_ · ID SAREM: 148

### Campos del frontmatter

| Campo                  | Valor actual | Valor SAREM            | Estado      |
| ---------------------- | ------------ | ---------------------- | ----------- |
| `stats.habits`         | vacío        | Terrestre              | ❌ Faltante |
| `stats.activity`       | vacío        | Nocturno / Crepuscular | ❌ Faltante |
| `stats.generationTime` | vacío        | 5,00 años              | ❌ Faltante |

> **Nota:** `stats.weight` de "1.5–3 kg" coincide con SAREM (1.500–3.000 g). ✅

---

## 7. Gato Andino — `gato-andino.md`

**Especie:** _Leopardus jacobita_ · ID SAREM: 146

### Campos del frontmatter

| Campo          | Valor actual | Valor SAREM                      | Estado                                                               |
| -------------- | ------------ | -------------------------------- | -------------------------------------------------------------------- |
| `stats.weight` | `"4–6 kg"`   | Hembra ~4.700 g / Macho ~5.800 g | ❌ Máximo erróneo (5,8 kg, no 6 kg — diferencia menor pero inexacta) |

> **Nota:** `generationTime: Desconocido` es correcto según SAREM ("no hay datos"). ✅

### Contenido de secciones

- **Sección `appearance`:** indica peso "4 a 8 kg" en el texto, lo cual es incorrecto. SAREM indica hembra ~4,7 kg y macho ~5,8 kg. Máximo 8 kg no está respaldado. ❌
- **Rutas de imágenes:** todas las imágenes referencian `leopardus-jacobitus` (con -us al final), lo cual parece ser un error tipográfico. El nombre correcto de la especie es _jacobita_ (no _jacobitus_, que es ortográficamente incorrecto según la propia ficha SAREM). ⚠️

---

## 8. Margay — `margay.md`

**Especie:** _Leopardus wiedii_ · ID SAREM: 149

### Campos del frontmatter

| Campo                  | Valor actual  | Valor SAREM                 | Estado                                                                                                  |
| ---------------------- | ------------- | --------------------------- | ------------------------------------------------------------------------------------------------------- |
| `stats.weight`         | `"2–5 kg"`    | 1.300–4.900 g               | ❌ Mínimo erróneo (1,3 kg, no 2 kg)                                                                     |
| `stats.size[0].body`   | `"90–120 cm"` | Sin especificar cuerpo solo | ⚠️ Parece ser longitud total (cuerpo+cola), inconsistente con el campo `body` del resto de las especies |
| `stats.habits`         | vacío         | Terrestre                   | ❌ Faltante                                                                                             |
| `stats.activity`       | vacío         | Nocturno / Crepuscular      | ❌ Faltante                                                                                             |
| `stats.generationTime` | vacío         | 6,00 años                   | ❌ Faltante                                                                                             |

> **Nota:** no hay campo `tail` en los stats, posiblemente porque la medida `body` está expresando la longitud total. Debería separarse.

---

## 9. Ocelote — `ocelote.md`

**Especie:** _Leopardus pardalis_ · ID SAREM: 147

### Campos del frontmatter

| Campo                  | Valor actual | Valor SAREM                                       | Estado                            |
| ---------------------- | ------------ | ------------------------------------------------- | --------------------------------- |
| `stats.weight`         | `"8–16 kg"`  | General 7–15 kg / Hembra 7–14 kg / Macho 10–16 kg | ❌ Mínimo erróneo (7 kg, no 8 kg) |
| `stats.habits`         | vacío        | Terrestre                                         | ❌ Faltante                       |
| `stats.activity`       | vacío        | Catemeral                                         | ❌ Faltante                       |
| `stats.generationTime` | vacío        | 8,25 años                                         | ❌ Faltante                       |

### Contenido de secciones

- **Sección `behavior`:** indica período de gestación de "70 días"; SAREM indica 70–85 días. El dato no está equivocado pero está incompleto (solo el mínimo). ⚠️
- **Sección `behavior`:** indica densidad de "13 a 20 individuos por cada 100 km²" en el PN Iguazú; SAREM indica rango de 4,96 a 17,6 ind/100 km². El valor 20 excede el máximo documentado por SAREM. ❌

---

## 10. Puma — `puma.md`

**Especie:** _Puma concolor_ · ID SAREM: 150

### Campos del frontmatter

| Campo                  | Valor actual                            | Valor SAREM                      | Estado                                                                                                                                  |
| ---------------------- | --------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `stats.weight`         | `"34–105 kg (excepcionalmente 120 kg)"` | Hembra 31–33 kg / Macho 40–80 kg | ❌ Rango erróneo: mínimo debería ser ~31 kg (hembra); máximo documentado para Argentina es 80 kg (datos Guerisoli), no 105 kg ni 120 kg |
| `stats.habits`         | vacío                                   | Terrestre                        | ❌ Faltante                                                                                                                             |
| `stats.activity`       | vacío                                   | Catemeral                        | ❌ Faltante                                                                                                                             |
| `stats.generationTime` | vacío                                   | 7,40 años                        | ❌ Faltante                                                                                                                             |

### Contenido de secciones

- **Sección `behavior`:** indica territorios de "56 y 375 km²"; SAREM cita datos de América del Sur de 24–211 km² (hembra/macho); los valores 56–375 corresponden a datos de América del Norte (Logan & Sweanor), que SAREM también cita pero como referencia norteamericana. El texto presenta datos extraregionales como representativos sin aclaración. ⚠️

---

## 11. Yaguareté — `yaguarete.md`

**Especie:** _Panthera onca_ · ID SAREM: 151

### Campos del frontmatter

| Campo                  | Valor actual                | Valor SAREM                                           | Estado                                                                                                       |
| ---------------------- | --------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `stats.weight`         | `"70–90 kg (hasta 135 kg)"` | General 50–100 kg / Hembra 50–80 kg / Macho 70–100 kg | ❌ Rango incompleto en mínimo (50 kg, no 70 kg); "hasta 135 kg" no está respaldado por SAREM (máximo 100 kg) |
| `stats.habits`         | vacío                       | Terrestre                                             | ❌ Faltante                                                                                                  |
| `stats.activity`       | vacío                       | Catemeral                                             | ❌ Faltante                                                                                                  |
| `stats.generationTime` | vacío                       | 6,80 años                                             | ❌ Faltante                                                                                                  |

### Contenido de secciones

- **Sección `distribution`:** indica "menos de 250 individuos: unos 120-150 en las yungas, alrededor de 20 en la zona chaqueña y 70-90 en la selva misionera". SAREM (2019) indica: 200–300 total; Selva Paranaense 53–81 en Argentina (71–107 con Brasil); Yungas 100–200; Chaco ≤20. Los números de Misiones (70–90 vs 53–81) y el total ("menos de 250" vs "200–300") son inconsistentes con la fuente. ❌

---

## Tabla resumen de campos faltantes (`habits`, `activity`, `generationTime`)

| Especie          | `habits`                | `activity`                           | `generationTime`        |
| ---------------- | ----------------------- | ------------------------------------ | ----------------------- |
| Yaguarundí       | ❌ Faltante (terrestre) | ❌ Faltante (diurno)                 | ❌ Faltante (6,16 años) |
| Gato del Pajonal | ✅ Terrestre            | ⚠️ Solo nocturno (falta crepuscular) | ✅ 7 años               |
| Gato Montés      | ❌ Faltante (terrestre) | ❌ Faltante (catemeral)              | ❌ Faltante (7,70 años) |
| Guiña            | ❌ Faltante (terrestre) | ❌ Faltante (nocturno/crepuscular)   | ❌ Faltante (6,00 años) |
| Tirica           | ❌ Faltante (terrestre) | ❌ Faltante (catemeral)              | ❌ Faltante (6,00 años) |
| Tigrina          | ❌ Faltante (terrestre) | ❌ Faltante (nocturno/crepuscular)   | ❌ Faltante (5,00 años) |
| Gato Andino      | ✅ Terrestre            | ✅ Todo el día                       | ✅ Desconocido          |
| Margay           | ❌ Faltante (terrestre) | ❌ Faltante (nocturno/crepuscular)   | ❌ Faltante (6,00 años) |
| Ocelote          | ❌ Faltante (terrestre) | ❌ Faltante (catemeral)              | ❌ Faltante (8,25 años) |
| Puma             | ❌ Faltante (terrestre) | ❌ Faltante (catemeral)              | ❌ Faltante (7,40 años) |
| Yaguareté        | ❌ Faltante (terrestre) | ❌ Faltante (catemeral)              | ❌ Faltante (6,80 años) |

---

## Tabla resumen de errores en `stats.weight`

| Especie     | Peso actual | Peso SAREM    | Error                                |
| ----------- | ----------- | ------------- | ------------------------------------ |
| Yaguarundí  | 3–9 kg      | 3,0–7,6 kg    | Máximo +1,4 kg                       |
| Gato Montés | 2–6 kg      | 2,5–8,0 kg    | Máximo –2 kg                         |
| Guiña       | 2–3 kg      | 1,6–2,5 kg    | Mínimo +0,4 kg; máximo +0,5 kg       |
| Tirica      | 1,5–3 kg    | 1,75–3,5 kg   | Mínimo –0,25 kg; máximo –0,5 kg      |
| Margay      | 2–5 kg      | 1,3–4,9 kg    | Mínimo +0,7 kg                       |
| Ocelote     | 8–16 kg     | 7–15 kg       | Mínimo +1 kg                         |
| Puma        | 34–105 kg   | 31–80 kg (AR) | Máximo +25 kg (dato norteamericano)  |
| Yaguareté   | 70–90 kg    | 50–100 kg     | Mínimo +20 kg; "135 kg" sin respaldo |

---

## Errores graves de contenido factual

| Especie          | Sección        | Error                                                                             |
| ---------------- | -------------- | --------------------------------------------------------------------------------- |
| Gato del Pajonal | `appearance`   | Peso "2 a 4 kg" contradice frontmatter (3–5 kg) y SAREM (3,0–5,0 kg)              |
| Tirica           | `distribution` | Rango altitudinal "4500 msnm" — SAREM indica 0–2.000 msnm                         |
| Tirica           | `distribution` | Distribución "desde Costa Rica" — corresponde a _L. tigrinus_, no a _L. guttulus_ |
| Gato Andino      | `appearance`   | Peso "4 a 8 kg" — SAREM: hembra 4,7 kg / macho 5,8 kg                             |
| Ocelote          | `behavior`     | Densidad "13 a 20 ind/100 km²" — SAREM máximo documentado: 17,6 ind/100 km²       |
| Yaguareté        | `distribution` | Números poblacionales de Misiones y total inconsistentes con SAREM 2019           |

---

## Error de nombre científico

| Especie                                  | Valor actual         | Valor correcto       |
| ---------------------------------------- | -------------------- | -------------------- |
| Gato del Pajonal (`gato-del-pajonal.md`) | `Leopardus colocola` | `Leopardus colocolo` |

---

## Error tipográfico en rutas de imágenes

El directorio de imágenes del gato andino usa el nombre `leopardus-jacobitus` (incorrecto ortográficamente según SAREM, que lo llama un "error ortográfico" en la nomenclatura histórica). El nombre correcto es `leopardus-jacobita`. Afecta las rutas del `hero.image`, `gallery` y `sections[appearance].images`.

---

_Fuente de referencia: SAyDS–SAREM (2019). Categorización de los mamíferos de Argentina según su riesgo de extinción. cma.sarem.org.ar_
