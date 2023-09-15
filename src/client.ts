import contentful from "contentful";

interface ContentfulClientParams {
  space: string;
  environment: string;
  accessToken: string;
}

export const getContentfulClient = (params: ContentfulClientParams) => {
  const contentfulClient = contentful.createClient(params);

  return contentfulClient;
};

export default getContentfulClient;
