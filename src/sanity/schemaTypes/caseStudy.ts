export default {
  name: "caseStudy",
  title: "Case Studies",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "heading", maxLength: 96 },
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
    {
      name: "body",
      title: "Blog Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
  },
};