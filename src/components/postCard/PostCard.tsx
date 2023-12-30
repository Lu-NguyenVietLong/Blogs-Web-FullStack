import Image from "next/image";
import Link from "next/link";
import React from "react";

type IPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div className="text-center">
      <div className="relative w-full h-[400px]">
        <Image src="/post.jpg" fill alt="" className="object-cover" />
      </div>
      <h2 className="font-bold mt-[10px]">{post.title}</h2>
      <p className="text-[14px] mt-[5px] text-[#a8a5a5]">{post.body}</p>
      <Link
        className="underline mt-[15px] block text-[14px]"
        href={`/blog/${post.id}`}
      >
        READ MORE
      </Link>
    </div>
  );
};

export default PostCard;
