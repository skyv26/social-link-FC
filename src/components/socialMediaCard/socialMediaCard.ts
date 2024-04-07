const SocialMediaCard = (childElement: HTMLElement) => {
    const div = document.createElement('div');
    div.className = 'bg-gray_800 flex flex-col justify-center text-center p-8 w-[270px] mx-auto rounded-lg gap-4 min-[375px]:w-[325px] min-[375px]:gap-5 min-[375px]:p-6 min-[1366px]:w-[382px] min-[1366px]:py-11 min-[1366px]:px-10 min-[1366px]:gap-6 mt-[173px]'
    div.insertAdjacentElement('beforeend', childElement);
    return div;
};

export default SocialMediaCard;