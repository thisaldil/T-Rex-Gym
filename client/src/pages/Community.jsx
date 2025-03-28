import React, { useState } from "react";
import { SearchIcon, MessageCircleIcon, PlusIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { communityPosts } from "../utils/mockData";

export const Community = () => {
  const { isAuthenticated, login } = useAuth();
  const [activeTab, setActiveTab] = useState("discussions");

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Join Our Community
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          Sign in to access our community forums, participate in discussions,
          and connect with other calisthenics enthusiasts.
        </p>
        <button
          onClick={login}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
        >
          Sign In to Join
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Community Forum
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Connect with fellow calisthenics enthusiasts, share your progress,
            and learn from others.
          </p>
        </div>
        {/* Community Tabs and Search */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button
                className={`py-4 px-6 text-sm font-medium whitespace-nowrap ${
                  activeTab === "discussions"
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("discussions")}
              >
                Discussions
              </button>
              <button
                className={`py-4 px-6 text-sm font-medium whitespace-nowrap ${
                  activeTab === "questions"
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("questions")}
              >
                Questions & Answers
              </button>
              <button
                className={`py-4 px-6 text-sm font-medium whitespace-nowrap ${
                  activeTab === "progress"
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("progress")}
              >
                Progress Updates
              </button>
              <button
                className={`py-4 px-6 text-sm font-medium whitespace-nowrap ${
                  activeTab === "challenges"
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("challenges")}
              >
                Weekly Challenges
              </button>
            </div>
          </div>
          <div className="p-4 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search discussions..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
              <PlusIcon className="h-4 w-4 mr-2" />
              New Post
            </button>
          </div>
        </div>
        {/* Community Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on desktop */}
          <div className="lg:col-span-2 space-y-6">
            {communityPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={post.user.image}
                    alt={post.user.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">
                      {post.user.name}
                    </h3>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.content}</p>
                <div className="mt-6 flex items-center space-x-6 text-sm">
                  <button className="text-gray-500 hover:text-gray-700 flex items-center">
                    <svg
                      className="h-5 w-5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      ></path>
                    </svg>
                    {post.likes} likes
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 flex items-center">
                    <MessageCircleIcon className="h-5 w-5 mr-1" />
                    {post.comments} comments
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    Share
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition duration-300">
                Load More
              </button>
            </div>
          </div>
          {/* Sidebar - 1/3 width on desktop */}
          <div className="space-y-8">
            {/* Community Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Community Stats
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Members</span>
                  <span className="font-medium text-gray-900">10,482</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Discussions</span>
                  <span className="font-medium text-gray-900">3,729</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Comments</span>
                  <span className="font-medium text-gray-900">28,493</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Online Now</span>
                  <span className="font-medium text-gray-900">143</span>
                </div>
              </div>
            </div>
            {/* Active Members */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Active Members
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="User"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Coach David
                    </p>
                    <p className="text-xs text-gray-500">342 posts</p>
                  </div>
                </div>
                {/* More Active Members... */}
              </div>
            </div>
            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Tags
              </h2>
              <div className="flex flex-wrap gap-2">{/* Tags... */}</div>
            </div>
            {/* Community Guidelines */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Community Guidelines
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Be respectful to others.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  No spam or irrelevant content.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Keep discussions on-topic.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
