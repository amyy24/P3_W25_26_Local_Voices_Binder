import MapView from '../components/map/Map';
import SimpleBottomNavigation from '../components/layout/NavBar';
import FilterPopupsmall from '../components/map/FilterPopup';
import React, {useState} from 'react';
import FilterPopupDown from '../components/map/FilterPopupDown';

export function MapPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      
      <MapView />
      <SimpleBottomNavigation />
    </div>
  );
}

