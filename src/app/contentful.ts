import { createClient } from 'contentful';


const client = createClient({
    space: 'e8ftnq4591uc',
    accessToken: 'jJNKUQVZXmnGnf1IQqmZk4vH86IBgl5kGpC-KPk2aIw',
  })
  
  export const fetchNews = async () => {
    try {
      const res = await client.getEntries({ content_type: 'News Cards' });
      return res.items;
    } catch (error) {
      console.error('Error fetching news posts:', error);
      throw new Error('Failed to fetch news posts.');
    }
  }
  