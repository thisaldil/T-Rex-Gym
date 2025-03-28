import React, { useState } from "react";
import {
  SearchIcon,
  FilterIcon,
  BookOpenIcon,
  ClockIcon,
  BarChartIcon,
  LockIcon,
} from "lucide-react";
import useAuth from "../context/AuthContext";
import { courses } from "../utils/mockData";

const Courses = () => {
  const { isAuthenticated, login } = useAuth();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) => {
    // Filter by category
    if (filter === "premium" && !course.isPremium) return false;
    if (filter === "free" && course.isPremium) return false;
    // Filter by search term
    if (
      searchTerm &&
      !course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !course.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Calisthenics Courses
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            From beginner basics to advanced techniques, explore our
            comprehensive library of calisthenics courses.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                filter === "all"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("all")}
            >
              All Courses
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                filter === "free"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("free")}
            >
              Free Courses
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                filter === "premium"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("premium")}
            >
              Premium
            </button>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover"
                  />
                  {course.isPremium && (
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center">
                      <LockIcon className="h-3 w-3 mr-1" />
                      Premium
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {course.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <BarChartIcon className="h-4 w-4 mr-1" />
                    <span>{course.level}</span>
                    <span className="mx-2">•</span>
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                    <span className="mx-2">•</span>
                    <BookOpenIcon className="h-4 w-4 mr-1" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  {course.progress > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-indigo-600 h-1.5 rounded-full"
                          style={{
                            width: `${course.progress}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div className="mt-6">
                    {course.isPremium && !isAuthenticated ? (
                      <button
                        onClick={login}
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
                      >
                        <LockIcon className="h-4 w-4 mr-2" />
                        Unlock with Premium
                      </button>
                    ) : course.progress > 0 ? (
                      <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300">
                        Continue Learning
                      </button>
                    ) : (
                      <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300">
                        Start Course
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <BookOpenIcon className="h-12 w-12 mx-auto text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No courses found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filters
            </p>
            <button
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
              onClick={() => {
                setSearchTerm("");
                setFilter("all");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
