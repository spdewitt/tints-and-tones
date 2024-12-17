import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Tints-and-Tones',

  projectId: 'ikzdi2ov',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
