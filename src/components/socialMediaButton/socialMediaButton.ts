import { SocialMediaLink } from "../../types/socialMedia.types";

// export const SocialMediaButton = ({text, link}: SocialMediaLink) => `
//     <a class="" href="https://www.google.com/">${text}</a>
// `;

export const SocialMediaButton = (socialMediaData: SocialMediaLink) => {
    const anchorTag = document.createElement('a');
    anchorTag.className = 'block rounded-md p-[13px] w-full bg-gray_700 text-white font-inter font-semibold text-sm min-[375px]:text-[15px]',
    anchorTag.href = socialMediaData.link
    anchorTag.textContent = socialMediaData.text
    return anchorTag as HTMLAnchorElement;
};