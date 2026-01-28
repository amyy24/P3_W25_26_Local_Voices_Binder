import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocalPin from '../../assets/LocalPin.png';
import MePin from '../../assets/MePin.png';
import PlacePin from '../../assets/PlacePin.png';
import ReisenderPin from '../../assets/ReisenderPin.png';
import L from 'leaflet';
import { useState } from 'react';

const greenIcon = new L.Icon({
  iconUrl: LocalPin,
  iconSize: [57, 70],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const greenIconBig = new L.Icon({
  iconUrl: LocalPin,
  iconSize: [77, 90],
  iconAnchor: [30, 70],
  popupAnchor: [0, -60],
});

const orangeIcon = new L.Icon({
  iconUrl: ReisenderPin,
  iconSize: [57, 70],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
const orangeIconBig = new L.Icon({
  iconUrl: ReisenderPin,
  iconSize: [77, 90],
  iconAnchor: [30, 70],
  popupAnchor: [0, -60],
});

const blackIcon = new L.Icon({
  iconUrl: PlacePin,
  iconSize: [57, 70],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
const blackIconBig = new L.Icon({
  iconUrl: PlacePin,
  iconSize: [77, 90],
  iconAnchor: [30, 70],
  popupAnchor: [0, -60],
});

const blueIcon = new L.Icon({
  iconUrl: MePin,
  iconSize: [57, 90],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});



function MapView() {
  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <MapContainer
      center={[51.508, -0.13]}
      zoom={16}
      style={{ height: '100vh', width: '100vw' }}
      eventHandlers={{
        click: () => setActiveMarker(null),
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[51.508940, -0.128299]} icon={activeMarker === 'place' ? blackIconBig : blackIcon}
        eventHandlers={{
          click: () => setActiveMarker('place'),
        }}>
        <Popup>National Gallery</Popup>
      </Marker>
      
      <Marker
        position={[51.5101335, -0.1312039]}
        icon={activeMarker === 'local' ? greenIconBig : greenIcon}
        eventHandlers={{
          click: () => setActiveMarker('local'),
        }}
      ></Marker>
      <Marker position={[51.5092118, -0.1324673]} icon={activeMarker === 'reisender' ? orangeIconBig : orangeIcon}
        eventHandlers={{
          click: () => setActiveMarker('reisender'),
        }}>
        <Popup>Local</Popup>
      </Marker>
      <Marker position={[51.5072579, -0.1309334]} icon={blueIcon}>
        <Popup>Ich</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
