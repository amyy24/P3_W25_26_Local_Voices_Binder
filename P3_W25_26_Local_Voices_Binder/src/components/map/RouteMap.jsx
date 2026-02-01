import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import LocalPin from '../../assets/LocalPin.png';
import MePin from '../../assets/MePin.png';
import PlacePin from '../../assets/PlacePin.png';
import ReisenderPin from '../../assets/ReisenderPin.png';
import { useEffect } from 'react';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { renderToStaticMarkup } from 'react-dom/server';

// Marker Icons
const greenIcon = new L.Icon({ iconUrl: LocalPin, iconSize: [57,70], iconAnchor:[20,40] });
const blueIcon = new L.Icon({ iconUrl: MePin, iconSize: [57,90], iconAnchor:[20,40] });
const blackIcon = new L.Icon({ iconUrl: PlacePin, iconSize: [57,70], iconAnchor:[20,40] });
const orangeIcon = new L.Icon({ iconUrl: ReisenderPin, iconSize: [57,70], iconAnchor:[20,40] });

function RouteMap() {
  const mePos = [51.5072579, -0.1309334]; // MePin
  const localPos = [51.5101335, -0.1312039]; // LocalPin

  return (
    <MapContainer center={mePos} zoom={16} style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Marker */}
      <Marker position={mePos} icon={blueIcon} />
      <Marker position={localPos} icon={greenIcon} />

      {/* MUI Icon neben MePin */}
      <WalkIconMarker position={[51.5074200, -0.1306000]} />

      {/* Arrow Icon am Ziel */}
      <ArrowIconMarker position={[51.5102735, -0.1313500]}  />

      {/* Route */}
      <Routing start={mePos} end={localPos} />
    </MapContainer>
  );
}

// Walk Icon Marker (Startpunkt)
function WalkIconMarker({ position }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const iconHtml = renderToStaticMarkup(
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
        transform: 'translate(-17px, -17px)',
      }}>
        <DirectionsWalkIcon style={{ fontSize: 68, color: '#F000000' }} />
      </div>
    );

    const muiDivIcon = L.divIcon({
      html: iconHtml,
      className: '',
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });

    const marker = L.marker(position, { icon: muiDivIcon }).addTo(map);

    return () => map.removeLayer(marker);
  }, [map, position]);

  return null;
}

// Arrow Icon Marker (Zielpunkt)
function ArrowIconMarker({ position }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const iconHtml = renderToStaticMarkup(
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
        transform: 'translate(-11px, -9px)rotate(-26deg)',
      }}>
        <ArrowDownwardIcon style={{ fontSize: 65, color: '#F000000' }} />
      </div>
    );

    const muiDivIcon = L.divIcon({
      html: iconHtml,
      className: '',
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });

    const marker = L.marker(position, { icon: muiDivIcon }).addTo(map);

    return () => map.removeLayer(marker);
  }, [map, position]);

  return null;
}

// Routing Component bleibt unverändert
function Routing({ start, end }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const removeOld = () => {
      if (map._routeLayer) {
        map.removeLayer(map._routeLayer);
        map._routeLayer = null;
      }
    };
    removeOld();

    const url = `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`;
    let aborted = false;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (aborted) return;
        if (!data.routes || data.routes.length === 0) return;

        const geometry = data.routes[0].geometry;
        const layer = L.geoJSON(geometry, {
          style: { color: 'black', weight: 4 },
        }).addTo(map);

        map._routeLayer = layer;

        const bounds = layer.getBounds();
        if (bounds && !bounds.isEmpty()) {
          map.fitBounds(bounds.pad(0.2));
        }
      })
      .catch(err => console.error(err));

    return () => {
      aborted = true;
      removeOld();
    };
  }, [map, start, end]);

  return null;
}

export default RouteMap;
