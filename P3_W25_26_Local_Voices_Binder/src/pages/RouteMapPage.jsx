
import RouteMap from '../components/map/RouteMap';
import SimpleBottomNavigation from '../components/layout/NavBar';
import IconLabelButtons from '../components/map/RouteMapPopup';

export function RouteMapPage() {
  const mePos = [51.5072579, -0.1309334];
  const localPos = [51.5101335, -0.1312039];

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <RouteMap 
        routes={[
          { 
            start: mePos, 
            end: localPos,
            walkOffset: { lat: 0.0002, lng: 0.0003 },
            arrowOffset: { lat: 0.00024, lng:  -0.00022 },
            arrowRotation: -26
          }
        ]} 
      />
      <SimpleBottomNavigation />
      <IconLabelButtons meetingRoute="/meeting"/>
    </div>
  );
}