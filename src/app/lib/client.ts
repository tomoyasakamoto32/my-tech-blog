import { createClient } from 'microcms-js-sdk';

const MICROCMS_SERVICE_DOMAIN = 'aq9lf0scld';

export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});
