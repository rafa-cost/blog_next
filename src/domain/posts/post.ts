export type PostID = number;

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: AuthorAttributesData;
  };
};

export type AuthorAttributesData = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishAt: string;
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: CategoryAttributesData;
  };
};

export type CategoryAttributesData = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishAt: string;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};


export type PostCover = PostCoverFormat & {
  data: {
    id: PostID;
    attributes: {
      alternativeText: string;
      caption: string;
      previewUrl: null;
      provider: string;
      created_by: number;
      updated_by: number;
      created_at: string;
      updated_at: string;
      formats: {
        thumbnail: PostCoverFormat;
        small: PostCoverFormat;
        medium: PostCoverFormat;
        large: PostCoverFormat;
      };
    };
  };
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};



export type PostAttributesData = {
  title: string;
  content: ContentAttributesData;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_by: PostCreatedBy;
  updated_by: PostCreatedBy;
  createdAt: string;
  updatedAt: string;
  cover: PostCover;
};

export type PostData = {
  id: PostID;
  attributes: PostAttributesData;
};

export type ContentAttributesData = {
  0: {
    type: string;
    children: {
      0: {
        text: string;
        type: string;
      }
    }
  }

};
