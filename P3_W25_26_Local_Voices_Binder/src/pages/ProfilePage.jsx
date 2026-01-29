import BadgeAvatars from "../components/profiles/LocalProfile";
import reisender from '../assets/reisender.jpg';
import Verification from '../assets/verification.png';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationPinIcon from '@mui/icons-material/LocationPin';

export function ProfilePage() {
    return (
        <div>
            <BadgeAvatars
            mainImage={reisender}
            badgeImage={Verification}
            title="Liam"
            subtitle="Reisender" 
            subtitleColor="#F05323"
            infos={[
                { title: "Lebe in", subtitle: "Madrid, Spanien", right: { icon: <LocationPinIcon />, label: "1km" } },
                { title: "Spreche", subtitle: "Englisch, Spanisch" },
                {
                    title: "offen für",
                    icons: [
                      { icon: <PeopleAltIcon />},
                    ],
                  },
                {
                    title: "Thema",
                    icons: [
                      { icon: <RestaurantIcon />, label: "Essen" },
                      { icon: <SportsBasketballIcon/>, label: "Sport" },
                    ],
                  },
                { title: "Über mich", subtitle: "Ich koche sehr gerne und möchte viel über andere Küchen lernen, außerdem bin ich großer Basketball Fan" },
              ]}/>
              
        </div>
    )
}


