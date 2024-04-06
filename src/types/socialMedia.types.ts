export interface SocialMediaLink {
    text: string;
    link: string;
};

export interface PersonDetail {
    name: string;
    img: string;
    based_in: string;
    description: string;
    socialLinks: SocialMediaLink[]
};

export type PersonDetailWithoutSocialLinks = Omit<PersonDetail, 'socialLinks'>;

export interface Persons {
    person: PersonDetail[]
};