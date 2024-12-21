export default {
  name: 'exteriorPaintingPage',
  title: 'Exterior Painting Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Heading',
      type: 'string',
      description: 'The main heading displayed at the top of the page.',
    },

    {
      name: 'introParagraph',
      title: 'Intro Paragraph',
      type: 'text',
      description: 'A short paragraph introducing exterior residential painting services.',
    },
    {
      name: 'secondParagraph',
      title: 'Second Paragraph',
      type: 'text',
      description: 'A short paragraph introducing exterior residential painting services.',
    },
    {
      name: 'thirdParagraph',
      title: 'Third Paragraph',
      type: 'text',
      description: 'A short paragraph introducing exterior residential painting services.',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
