export default {
  name: 'interiorPaintingPage',
  title: 'Interior Painting Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main heading of the page.',
    },
    {
      name: 'introParagraph',
      title: 'Intro Paragraph',
      type: 'text',
      description: 'A short paragraph introducing interior residential painting services.',
    },
    {
      name: 'pairs',
      title: 'Before/After Pairs',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Before/After Pair',
          fields: [
            {
              name: 'beforeImage',
              title: 'Before Image',
              type: 'image',
              description: 'An image showing the condition before painting.',
            },
            {
              name: 'beforeText',
              title: 'Before Text',
              type: 'string',
              description: 'A short description of the before image issues.',
            },
            {
              name: 'afterImage',
              title: 'After Image',
              type: 'image',
              description: 'An image showing the condition after painting.',
            },
            {
              name: 'afterText',
              title: 'After Text',
              type: 'string',
              description: 'A short description highlighting improvements in the after image.',
            },
          ],
          preview: {
            select: {
              title: 'beforeText',
              subtitle: 'afterText',
              media: 'beforeImage',
            },
          },
        },
      ],
      description: 'Add multiple sets of before/after images to showcase improvements.',
    },
    {
      name: 'cabinetStainingSection',
      title: 'Cabinet Staining Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Title for the cabinet staining section.',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'A paragraph describing the cabinet staining services.',
        },
        {
          name: 'image',
          title: 'Cabinet Staining Image',
          type: 'image',
          description: 'An image showcasing cabinet staining results.',
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'description',
          media: 'image',
        },
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
