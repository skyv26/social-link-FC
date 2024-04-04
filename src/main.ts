import './style.css';
import { SocialMediaButton } from './components/socialMediaButton/socialMediaButton';
import { SocialMediaLink } from './types/socialMedia.types';

document.querySelector('#app')?.insertAdjacentElement('afterbegin', SocialMediaButton({
    text: 'Github',
    link: 'https://www.github.com',
} as SocialMediaLink));
