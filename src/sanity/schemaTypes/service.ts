export default {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
  ],
};