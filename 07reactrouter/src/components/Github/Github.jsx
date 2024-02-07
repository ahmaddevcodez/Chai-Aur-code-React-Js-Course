import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen text-gray-900 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Github Profile</h1>
        <p className="text-lg text-gray-600">
          Explore information about the user
        </p>
      </div>

      <div className="text-center bg-black p-8 rounded-lg shadow-lg text-white">
        <img
          src={data.avatar_url}
          alt="Git Pic"
          className="rounded-full mx-auto mb-4"
          width={150}
        />
        <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
        <p className="text-lg text-white">{data.bio}</p>

        <div className="mt-6">
          <div className="text-2xl font-bold text-white">
            Github Followers: {data.followers}
          </div>
          <div className="text-xl text-white">
            Public Repositories: {data.public_repos}
          </div>
          <div className="text-xl text-white">
            Location: {data.location || "Not specified"}
          </div>
        </div>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/tahirwaleed399");
  return response.json();
};
