import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";


import StartPage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import RouteMapPage from "./pages/RouteMapPage";
import ProfilePage from "./pages/ProfilePage";
import MeetingPage from "./pages/MeetingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/route" element={<RouteMapPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/meetings" element={<MeetingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

