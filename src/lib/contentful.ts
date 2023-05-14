import contentful from "contentful";

export interface Experience {
  contentTypeId: "experience";
  fields: {
    title: string;
    company: string;
    location: string;
    root?: string;
    link?: string;
    description?: string;
    techStack?: string[];
    logo?: {
      title: string;
      description?: string;
      file: {
        url: string;
        details: object;
        fileName: string;
        contentType: string;
      };
    };
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
