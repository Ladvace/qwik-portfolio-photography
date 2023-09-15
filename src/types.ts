type SysLink = {
  type: string;
  linkType: string;
  id: string;
};

type TagLink = {
  sys: {
    type: string;
    linkType: string;
    id: string;
  };
};

type SysMetadata = {
  space: {
    sys: SysLink;
  };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: SysLink;
  };
  revision: number;
  contentType?: {
    sys: SysLink;
  };
  locale: string;
};

type Metadata = {
  tags: TagLink[];
};

type ImageDetails = {
  size: number;
  image: {
    width: number;
    height: number;
  };
};

type ImageFile = {
  url: string;
  details: ImageDetails;
  fileName: string;
  contentType: string;
};

type AssetFields = {
  title: string;
  description: string;
  file: ImageFile;
};

type ContentfulAsset = {
  metadata: Metadata;
  sys: SysMetadata;
  fields: AssetFields;
};

type VideoProjectFields = {
  title: string;
  clientName: string;
  projectDate: string;
  coverImage: ContentfulAsset;
};

type PhotoProjectFields = {
  title: string;
  clientName: string;
  projectDate: string;
  photos: ContentfulAsset[];
};

export type VideoProject = {
  metadata: Metadata;
  sys: SysMetadata;
  fields: VideoProjectFields;
};

export type PhotoProject = {
  metadata: Metadata;
  sys: SysMetadata;
  fields: PhotoProjectFields;
};
