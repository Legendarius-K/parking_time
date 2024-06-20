// pages/article.js (or pages/article/index.js if using directory structure)
import { useRouter } from 'next/navigation';




const article = ({params}) => {

  console.log("params i article " + {params})

  // Optional: Replace this with actual data fetching logic based on 'article'
  // For example, fetching article content from an API based on 'article' parameter

  return (
    <div>
      <h1>Article: {params.article}</h1>
    </div>
  );
};

export default article;