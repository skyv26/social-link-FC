import { PersonDetail } from "../../types/socialMedia.types";
import JessicaAvatar from '../../assets/images/avatar-jessica.jpeg';
import AakashAvatar from '../../assets/images/toonme.jpg';

const socialMediaData = (): PersonDetail[] => {
    return [
        {
            name: 'Jessica Randall',
            img: JessicaAvatar,
            based_in: 'London, United Kingdom',
            description: 'Front-end developer and avid reader.',
            socialLinks: [
                {
                    text: "Github",
                    link: "https://github.com/"
                },
                {
                    text: "Frontend Mentor",
                    link: "https://www.frontendmentor.io/",
                },
                {
                    text: "LinkedIn",
                    link: "https://www.linkedin.com/",
                },
                {
                    text: "Twitter",
                    link: "https://x.com/",
                },
                {
                    text: "Instagram",
                    link: "https://www.instagram.com/"
                }
            ],
        },
        {
            name: 'Aakash Verma',
            img: AakashAvatar,
            based_in: 'Punjab, India 🇮🇳',
            description: 'Seasonal Full Stack Software Engineer, Looking for the remote job.',
            socialLinks: [
                {
                    text: "Github",
                    link: "https://github.com/skyv26"
                },
                {
                    text: "Frontend Mentor",
                    link: "https://www.frontendmentor.io/profile/skyv26",
                },
                {
                    text: "LinkedIn",
                    link: "https://linkedin.com/in/skyv2022",
                },
                {
                    text: "Twitter",
                    link: "https://x.com/devaakashv",
                },
                {
                    text: "Instagram",
                    link: "https://www.instagram.com/_mr.vermaaa_/"
                }
            ],
        },
    ]
};

export default socialMediaData;