import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MapView() {
  return (
    <MapContainer
      center={[51.508, -0.13]}
      zoom={16}
      style={{ height: '100vh', width: '100vw' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[51.508940, -0.128299]}>
        <Popup>National Gallery</Popup>
      </Marker>
      <Marker position={[51.5101335, -0.1312039]}>
        <Popup>Reisender</Popup>
      </Marker>
      <Marker position={[51.5092118, -0.1324673]}>
        <Popup>Local</Popup>
      </Marker>
      <Marker position={[51.5072579, -0.1309334]}>
        <Popup>Ich</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
