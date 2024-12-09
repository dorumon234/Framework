"use client"; // To enable React hooks in this file

import { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  body: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Record<number, Comment[]>>({});
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${POSTS_PER_PAGE}`
        );
        setPosts(response.data as Post[]);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentPromises = posts.map((post) =>
          axios.get(
            `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
          )
        );
        const results = await Promise.all(commentPromises);
        const newComments = results.reduce((acc, result, index) => {
          acc[posts[index].id] = (result.data as Comment[]).slice(0, 2); // Show only the top 2 comments
          return acc;
        }, {} as Record<number, Comment[]>);

        setComments(newComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (posts.length > 0) {
      fetchComments();
    }
  }, [posts]);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border p-4 bg-white shadow rounded-lg space-y-2"
          >
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.body}</p>
            <h3 className="text-sm font-medium text-gray-600 mt-2">Top Comments:</h3>
            <ul className="list-disc ml-6">
              {comments[post.id]?.map((comment) => (
                <li key={comment.id} className="text-gray-700">
                  {comment.body}
                </li>
              )) || <p className="text-gray-500">Loading comments...</p>}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={handlePreviousPage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
