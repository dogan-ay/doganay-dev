// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `/posts/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$/, "")
    },
    url: {
      type: "string",
      resolve: (post) => "/blog/" + post._raw.sourceFileName.replace(/\.md$/, "")
    },
    readingTime: {
      type: "json",
      resolve: (post) => readingTime(post.body.raw)
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `/projects/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    img: {
      type: "string"
    },
    deployment: {
      type: "string"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (project) => project._raw.sourceFileName.replace(/\.mdx$/, "")
    },
    url: {
      type: "string",
      resolve: (project) => "/projects/" + project._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project]
});
export {
  Post,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5O4TX7WS.mjs.map
