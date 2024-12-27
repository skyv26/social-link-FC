const SocialMediaCard = (childElement: HTMLElement) => {
    const div = document.createElement('div');
    div.insertAdjacentElement('beforeend', childElement);
    return div;
};

export default SocialMediaCard;