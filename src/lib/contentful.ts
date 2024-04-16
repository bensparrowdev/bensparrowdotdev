import contentful from 'contentful';

export interface Project {
  contentTypeId: string;
  fields: {
    title: string;
    description: string;
    tags: string[];
    image: {
      fields: {
        description: string;
        url: string;
      };
    };
  };
}

export interface BlogPost {
  contentTypeId: string;
  fields: {
    title: string;
    tags: string[];
    dateCreated: Date;
    readTime: number;
    blogContent: string;
    slug: string;
    featuredImage: {
      fields: {
        description: string;
        url: string;
      };
    };
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});
