import { useState, useEffect } from "react";

export default function BlogApp() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    setPosts(savedPosts);
  }, []);

  const addPost = () => {
    if (title.trim() === "" || content.trim() === "") return;
    const newPost = { id: Date.now(), title, content };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    setTitle("");
    setContent("");
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Simple Blog App</h1>
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        ></textarea>
        <button
          onClick={addPost}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Post
        </button>
      </div>
      <div className="w-full max-w-md mt-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow rounded mb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
            <button
              onClick={() => deletePost(post.id)}
              className="mt-2 text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
