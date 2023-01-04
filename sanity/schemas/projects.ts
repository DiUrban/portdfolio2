import {defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {name: 'pos', title: 'Position', type: 'number'},
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
  ],
})
