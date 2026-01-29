import BadgeAvatars from "../components/profiles/LocalProfile";
import local from '../assets/local.jpg';
import Verification from '../assets/verification.png';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MuseumIcon from '@mui/icons-material/Museum';
import PersonIcon from '@mui/icons-material/Person';
import LocationPinIcon from '@mui/icons-material/LocationPin';

export function ProfilePageLocal() {
    return (
        <div>
            <BadgeAvatars
            mainImage={local}
            badgeImage={Verification}
            title="Emma"
            subtitle="Local" 
            subtitleColor="#51853C"
            infos={[
                { title: "Lebe in", subtitle: "London, England", right: { icon: <LocationPinIcon />, label: "1km" } },
                { title: "Spreche", subtitle: "Englisch, Französisch" },
                {
                    title: "offen für",
                    icons: [
                      { icon: <PersonIcon />},
                    ],
                  },
                {
                    title: "Thema",
                    icons: [
                      { icon: <ColorLensIcon />, label: "Kunst" },
                      { icon: <MuseumIcon />, label: "Kultur" },
                    ],
                  },
                { title: "Über mich", subtitle: "Ich gehe gerne in Museen und kann viel über die lokalen Künstler aus meiner Stadt erzählen" },
              ]}/>
        </div>
    )
}


