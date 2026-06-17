export default {
  name: "partner",
  title: "Partners",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Partner Logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
  ],
  preview: {
    select: {
      media: "image",
      subtitle: "description",
    },
    prepare({ media, subtitle }: any) {
      return {
        title: "Partner",
        subtitle,
        media,
      };
    },
  },
};
