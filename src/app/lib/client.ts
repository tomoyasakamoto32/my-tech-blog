import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
  customFetch: (input, init) => {
    if (typeof input === 'string') {
      const newInput = new URL(input);
      const time = new Date();
      newInput.searchParams.set('cacheclearparam', `${time.getMinutes()}`);
      return fetch(newInput.href, init);
    }
    return fetch(input, init);
  },
});
