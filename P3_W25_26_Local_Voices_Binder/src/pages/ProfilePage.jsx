import BadgeAvatars from "../components/profiles/LocalProfile";
import reisender from '../assets/reisender.jpg';
import Verification from '../assets/verification.png';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import Box from '@mui/material/Box';

export function ProfilePage() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },               // horizontal padding
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',                 // 100% der Viewport-Höhe
        alignItems: 'flex-start',           // wir starten oben, aber verschieben mit mt
        pt: { xs: '30vh', sm: '10vh' },     // Abstand nach oben: auf iPhone mehr Abstand
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ width: { xs: '100%', sm: 500 } }}>
        <BadgeAvatars
          mainImage={reisender}
          badgeImage={Verification}
          title="Liam"
          subtitle="Reisender"
          subtitleColor="#F05323"
          infos={[
            { title: "Lebe in", subtitle: "Madrid, Spanien", right: { icon: <LocationPinIcon />, label: "1km" } },
            { title: "Spreche", subtitle: "Englisch, Spanisch" },
            { title: "offen für", icons: [{ icon: <PeopleAltIcon /> }] },
            { title: "Thema", icons: [
                { icon: <RestaurantIcon />, label: "Essen" },
                { icon: <SportsBasketballIcon />, label: "Sport" },
            ]},
            { title: "Über mich", subtitle: "Ich koche sehr gerne und möchte viel über andere Küchen lernen, außerdem bin ich großer Basketball Fan" },
          ]}
          sx={{
            // Fonts skalieren für Mobile
            '& .MuiTypography-h6': { fontSize: { xs: '1.8rem', sm: '2rem' } },
            '& .MuiTypography-body1, & .MuiTypography-body2': { fontSize: { xs: '1rem', sm: '1.1rem' } },
            '& img': { maxWidth: '100%' }, // Avatar skaliert auf Handy
          }}
        />
      </Box>
    </Box>
  )
}
