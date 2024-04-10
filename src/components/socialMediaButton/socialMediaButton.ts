import { SocialMediaLink } from "../../types/socialMedia.types";

// export const SocialMediaButton = ({text, link}: SocialMediaLink) => `
//     <a class="" href="https://www.google.com/">${text}</a>
// `;

export const SocialMediaButton = (socialMediaData: SocialMediaLink) => {
    const anchorTag = document.createElement('a');
    anchorTag.className = 'block rounded-md p-[13px] w-full bg-gray_700 text-white font-inter font-semibold text-sm min-[375px]:text-[15px] min-[1366px]:p-[12px] min-[1366px]:text-[14px] hover:bg-green hover:text-gray_900 dark:bg-[#ffffff50] dark:shadow-inner dark:shadow-[#ffffff50] dark:text-gray_700',
    anchorTag.href = socialMediaData.link
    anchorTag.textContent = socialMediaData.text
    anchorTag.target = '_blank';
    return anchorTag as HTMLAnchorElement;
};