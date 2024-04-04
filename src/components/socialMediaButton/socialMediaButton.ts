import { SocialMediaLink } from "../../types/socialMedia.types";

// export const SocialMediaButton = ({text, link}: SocialMediaLink) => `
//     <a class="" href="https://www.google.com/">${text}</a>
// `;

export const SocialMediaButton = (socialMediaData: SocialMediaLink) => {
    const anchorTag = document.createElement('a');
    anchorTag.className = 'bg-gray_700 text-white font-bold text-sm',
    anchorTag.href = socialMediaData.link
    anchorTag.textContent = socialMediaData.text
    return anchorTag as HTMLAnchorElement;
};