import React from "react";
import { Link } from "react-router-dom";
import {
  CheckIcon,
  ArrowRightIcon,
  PlayIcon,
  BarChartIcon,
  UsersIcon,
  BookOpenIcon,
  AwardIcon,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { testimonials } from "../utils/mockData";

const Home = () => {
  const { isAuthenticated, login } = useAuth();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transform Your Body Using Only Your Bodyweight
              </h1>
              <p className="mt-4 text-xl text-indigo-100">
                Join our calisthenics platform for personalized coaching,
                structured workouts, and a supportive community.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {isAuthenticated ? (
                  <Link
                    to="/dashboard"
                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-indigo-50 transition duration-300 text-center"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <button
                    onClick={login}
                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-indigo-50 transition duration-300"
                  >
                    Start Your Journey
                  </button>
                )}
                <Link
                  to="/courses"
                  className="border border-white text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-indigo-600 transition duration-300 text-center"
                >
                  Explore Free Courses
                </Link>
              </div>
              <div className="mt-8 flex items-center">
                <PlayIcon className="h-12 w-12 p-2 bg-white text-indigo-600 rounded-full mr-4" />
                <p className="text-indigo-100">
                  Watch our introduction video to see how CaliFit works
                </p>
              </div>
            </div>
            <div className="md:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Calisthenics training"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        {/* Stats Bar */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold">10,000+</p>
                <p className="text-indigo-100">Active Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-indigo-100">Expert Coaches</p>
              </div>
              <div>
                <p className="text-3xl font-bold">200+</p>
                <p className="text-indigo-100">Video Tutorials</p>
              </div>
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-indigo-100">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Everything You Need to Master Calisthenics
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our platform provides all the tools and resources you need on your
              fitness journey.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-fit">
                <BookOpenIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Comprehensive Courses
              </h3>
              <p className="mt-2 text-gray-600">
                From beginner fundamentals to advanced techniques, our
                structured courses cover every aspect of calisthenics training.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-fit">
                <UsersIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Personal Coaching
              </h3>
              <p className="mt-2 text-gray-600">
                Get personalized workout plans, form checks, and direct access
                to expert coaches who will guide your progress.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-fit">
                <BarChartIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Progress Tracking
              </h3>
              <p className="mt-2 text-gray-600">
                Monitor your improvements with detailed analytics, workout logs,
                and milestone tracking to stay motivated.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-fit">
                <UsersIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Community Support
              </h3>
              <p className="mt-2 text-gray-600">
                Join a thriving community of like-minded individuals to share
                experiences, ask questions, and stay motivated.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-fit">
                <AwardIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Skill Achievements
              </h3>
              <p className="mt-2 text-gray-600">
                Unlock achievements as you master new skills and progress
                through different levels of calisthenics mastery.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-fit">
                <BookOpenIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Nutrition Guidance
              </h3>
              <p className="mt-2 text-gray-600">
                Access nutrition advice and meal planning resources designed to
                complement your calisthenics training.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Members Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join thousands of satisfied members who have transformed their
              fitness with CaliFit.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Fitness?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Join CaliFit today and start your journey toward mastering
              calisthenics.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-indigo-50 transition duration-300 text-center"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <button
                  onClick={login}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-indigo-50 transition duration-300"
                >
                  Start Your Journey
                </button>
              )}
              <Link
                to="/premium"
                className="border border-white text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-indigo-600 transition duration-300 flex items-center justify-center"
              >
                <span>View Premium Plans</span>
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
