import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

//My schemas
// import studio from '../schemaTypes/studio'
// import game from '../schemaTypes/game'
// import interview from '../schemaTypes/interview'

export default defineConfig({
  name: 'default',
  title: 'African Gaming Archive',

  projectId: '5ybmnwoi',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
