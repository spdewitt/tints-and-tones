// /sanity/schemas/navigation.js
export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Navigation Title",
      type: "string",
      description: "For internal reference, e.g., 'Main Navigation'."
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      description: "A list of links for the main navigation.",
      of: [
        {
          type: "object",
          title: "Link",
          fields: [
            {
              name: "label",
              title: "Link Label",
              type: "string",
              description: "Text displayed in the navbar."
            },
            {
              name: "href",
              title: "Link Href",
              type: "string",
              description:
                "Internal path (e.g., '/about') or external URL (e.g., 'https://')."
            }
          ],
          preview: {
            select: {
              title: "label"
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
