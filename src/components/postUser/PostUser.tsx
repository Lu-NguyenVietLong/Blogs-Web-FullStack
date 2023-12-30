import React from "react";

const getUser = async (userId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("Error with Blog API");
  }

  return res.json();
};

const PostUser = async ({ userId }: { userId: number }) => {
  const user = await getUser(userId);
  console.log("sss", user);

  return (
    <div>
      <div className="flex">
        <div>
          <p className="text-[#636060]">Author</p>
          <p className="text-[14px]">{user.username}</p>
        </div>
        <div className=" ml-[20px]">
          <p className="text-[#636060]">Published</p>
          <p className="text-[14px]">30-12-2023</p>
        </div>
      </div>
    </div>
  );
};

export default PostUser;
