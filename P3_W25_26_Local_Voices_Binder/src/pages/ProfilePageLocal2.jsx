import BadgeAvatars from "../components/profiles/LocalProfile";
import local2 from '../assets/local2.jpg';
import Verification from '../assets/verification.png';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MuseumIcon from '@mui/icons-material/Museum';
import PersonIcon from '@mui/icons-material/Person';
import LocationPinIcon from '@mui/icons-material/LocationPin';

export function ProfilePageLocal2() {
    return (
        <div>
            <BadgeAvatars
            mainImage={local2}
            badgeImage={Verification}
            title="Ethan"
            subtitle="Local" 
            subtitleColor="#51853C"
            meetingRoute="/meetingplace"
            infos={[
                { title: "Lebe in", subtitle: "London, England", right: { icon: <LocationPinIcon />, label: "1km" } },
                { title: "Spreche", subtitle: "Englisch, Spanisch" },
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


