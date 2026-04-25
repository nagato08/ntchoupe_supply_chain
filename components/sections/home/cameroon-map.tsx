"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

// Données géographiques: TopoJSON du monde au 1:110m, fourni par Natural Earth
// (domaine public CC0) via le package npm world-atlas. Copié dans public/data/
// pour servir le fichier sans dépendre d'un CDN externe.
const TOPO_URL = "/data/countries-110m.json";

// ID ISO 3166-1 numerique du Cameroun dans le TopoJSON Natural Earth.
const CAMEROON_ID = "120";

// Coordonnées GPS des villes au format [longitude, latitude] (convention
// react-simple-maps + GeoJSON).
const HUB: { name: string; coords: [number, number] } = {
  name: "Douala",
  coords: [9.7679, 4.0511],
};

const CITIES: { name: string; coords: [number, number] }[] = [
  { name: "Yaoundé", coords: [11.5021, 3.848] },
  { name: "Garoua", coords: [13.3914, 9.3265] },
  { name: "Bafoussam", coords: [10.4178, 5.4781] },
  { name: "Kribi", coords: [9.9072, 2.9404] },
];

// Projection Mercator centrée sur le Cameroun. Scale calibré pour cadrer
// le pays + un léger débord sur les voisins (effet "carte régionale").
const PROJECTION_CONFIG = {
  scale: 2200,
  center: [12.5, 6.5] as [number, number],
};

export function CameroonMap() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={PROJECTION_CONFIG}
      width={400}
      height={500}
      style={{ width: "100%", height: "auto", maxHeight: "24rem" }}
      aria-label="Carte du Cameroun avec les corridors logistiques principaux"
    >
      {/* Pays — Cameroun coloré en bleu marine clair, voisins en gris discret. */}
      <Geographies geography={TOPO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isCameroon = geo.id === CAMEROON_ID;
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isCameroon ? "#0B2A5B" : "#e4e8ef"}
                fillOpacity={isCameroon ? 0.12 : 0.5}
                stroke={isCameroon ? "#0B2A5B" : "#ffffff"}
                strokeWidth={isCameroon ? 1.5 : 0.5}
                strokeOpacity={isCameroon ? 0.5 : 1}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>

      {/* Corridors — lignes orange pointillées partant de Douala (hub). */}
      {CITIES.map((city) => (
        <Line
          key={`line-${city.name}`}
          from={HUB.coords}
          to={city.coords}
          stroke="#F26B21"
          strokeWidth={2}
          strokeDasharray="4 4"
          strokeLinecap="round"
          opacity={0.75}
        />
      ))}

      {/* Villes secondaires: cercle bleu marine + label. */}
      {CITIES.map((city) => (
        <Marker key={city.name} coordinates={city.coords}>
          <circle
            r={5}
            fill="#0B2A5B"
            stroke="#ffffff"
            strokeWidth={2}
          />
          <text
            textAnchor="middle"
            y={-12}
            style={{
              fontSize: "10px",
              fontWeight: 600,
              fill: "#1a1a1a",
              pointerEvents: "none",
            }}
          >
            {city.name}
          </text>
        </Marker>
      ))}

      {/* Hub Douala: halo orange concentrique + cercle plein + label en gras. */}
      <Marker coordinates={HUB.coords}>
        <circle r={16} fill="#F26B21" opacity={0.12} />
        <circle r={10} fill="#F26B21" opacity={0.22} />
        <circle r={7} fill="#F26B21" stroke="#ffffff" strokeWidth={2} />
        <circle r={2.5} fill="#ffffff" />
        <text
          textAnchor="end"
          x={-12}
          y={4}
          style={{
            fontSize: "11px",
            fontWeight: 800,
            fill: "#F26B21",
            pointerEvents: "none",
          }}
        >
          DOUALA
        </text>
        <text
          textAnchor="end"
          x={-12}
          y={16}
          style={{
            fontSize: "8px",
            fontWeight: 600,
            fill: "#5b6472",
            letterSpacing: "0.1em",
            pointerEvents: "none",
          }}
        >
          PORT • HUB
        </text>
      </Marker>
    </ComposableMap>
  );
}
