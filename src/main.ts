import './style.css';
import { SocialMediaButton } from './components/socialMediaButton/socialMediaButton';

document.querySelector('#app')?.insertAdjacentHTML('afterbegin', SocialMediaButton('GitHub'));