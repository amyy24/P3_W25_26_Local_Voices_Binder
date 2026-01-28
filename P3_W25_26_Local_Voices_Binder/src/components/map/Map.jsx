import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MapView() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '800vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>Hallo Leaflet 👋</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
