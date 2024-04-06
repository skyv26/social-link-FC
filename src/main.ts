import SocialMediaCard from './components/socialMediaCard/socialMediaCard';
import { UserCard } from './components/userCard/userCard';
import socialMediaData from './data/social-media/socialMediaData';
import './style.css';
import { PersonDetailWithoutSocialLinks } from './types/socialMedia.types';

// document.querySelector('#app')?.insertAdjacentElement('afterbegin', SocialMediaButton({
//     text: 'Github',
//     link: 'https://www.github.com',
// } as SocialMediaLink));

const { socialLinks, ...personWithoutSocialLinks } = socialMediaData()[0];

document.querySelector('#app')?.insertAdjacentElement(
    'afterbegin',
    SocialMediaCard(UserCard(personWithoutSocialLinks as PersonDetailWithoutSocialLinks)) as Element
);
