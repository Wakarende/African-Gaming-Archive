import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Game Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'studio',
      title: 'Studio',
      type: 'reference',
      to: [{ type: 'studio' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'releaseYear',
      title: 'Release Year',
      type: 'number',
      validation: (Rule) => Rule.min(1990).max(new Date().getFullYear() + 5),
    }),
    defineField({
      name: 'platform',
      title: 'Platform(s)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Web', value: 'web' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'PC', value: 'pc' },
          { title: 'Console', value: 'console' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Released', value: 'released' },
          { title: 'In Development', value: 'in-development' },
        ],
      },
    }),
    defineField({
      name: 'screenshot',
      title: 'Game Screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gameUrl',
      title: 'Game URL',
      type: 'url',
      description: 'Link to play/view the game (if published)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'screenshot',
    },
  },
})