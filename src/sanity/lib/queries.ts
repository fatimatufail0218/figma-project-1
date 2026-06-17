export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  image,
  icon,
}`;

export const partnersQuery = `*[_type == "partner"] | order(order asc) {
  _id,
  title,
  image,
  description,
}`;


export const caseStudiesQuery = `*[_type == "caseStudy"] | order(date desc) {
  _id,
  heading,
  date,
  image,
  description,
  "slug": slug.current
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  heading,
  date,
  image,
  description,
  body
}`;