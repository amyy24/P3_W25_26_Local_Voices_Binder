import MapView from '../components/map/Map';
import SimpleBottomNavigation from '../components/layout/NavBar';

import React, {useState} from 'react';

export function MapPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      
      <MapView />
      <SimpleBottomNavigation />
    </div>
  );
}

