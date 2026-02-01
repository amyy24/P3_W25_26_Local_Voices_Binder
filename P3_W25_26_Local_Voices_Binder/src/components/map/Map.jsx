import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { useState } from 'react';

import LocalPin from '../../assets/LocalPin.png';
import MePin from '../../assets/MePin.png';
import PlacePin from '../../assets/PlacePin.png';
import ReisenderPin from '../../assets/ReisenderPin.png';
import local from '../../assets/local.jpg';
import reisender from '../../assets/reisender.jpg';
import place from '../../assets/place.jpg';

import MapPopup from './MapPopup';
import MapPopupPlace from './MapPopupPlace';

import ColorLensIcon from '@mui/icons-material/ColorLens';
import MuseumIcon from '@mui/icons-material/Museum';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { renderToString } from 'react-dom/server';
import CloseIcon from '@mui/icons-material/Close';


const greenIcon = new L.Icon({ iconUrl: LocalPin, iconSize: [57,70], iconAnchor:[20,40] });
const greenIconBig = new L.Icon({ iconUrl: LocalPin, iconSize: [77,90], iconAnchor:[30,70] });

const orangeIcon = new L.Icon({ iconUrl: ReisenderPin, iconSize: [57,70], iconAnchor:[20,40] });
const orangeIconBig = new L.Icon({ iconUrl: ReisenderPin, iconSize: [77,90], iconAnchor:[30,70] });

const blackIcon = new L.Icon({ iconUrl: PlacePin, iconSize: [57,70], iconAnchor:[20,40] });
const blackIconBig = new L.Icon({ iconUrl: PlacePin, iconSize: [77,90], iconAnchor:[30,70] });

const blueIcon = new L.Icon({ iconUrl: MePin, iconSize: [57,90], iconAnchor:[20,40] });

const announcementIcon = L.divIcon({
  html: renderToString(<AnnouncementIcon style={{ color:'#000', fontSize:28 }} />),
  iconSize:[30,30],
  iconAnchor:[-25,50]
});

const liveHelpIcon = L.divIcon({
  html: renderToString(<LiveHelpIcon style={{ color:'#000', fontSize:28 }} />),
  iconSize:[30,30],
  iconAnchor:[-20,50]
});


export default function MapView() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [activePopup, setActivePopup] = useState(null);
  const [showAnnouncementOnLocal, setShowAnnouncementOnLocal] = useState(false);
  const [showLiveHelpOnMe, setShowLiveHelpOnMe] = useState(false);
  

  return (
    <>
      <MapContainer
        center={[51.508, -0.13]}
        zoom={16}
        style={{ height: '100vh', width: '100vw' }}
        eventHandlers={{
          click: () => {
            setActiveMarker(null);
            setActivePopup(null);
          },
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* PLACE */}
        <Marker
          position={[51.50894, -0.128299]}
          icon={activeMarker === 'place' ? blackIconBig : blackIcon}
          eventHandlers={{
            click: () => {
              setActiveMarker('place');
              setShowAnnouncementOnLocal(true);
              setActivePopup({
                type: 'place',
                title: 'National Gallery',
                subtitle: 'Die Nationalgalerie ist ein Kunstmuseum in London mit ca 2300 Werken.',
                image: place,
                onClose: <CloseIcon />
              });
            },
          }}
        />

        {/* LOCAL */}
        <Marker
          position={[51.5101335, -0.1312039]}
          icon={activeMarker === 'local' ? greenIconBig : greenIcon}
          eventHandlers={{
            click: () => {
              setActiveMarker('local');
              setShowAnnouncementOnLocal(false);
              setActivePopup({
                type: 'local',
                title: 'Emma',
                subtitle: 'Local',
                subtitleColor: '#51853C',
                image: local,
                leftIcons: [
                  { icon: <ColorLensIcon fontSize="small" />, label: 'Kunst' },
                  { icon: <MuseumIcon fontSize="small" />, label: 'Kultur' },
                ],
                bottomIcons: [
                  { icon: <LocationPinIcon fontSize="small" />, label: '1 km' },
                ],
                buttonIcon: <ArrowForwardIosIcon />,
                buttonLink: '/profilelocal',
                onClose: <CloseIcon />
              });
            },
          }}
        />

        {showAnnouncementOnLocal && (
          <Marker
            position={[51.5101335, -0.1312039]}
            icon={announcementIcon}
            interactive={false}
          />
        )}

        {/* REISENDER */}
        <Marker
          position={[51.5092118, -0.1324673]}
          icon={activeMarker === 'reisender' ? orangeIconBig : orangeIcon}
          eventHandlers={{
            click: () => {
              setActiveMarker('reisender');
              setActivePopup({
                type: 'reisender',
                title: 'Liam',
                subtitle: 'Reisender',
                subtitleColor: '#F05323',
                image: reisender,
                leftIcons: [
                  { icon: <RestaurantIcon fontSize="small" />, label: 'Essen' },
                  { icon: <SportsBasketballIcon fontSize="small" />, label: 'Sport' },
                ],
                bottomIcons: [
                  { icon: <LocationPinIcon fontSize="small" />, label: '1 km' },
                ],
                buttonIcon: <ArrowForwardIosIcon />,
                buttonLink: '/profile',
                onClose: <CloseIcon />
              });
            },
          }}
        />

        {/* ME */}
        <Marker position={[51.5072579, -0.1309334]} icon={blueIcon} />
        {showLiveHelpOnMe && (
          <Marker
            position={[51.5072579, -0.1309334]}
            icon={liveHelpIcon}
            interactive={false}
          />
        )}
      </MapContainer>

      {activePopup && (
        <div
          style={{
            position: 'fixed',
            bottom: 72,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 2000,
            pointerEvents: 'none',
          }}
        >
          <div style={{ pointerEvents: 'auto' }}>
            {activePopup.type === 'place' ? (
              <MapPopupPlace
                title={activePopup.title}
                subtitle={activePopup.subtitle}
                image={activePopup.image}
                buttonText="Austausch suchen"
                onButtonClick={() => setShowLiveHelpOnMe(true)}
              />
            ) : (
              <MapPopup {...activePopup} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
