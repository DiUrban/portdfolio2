import {defineType} from 'sanity'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of Social',
      type: 'string',
    },
    {
      name: 'url',
      title: 'url',
      type: 'url',
    },
  ],
})
