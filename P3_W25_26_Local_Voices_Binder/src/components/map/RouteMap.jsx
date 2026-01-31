import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import LocalPin from '../../assets/LocalPin.png';
import MePin from '../../assets/MePin.png';
import PlacePin from '../../assets/PlacePin.png';
import ReisenderPin from '../../assets/ReisenderPin.png';
import { useEffect } from 'react';

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
  
      const control = L.Routing.control({
        waypoints: [
          L.latLng(start[0], start[1]),
          L.latLng(end[0], end[1])
        ],
        lineOptions: {
          styles: [{ color: '#F05323', weight: 4 }]
        },
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        createMarker: () => null,
        container: null,
        formatter: new L.Routing.Formatter({
            formatDistance: () => '',      // keine Entfernung anzeigen
            formatInstruction: () => '',   // keine Schrittanweisungen
            formatTime: () => ''           // keine Zeit anzeigen
          })
         // keine Marker doppelt
      }).addTo(map);
  
      return () => map.removeControl(control); // sauber aufräumen
    }, [map, start, end]);
  
    return null;
  }
export default RouteMap;
