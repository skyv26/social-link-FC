import { SocialMediaButton } from './components/socialMediaButton/socialMediaButton';
import SocialMediaCard from './components/socialMediaCard/socialMediaCard';
import { UserCard } from './components/userCard/userCard';
import socialMediaData from './data/social-media/socialMediaData';
import './style.css';
import { PersonDetailWithoutSocialLinks, SocialMediaLink } from './types/socialMedia.types';

let indexVal = 0; // Initial index for social media data
const themeToggle = document.createElement('button') as HTMLElement;

function updateUI() {
  // Fetch the current social media data
  const { socialLinks, ...personWithoutSocialLinks } = socialMediaData()[indexVal];

  // Create the main card
  const mainCard = SocialMediaCard(UserCard(personWithoutSocialLinks as PersonDetailWithoutSocialLinks)) as Element;

  // Create the link container
  const linkContainer = document.createElement('div');
  linkContainer.className = 'flex flex-col justify-center align-center text-center gap-3 min-[375px]:gap-4 min-[1366px]:gap-[17px]';

  // Populate links dynamically
  socialLinks.forEach(({ text, link }: SocialMediaLink) => {
    const button = SocialMediaButton({ text, link } as SocialMediaLink);
    linkContainer.appendChild(button);
  });

  // Update the DOM
  const appElement = document.querySelector('#app') as HTMLElement;
  appElement.innerHTML = ''; // Clear the existing content
  appElement.appendChild(mainCard);
  mainCard.insertAdjacentElement('beforeend', themeToggle);
  mainCard.insertAdjacentElement('beforeend', linkContainer);
}

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.documentElement;

  // Theme handling
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    indexVal = (indexVal + 1) % socialMediaData().length; // Cycle through indices
    updateUI();
    rootElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    rootElement.classList.remove('dark');
  }

  themeToggle.textContent = '🌟';
  themeToggle.className = `hidden bg-transparent border-none outline-none 
    absolute top-5 right-5 text-lg z-20 
    animate-rotateScale themeToggle`;

  themeToggle.addEventListener('click', () => {
    if (rootElement.classList.contains('dark')) {
      rootElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save preference
    } else {
      rootElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Save preference
    }
    indexVal = (indexVal + 1) % socialMediaData().length; // Cycle through indices
    updateUI();
  });

  // Initial UI rendering
  updateUI();

  // Add footer only once
  const footerHTML = `<footer class="text-white text-center translate-y-4 dark:text-gray_900 font-inter">Made with ❤️ by <a class="text-green font-bold no-underline dark:text-gray_700" target="_blank" href="https://linkedin.com/in/skyv2022">Aakash Verma</a></footer>`;
  if (!document.querySelector('footer')) {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
});
