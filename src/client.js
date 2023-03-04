import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'whv3pbzj',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
});
