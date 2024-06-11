import { createClient } from 'contentful'

// const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID as string,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
//   })

// export const fetchNewArticles = async () => {
//   try {
//     const res = await client.getEntries({ content_type: 'test' });
//     return res.items;
//   } catch (error) {
//     console.error('Error fetching news posts:', error);
//     throw new Error('Failed to fetch news posts.');
//   }
// }

export async function fetchNewArticles() {

  const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
    })

    const res = await client.getEntries({ content_type: 'test' })

    return {
      props: {
        articles: res.items
      }
    }
}