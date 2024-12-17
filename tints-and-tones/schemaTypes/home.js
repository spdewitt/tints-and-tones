export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'metaDescription',
      type: 'string',
      title: 'Meta Description',
    },
    {
      name: 'h1',
      type: 'string',
      title: 'Main Header',
    },
    {
      name: 'image1',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'image2',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'image3',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'imageAlt1',
      type: 'string',
      title: 'Image Alt',
    },
    {
      name: 'imageAlt2',
      type: 'string',
      title: 'Image Alt',
    },
    {
      name: 'imageAlt3',
      type: 'string',
      title: 'Image Alt',
    },
    {
      name: 'contentBox1',
      title: 'Content Box 1',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
