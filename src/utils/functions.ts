import { createClient } from 'contentful';

// const client = createClient({
//     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY as string,
// })

const client = createClient({
  space: 'lfi9rred70pl',
  accessToken: '5f7nwoM_rpxKGtW2lx1qRSca3QvJ3HxfrcqAosyAV4A',
})

export const fetchTestimonials = async () => {
  try {
    const res = await client.getEntries({ content_type: 'testimonial' });
    return res.items;
  } catch (error) {
    console.error('Error fetching news posts:', error);
    throw new Error('Failed to fetch news posts.');
  }
}
