import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import 'leaflet/dist/leaflet.css';



import {StartPage} from "./pages/StartPage";
import {MapPage} from "./pages/MapPage";
import {RouteMapPage} from "./pages/RouteMapPage";
import {ProfilePage} from "./pages/ProfilePage";
import {MeetingPage} from "./pages/MeetingPage";
import {ProfilePageLocal} from "./pages/ProfilePageLocal";


function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/route" element={<RouteMapPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profilelocal" element={<ProfilePageLocal />} />
        <Route path="/meeting" element={<MeetingPage />} /> 
      </Routes>
    </Layout>
    
    </>
    
  );
}

export default App;

