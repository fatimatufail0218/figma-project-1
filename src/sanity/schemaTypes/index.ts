import { type SchemaTypeDefinition } from 'sanity'
import service from "./service";
import partner from "./partner";
import caseStudy from "./caseStudy";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ service, partner, caseStudy],
}
