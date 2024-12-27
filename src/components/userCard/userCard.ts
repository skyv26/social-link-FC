import { PersonDetailWithoutSocialLinks } from "../../types/socialMedia.types";

export const UserCard = (user: PersonDetailWithoutSocialLinks) => {
    const userImage = document.createElement('img');
    userImage.alt = user.name;
    userImage.title = user.name;
    userImage.src = user.img;
    userImage.className = 'inline-block rounded-full size-20 min-[375px]:size-[86px] min-[1366px]:size-[85px] dark:shadow-[#00000090] dark:shadow-lg';
    
    const userName = document.createElement('h1');
    userName.textContent = user.name;
    userName.className = 'text-white font-inter font-bold text-2xl dark:text-gray_900 dark:drop-shadow-[#00000090] dark:drop-shadow-lg';
    const userPlace = document.createElement('h2');
    userPlace.textContent = user.based_in;
    userPlace.className = 'text-green font-inter font-bold text-xs min-[375px]:text-sm dark:text-gray_900 dark:drop-shadow-[#00000090] dark:drop-shadow-lg';

    const userDescription = document.createElement('p');
    userDescription.textContent = `"${user.description}"`;
    userDescription.className = 'text-white font-inter text-[10.5px] min-[375px]:text-[14px] dark:text-gray_900 dark:drop-shadow-[#00000090] dark:drop-shadow-lg';

    const userPrimaryInformation = document.createElement('div');
    userPrimaryInformation.className = 'flex flex-col items-center gap-1 min-[375px]:gap-2';

    userPrimaryInformation.insertAdjacentElement('afterbegin', userName);
    userPrimaryInformation.insertAdjacentElement('beforeend', userPlace);

    const card = document.createElement('div');
    card.className = 'flex flex-col justify-center items-center gap-4 !w-full min-[375px]:gap-[27px] min-[1366px]:gap-[25px]'; 
    card.insertAdjacentElement('afterbegin', userImage);
    card.insertAdjacentElement('beforeend', userPrimaryInformation);
    card.insertAdjacentElement('beforeend', userDescription);
    return card;
};