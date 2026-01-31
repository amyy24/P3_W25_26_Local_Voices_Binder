import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import LocalPin from '../../assets/LocalPin.png';
import MePin from '../../assets/MePin.png';
import PlacePin from '../../assets/PlacePin.png';
import ReisenderPin from '../../assets/ReisenderPin.png';
import { useEffect } from 'react';
import 'leaflet-polylinedecorator';
// Marker Icons
const greenIcon = new L.Icon({ iconUrl: LocalPin, iconSize: [57,70], iconAnchor:[20,40] });
const blueIcon = new L.Icon({ iconUrl: MePin, iconSize: [57,90], iconAnchor:[20,40] });
const blackIcon = new L.Icon({ iconUrl: PlacePin, iconSize: [57,70], iconAnchor:[20,40] });
const orangeIcon = new L.Icon({ iconUrl: ReisenderPin, iconSize: [57,70], iconAnchor:[20,40] });


function RouteMap() {
  const mePos = [51.5072579, -0.1309334]; // MePin
  const localPos = [51.5101335, -0.1312039]; // LocalPin
  const placePos = [51.508940, -0.128299]; // PlacePin
  const reisenderPos = [51.5092118, -0.1324673]; // ReisenderPin

  return (
    <MapContainer center={mePos} zoom={16} style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Marker */}
      <Marker position={placePos} icon={blackIcon} />
      <Marker position={localPos} icon={greenIcon} />
      <Marker position={reisenderPos} icon={orangeIcon} />
      <Marker position={mePos} icon={blueIcon} />

      {/* Route von MePin zu LocalPin */}
      <Routing start={mePos} end={localPos} />
    </MapContainer>
  );
}

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
        
       // OSRM-Request: beachte Reihenfolge lon,lat in der URL
        const url = `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`;
        
        let aborted = false;
        fetch(url)
        .then((res) => {
        if (!res.ok) throw new Error('Routing service error');
        return res.json();
        })
        .then((data) => {
        if (aborted) return;
        if (!data.routes || data.routes.length === 0) return;
        
        const geometry = data.routes[0].geometry; // GeoJSON LineString
        const layer = L.geoJSON(geometry, {
        style: { color: 'black', weight: 4 },
        }).addTo(map);

        const iconHtml = renderToStaticMarkup(
            <div style={{
              width: 34,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translate(24px, -8px)' // <-- passe hier X/Y pixel an
            }}>
              <LiveHelpIcon style={{ color: '#000', fontSize: 28 }} />
            </div>
          );
          
          const muiDivIcon = L.divIcon({
            html: iconHtml,
            className: '',         // optional: eigene CSS-Klasse
            iconSize: [34, 34],
            iconAnchor: [17, 17],  // zentriert das divIcon auf seine Position
          });
          const arrow = L.Symbol.arrowHead({
                    pixelSize: 80,
                    polygon: true, // true = gefüllter Pfeil
                    headAngle: 45,
                    pathOptions: { fillOpacity: 1, color: '#000000', weight: 0 }
                  });
          
                  // Decorator anlegen: offset '100%' setzt das Symbol ans Linienende
                  const decorator = L.polylineDecorator(line, {
                    patterns: [
                      {
                        offset: '50%', // am Ende
                        repeat: 0,      // kein Repeat
                        symbol: arrow
                      }
                    ]
                  }).addTo(map);
          
                  map._routeDecorator = decorator;
          
        
        // Referenz zum späteren Entfernen speichern
        map._routeLayer = layer;
        
        // Karte auf Route zoomen (optional)
        if (layer.getBounds && !layer.getBounds().isEmpty()) {
        map.fitBounds(layer.getBounds(), { padding: [50, 50] });
        }
        })
        .catch((err) => {
       // optional: Fehlerbehandlung (z.B. Console-Log)
        // console.error('Route fetch error', err);
        });
        
        return () => {
        aborted = true;
        removeOld();
        };
        }, [map, start, end]);
   
  
    return null;
  }
export default RouteMap;
