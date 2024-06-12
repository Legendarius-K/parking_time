'use client'
import React, { useEffect, useState } from "react";
import { fetchNewArticles } from "@/utils/functions";

interface Post {
  id: string;
  title: string;
}

const Article: React.FC = () => {
  const [newsPosts, setNewsPosts] = useState<Post[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const temp = await fetchNewArticles();
        const test = temp.map((temp: any) =>({
          id: temp.sys.id,
          title: temp.fields.title,
        }))
        setNewsPosts(test);
        console.log("try i article")
        console.log(test)
      } catch (error) {
        console.log("error något gick fel")
      }

    }
    fetchData();
  }, []);

 
  return(
    <>
      <div>
        {newsPosts.map((post: any) => (
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Article;


// console.log(" Conlog från contentful "+ test)
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const posts = await fetchNewsPosts();
//       const formattedPosts = posts.map((post: any) => ({
       
//       }));
//       setNewsPosts(formattedPosts);
//     } catch (err) {
//       setError("Failed to fetch news posts.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, []);









// "use client";
// import React, { useEffect, useState } from "react";
// import { fetchNewArticles } from "@/utils/functions";
// import { FC } from 'react'

// interface Article {
//   title: string,
//   id: string,
//   // date: string,
//   // articleContent: string,
//   // slug?: string,
//   // thumbnail: string,
//   // featuredImage: string,
// }

// const Article: React.FC = () => {
//   const [newsPosts, setNewsPosts] = useState<Article[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);


// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const posts = await fetchNewArticles();
//       const formattedPosts = posts.map((post: any) => ({
//         id: post.sys.id,
//         title: post.fields.title,
//       }));
//       setNewsPosts(formattedPosts);
//       console.log(formattedPosts)
//     } catch (err) {
//       setError("Failed to fetch news posts.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();

// }, []);


// if (loading) {
//   return <div>Loading...</div>;
// }

// if (error) {
//   return <div>{error}</div>;
// }


// }

// export default Article;