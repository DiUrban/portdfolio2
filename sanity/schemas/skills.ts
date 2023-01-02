import {defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of Skill',
      type: 'string',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of Skills 0 to 100',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
  ],
})
