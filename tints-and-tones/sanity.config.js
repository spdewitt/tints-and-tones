import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Tints-and-Tones',

  projectId: 'ikzdi2ov',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
