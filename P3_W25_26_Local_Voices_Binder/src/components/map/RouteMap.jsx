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
import LocalPin2 from '../../assets/LocalPin2.png';

// Marker Icons
const greenIcon = new L.Icon({ iconUrl: LocalPin, iconSize: [57,70], iconAnchor:[20,40] });
const greenIcon2 = new L.Icon({ iconUrl: LocalPin2, iconSize: [57,70], iconAnchor:[20,40] });
const blueIcon = new L.Icon({ iconUrl: MePin, iconSize: [57,90], iconAnchor:[20,40] });
const blackIcon = new L.Icon({ iconUrl: PlacePin, iconSize: [57,70], iconAnchor:[20,40] });
const orangeIcon = new L.Icon({ iconUrl: ReisenderPin, iconSize: [57,70], iconAnchor:[20,40] });

function RouteMap({ routes = [{ start: [51.5072579, -0.1309334], end: [51.5101335, -0.1312039] }] }) {
  const mePos = [51.5072579, -0.1309334];
  const localPos = [51.5101335, -0.1312039];
  const localPos2 = [51.5102288, -0.1321042];
  const travelerPos = [51.5092118, -0.1324673];
  const placePos = [51.50894, -0.128299];

  // Berechne Center basierend auf allen Routen
  const allPoints = routes.flatMap(r => [r.start, r.end]);
  const centerLat = allPoints.reduce((sum, p) => sum + p[0], 0) / allPoints.length;
  const centerLng = allPoints.reduce((sum, p) => sum + p[1], 0) / allPoints.length;

  return (
    <MapContainer center={[centerLat, centerLng]} zoom={16} style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Marker */}
      <Marker position={mePos} icon={blueIcon} />
      <Marker position={localPos} icon={greenIcon} />
      <Marker position={localPos2} icon={greenIcon2} />
      <Marker position={travelerPos} icon={orangeIcon} />
      <Marker position={placePos} icon={blackIcon} />

      {/* Icons und Routen für jede Route */}
      {routes.map((route, index) => (
        <RouteWithIcons key={index} route={route} />
      ))}
    </MapContainer>
  );
}



// Neue Komponente für Route + Icons
function RouteWithIcons({ route }) {
  // Default Offsets falls nicht angegeben
  const walkOffset = route.walkOffset || { lat: 0.0002, lng: 0.0003 };
  const arrowOffset = route.arrowOffset || { lat: 0.00027, lng: 0.00015 };
  const arrowRotation = route.arrowRotation || -26;

  return (
    <>
      {/* Walk Icon am Start */}
      <WalkIconMarker 
        position={[route.start[0] + walkOffset.lat, route.start[1] + walkOffset.lng]} 
      />
      
      {/* Arrow Icon am Ziel */}
      <ArrowIconMarker 
        position={[route.end[0] + arrowOffset.lat, route.end[1] + arrowOffset.lng]}
        rotation={arrowRotation}
      />
      
      {/* Route */}
      <Routing start={route.start} end={route.end} />
    </>
  );
}

// Walk Icon Marker bleibt gleich
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
        <DirectionsWalkIcon style={{ fontSize: 45, color: '#F000000' }} />
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

// Arrow Icon Marker mit Rotation Parameter
function ArrowIconMarker({ position, rotation = -26 }) {
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
        transform: `translate(-11px, -9px) rotate(${rotation}deg)`,
      }}>
        <ArrowDownwardIcon style={{ fontSize: 45, color: '#F000000' }} />
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
  }, [map, position, rotation]);

  return null;
}

// Routing anpassen für mehrere Routen
function Routing({ start, end }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Eindeutigen Key für diese Route erstellen
    const routeKey = `route_${start.join(',')}_${end.join(',')}`;

    const removeOld = () => {
      if (map[routeKey]) {
        map.removeLayer(map[routeKey]);
        map[routeKey] = null;
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

        map[routeKey] = layer;

        // Nur beim ersten Render den Zoom anpassen
        if (!map._hasSetBounds) {
          const bounds = layer.getBounds();
          if (bounds && !bounds.isEmpty()) {
            map.fitBounds(bounds.pad(0.2));
            map._hasSetBounds = true;
          }
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