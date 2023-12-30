import PostCard from "@/components/postCard/PostCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Error with Blog API");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className="grid grid-cols-4 gap-[50px]">
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
