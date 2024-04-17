export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
        linkedin: string
        github: string
    }
}

export interface Views {
    slug: string;
    count: number;
}
