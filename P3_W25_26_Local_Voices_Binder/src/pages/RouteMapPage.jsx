
import RouteMap from '../components/map/RouteMap';
import SimpleBottomNavigation from '../components/layout/NavBar';
import IconLabelButtons from '../components/map/RouteMapPopup';

export function RouteMapPage () {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <RouteMap />
      <SimpleBottomNavigation />
      <IconLabelButtons/>
    </div>
  );
}

