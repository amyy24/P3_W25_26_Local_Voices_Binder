import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import 'leaflet/dist/leaflet.css';




import {StartPage} from "./pages/StartPage";
import {MapPage} from "./pages/MapPage";
import {RouteMapPage} from "./pages/RouteMapPage";
import {ProfilePage} from "./pages/ProfilePage";
import {MeetingPage} from "./pages/MeetingPage";
import {MeetingPlacePage} from "./pages/MeetingPlacePage";
import {ProfilePageLocal} from "./pages/ProfilePageLocal";
import {ProfilePageLocal2} from "./pages/ProfilePageLocal2";
import {RouteMapPlacePage} from "./pages/RouteMapPlacePage";

import { MyProfilePage } from "./pages/MyProfilePage";


function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/route" element={<RouteMapPage />} />
        <Route path="/route2" element={<RouteMapPlacePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profilelocal" element={<ProfilePageLocal />} />
        <Route path="/profilelocal2" element={<ProfilePageLocal2 />} />
        <Route path="/meeting" element={<MeetingPage />} />
        <Route path="/meetingplace" element={<MeetingPlacePage />} /> 
        <Route path="/myprofile" element={<MyProfilePage />} /> 
      </Routes>
    </Layout>
    
    </>
    
  );
}

export default App;

