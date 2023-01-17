import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `/posts/**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$/, ""),
    },
    url: {
      type: "string",
      resolve: (post) => '/blog/'+post._raw.sourceFileName.replace(/\.md$/, ""),
      },
  },
}))


export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `/projects/**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (project) => project._raw.sourceFileName.replace(/\.md$/, ""),
    },
    url: {
      type: "string",
      resolve: (project) => '/projects/'+project._raw.sourceFileName.replace(/\.md$/, ""),
      },
  },
  
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project],
})
