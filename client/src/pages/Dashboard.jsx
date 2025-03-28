import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  TrendingUpIcon,
  BookOpenIcon,
  MessageCircleIcon,
  BellIcon,
  UserIcon,
  ClockIcon,
  VideoIcon,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import {
  courses,
  workoutProgress,
  upcomingCoachingSessions,
} from "../utils/mockData";

const Dashboard = () => {
  const { user, isAuthenticated, login } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Sign in to access your dashboard
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          You need to be logged in to view your personalized dashboard and track
          your progress.
        </p>
        <button
          onClick={login}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
        >
          Sign In
        </button>
      </div>
    );
  }

  const inProgressCourses = courses.filter((course) => course.progress > 0);

  return (
    <div className="bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name}
            </h1>
            <p className="text-gray-600 mt-1">
              Continue your calisthenics journey
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="relative mr-4">
              <BellIcon className="h-6 w-6 text-gray-500" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center">
              {user?.profileImage ? (
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <UserIcon className="h-10 w-10 p-2 rounded-full border border-gray-300" />
              )}
              <span className="ml-2 text-gray-700 font-medium">
                {user?.name}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Your Progress
                </h2>
                <div className="text-sm font-medium text-indigo-600">
                  Last 8 weeks
                </div>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <TrendingUpIcon className="h-12 w-12 mx-auto text-indigo-500" />
                  <p className="mt-2">
                    Progress chart visualization would appear here
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Strength</p>
                  <p className="text-xl font-bold text-indigo-600">80%</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Skill</p>
                  <p className="text-xl font-bold text-indigo-600">65%</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Mobility</p>
                  <p className="text-xl font-bold text-indigo-600">75%</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Continue Learning
                </h2>
                <Link
                  to="/courses"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  View all courses
                </Link>
              </div>
              {inProgressCourses.length > 0 ? (
                <div className="space-y-4">
                  {inProgressCourses.map((course) => (
                    <div
                      key={course.id}
                      className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-32 w-full sm:w-48 object-cover rounded-md mb-4 sm:mb-0"
                      />
                      <div className="sm:ml-4 flex-grow">
                        <h3 className="font-semibold text-gray-900">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {course.description}
                        </p>
                        <div className="mt-2">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-indigo-600 h-2.5 rounded-full"
                                style={{
                                  width: `${course.progress}%`,
                                }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              {course.progress}%
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <BookOpenIcon className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No courses in progress
                  </h3>
                  <p className="mt-1 text-gray-500">
                    Start learning by enrolling in one of our courses
                  </p>
                  <Link
                    to="/courses"
                    className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                  >
                    Browse Courses
                  </Link>
                </div>
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Today's Workout
                </h2>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                  View full plan
                </button>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">
                    Upper Body Strength
                  </h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                    45 min
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                        <span className="text-indigo-600 font-medium">1</span>
                      </div>
                      <span className="text-gray-700">Push-up Progression</span>
                    </div>
                    <span className="text-gray-500">4 x 8-12 reps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                        <span className="text-indigo-600 font-medium">2</span>
                      </div>
                      <span className="text-gray-700">Triceps Dips</span>
                    </div>
                    <span className="text-gray-500">3 x 10-15 reps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Upcoming Sessions
              </h2>
              {upcomingCoachingSessions.length > 0 ? (
                <div className="space-y-4">
                  {upcomingCoachingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="border border-gray-200 rounded-lg p-4 flex items-center"
                    >
                      <ClockIcon className="h-8 w-8 text-indigo-600 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {session.title}
                        </h3>
                        <p className="text-sm text-gray-600">{session.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <VideoIcon className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No upcoming sessions
                  </h3>
                  <p className="mt-1 text-gray-500">
                    Check back later for your upcoming sessions
                  </p>
                </div>
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Notifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageCircleIcon className="h-6 w-6 text-indigo-600 mr-4" />
                    <p className="text-sm text-gray-600">
                      You have a new message from your coach.
                    </p>
                  </div>
                  <span className="text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CalendarIcon className="h-6 w-6 text-indigo-600 mr-4" />
                    <p className="text-sm text-gray-600">
                      Your next workout is scheduled for tomorrow at 9:00 AM.
                    </p>
                  </div>
                  <span className="text-gray-500">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
