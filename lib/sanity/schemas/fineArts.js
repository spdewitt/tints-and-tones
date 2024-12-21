export default {
  name: 'fineArts',
  title: 'Fine Arts Page',
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
      description: 'A short paragraph introducing fine arts services.',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
