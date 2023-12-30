import PostUser from "@/components/postUser/PostUser";
import Image from "next/image";
import React, { Suspense } from "react";

const getData = async (slug: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Error with Blog API");
  }

  return res.json();
};

const SingleBlog = async ({ params }: { params: { slug: number } }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className="flex">
      <div className="flex-[1]">
        <div className="relative h-[500px] w-full">
          <Image src="/post.jpg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex-[2] px-[80px]">
        <h1 className="font-bold text-[40px]">{post.title}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post.userId} />
        </Suspense>
        <div className="mt-[50px]">{post.body}</div>
      </div>
    </div>
  );
};

export default SingleBlog;
