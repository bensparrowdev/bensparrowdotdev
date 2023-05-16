import contentful from "contentful";

export interface Experience {
  contentTypeId: string;
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

export interface Project {
  contentTypeId: string;
  fields: {
    title: string,
    description: string,
    tags: string[],
    image: {
      fields: {
        description: string,
        url: string
      }
    }
  }
}

// {
//   image: {
//     src: "https://cdn.dribbble.com/userupload/6171241/file/original-f7ba7a7c95ddcb83812d5472361bb180.png?compress=1&resize=1024x768",
//     alt: "",
//   },
//   title: "proj 4",
//   description: "Quis voluptate laborum sit velit laborum Lorem mollit.",
//   tags: ["website"],
// },

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
