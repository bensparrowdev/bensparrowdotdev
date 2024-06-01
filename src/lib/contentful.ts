import contentful from 'contentful';

export interface ProjectSkeleton {
  contentTypeId: 'projects';
  fields: {
    title: contentful.EntryFieldTypes.Text;
    description: contentful.EntryFieldTypes.Text;
    tags: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.Symbol>;
    image: contentful.EntryFieldTypes.AssetLink;
  };
}

export interface BlogPostSkeleton {
  contentTypeId: 'blogPost';
  fields: {
    title: contentful.EntryFieldTypes.Text;
    tags: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.Symbol>;
    dateCreated: contentful.EntryFieldTypes.Date;
    readTime: contentful.EntryFieldTypes.Number;
    blogContent: contentful.EntryFieldTypes.Text;
    slug: contentful.EntryFieldTypes.Text;
    featuredImage: contentful.EntryFieldTypes.AssetLink;
  };
}

export const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});
