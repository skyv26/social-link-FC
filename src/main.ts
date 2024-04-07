import { SocialMediaButton } from './components/socialMediaButton/socialMediaButton';
import SocialMediaCard from './components/socialMediaCard/socialMediaCard';
import { UserCard } from './components/userCard/userCard';
import socialMediaData from './data/social-media/socialMediaData';
import './style.css';
import { PersonDetailWithoutSocialLinks, SocialMediaLink } from './types/socialMedia.types';

const { socialLinks, ...personWithoutSocialLinks } = socialMediaData()[0];
const mainCard = SocialMediaCard(UserCard(personWithoutSocialLinks as PersonDetailWithoutSocialLinks)) as Element;
const linkContainer = document.createElement('div');
linkContainer.className = 'flex flex-col justify-center align-center text-center gap-3 min-[375px]:gap-4 min-[1366px]:gap-[17px]'

socialLinks.map(({ text, link }: SocialMediaLink) => {
    const button = SocialMediaButton({ text, link } as SocialMediaLink); // Create the button
    linkContainer.insertAdjacentElement('beforeend', button); // Append each button
});

mainCard.insertAdjacentElement('beforeend', linkContainer);

document.querySelector('#app')?.insertAdjacentElement(
    'afterbegin',
    mainCard
);

