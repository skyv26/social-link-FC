import { PersonDetailWithoutSocialLinks } from "../../types/socialMedia.types";

export const UserCard = (user: PersonDetailWithoutSocialLinks) => {
    const userImage = document.createElement('img');
    userImage.alt = user.name;
    userImage.title = user.name;
    userImage.className = '';
    
    const userName = document.createElement('h1');
    userName.textContent = user.name;
    const userPlace = document.createElement('h2');
    userPlace.textContent = user.based_in;

    const userPrimaryInformation = document.createElement('div');
    userPrimaryInformation.insertAdjacentElement('afterbegin', userName);
    userPrimaryInformation.insertAdjacentElement('beforeend', userPlace);

    const card = document.createElement('div');
    card.insertAdjacentElement('afterbegin', userImage);
    card.insertAdjacentElement('beforeend', userPrimaryInformation);
    console.log(card)
    return card;
};