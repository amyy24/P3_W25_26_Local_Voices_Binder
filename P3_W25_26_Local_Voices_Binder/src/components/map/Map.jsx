import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocalPin from '../../assets/LocalPin.png';
import MePin from '../../assets/MePin.png';
import PlacePin from '../../assets/PlacePin.png';
import ReisenderPin from '../../assets/ReisenderPin.png';
import L from 'leaflet';
import { useState, useEffect } from 'react';
import MapPopup from './MapPopup';
import local from '../../assets/local.jpg';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MuseumIcon from '@mui/icons-material/Museum';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import reisender from '../../assets/reisender.jpg';
import MapPopupPlace from './MapPopupPlace';
import place from '../../assets/place.jpg';

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
  useEffect(() => {
    if (activeMarker === 'place') {
      // optional: hier icon wechseln
    }
  }, [activeMarker]);

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
      <Marker
  position={[51.508940, -0.128299]}
  icon={activeMarker === 'place' ? blackIconBig : blackIcon}
  eventHandlers={{
    click: () => setActiveMarker('place'),
  }}
>
  {activeMarker === 'place' && (
    <Popup maxWidth={400}autoPan>
      <MapPopupPlace 
      title="National Gallery"
  subtitle="Die Nationalgalerie ist ein Kunstmuseum in London mit ca 2300 Werken."
  image={place}
  buttonText={"Austausch suchen"}
/>
    </Popup>
  )}
</Marker>

 <Marker
        position={[51.5101335, -0.1312039]}
        icon={activeMarker === 'local' ? greenIconBig : greenIcon}
        eventHandlers={{
          click: () => setActiveMarker('local'),
        }}
        >
          {activeMarker === 'local' && (
    <Popup maxWidth={400}autoPan>
      <MapPopup 
      title="Emma"
  subtitle="Local"
  image={local}
  leftIcons={[
    { icon: <ColorLensIcon fontSize="small" />, label: "Kunst" },
    { icon: <MuseumIcon fontSize="small" />, label: "Kultur" }
  ]}
  bottomIcons={[
    { icon: <LocationPinIcon fontSize="small" />, label: "1 km" }
  ]}
  buttonIcon={<ArrowForwardIosIcon />}
/>
    </Popup>
  )}
  </Marker>

  <Marker position={[51.5092118, -0.1324673]} icon={activeMarker === 'reisender' ? orangeIconBig : orangeIcon}
        eventHandlers={{
          click: () => setActiveMarker('reisender'),
        }}>
        {activeMarker === 'reisender' && (
          <Popup maxWidth={400}autoPan>
            <MapPopup 
            title="Liam"
        subtitle="Reisender"
        image={reisender}
        leftIcons={[
          { icon: <RestaurantIcon fontSize="small" />, label: "Essen" },
          { icon: <SportsBasketballIcon fontSize="small" />, label: "Sport" }
        ]}
        bottomIcons={[
          { icon: <LocationPinIcon fontSize="small" />, label: "1 km" }
        ]}
        buttonIcon={<ArrowForwardIosIcon />}
      />
          </Popup>
        )}
      </Marker>
      <Marker position={[51.5072579, -0.1309334]} icon={blueIcon}>
  </Marker>
    </MapContainer>
  );
}

export default MapView;
