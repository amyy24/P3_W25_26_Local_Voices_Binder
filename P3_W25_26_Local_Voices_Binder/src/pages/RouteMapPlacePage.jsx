
import RouteMap from '../components/map/RouteMap';
import SimpleBottomNavigation from '../components/layout/NavBar';
import IconLabelButtons from '../components/map/RouteMapPopup';

export function RouteMapPlacePage() {
    const mePos = [51.5072579, -0.1309334];
    const localPos2 = [51.5102288, -0.1321042];
    const placePos = [51.50894, -0.128299];
  
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <RouteMap 
          routes={[
            { 
              start: localPos2, 
              end: placePos,
              walkOffset: { lat: 0.0002, lng: 0.0002 },
              arrowOffset: { lat: 0.00034, lng: -0.00019 },  // Individuell für Route 1
              arrowRotation: -20  // Andere Rotation
              
            },
            { 
              start: mePos, 
              end: placePos,
              walkOffset: { lat: 0.0002, lng: 0.0003 },  // Individuell für Route 2
              arrowOffset: { lat:  0.00034, lng: -0.00019 },  // Pfeil etwas links
              arrowRotation: -20  // Andere Rotation
            }
          ]} 
        />
        <SimpleBottomNavigation />
        <IconLabelButtons meetingRoute="/meetingplace"/>
      </div>
    );
  }