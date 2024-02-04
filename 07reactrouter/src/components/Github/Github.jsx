import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-900 min-h-screen text-white p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Github Profile</h1>
        <p className="text-lg">Explore information about the user</p>
      </div>

      <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
        <img
          src={data.avatar_url}
          alt="Git Pic"
          className="rounded-full mx-auto mb-4"
          width={150}
        />
        <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
        <p className="text-lg">{data.bio}</p>

        <div className="mt-6">
          <div className="text-2xl font-bold">
            Github Followers: {data.followers}
          </div>
          <div className="text-xl">
            Public Repositories: {data.public_repos}
          </div>
          <div className="text-xl">
            Location: {data.location || "Not specified"}
          </div>
        </div>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
