'use client'
import React, { useEffect, useState } from "react";
import { GetStaticProps } from 'next'
import { fetchNewArticles } from "@/utils/functions";
import { FC } from 'react'


const Article: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const fetchData = async () => {

      try {
        const temp = await fetchNewArticles();
        const test = temp.map((test: any) =>({
          
        }))
        console.log("try i article")
        console.log(test)
      } catch (error) {
        setError("Failed to fetch news posts.");
      }

    }
    fetchData();
  }, []);

 
  return(
    <>
      <p>hej</p>
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