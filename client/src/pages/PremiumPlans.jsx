import React from "react";
import { CheckIcon } from "lucide-react";
import { premiumPlans, testimonials } from "../utils/mockData";
import { useAuth } from "../context/AuthContext";

const PremiumPlans = () => {
  const { isAuthenticated, login } = useAuth();
  return (
    <div className="bg-gray-50 w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Elevate Your Calisthenics Journey
          </h1>
          <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
            Get personalized coaching, premium content, and direct access to
            expert coaches to accelerate your progress.
          </p>
        </div>
      </section>
      {/* Pricing Plans */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Choose Your Coaching Plan
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Select the level of coaching and support that best fits your goals
              and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                  plan.recommended ? "border-indigo-500" : "border-transparent"
                }`}
              >
                {plan.recommended && (
                  <div className="bg-indigo-500 text-white text-center py-2 font-medium">
                    Recommended
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="ml-1 text-xl font-medium text-gray-500">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="mt-5 text-gray-600">{plan.description}</p>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <button
                      onClick={isAuthenticated ? undefined : login}
                      className={`w-full px-6 py-3 rounded-lg font-medium text-lg ${
                        plan.recommended
                          ? "bg-indigo-600 text-white hover:bg-indigo-700"
                          : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                      } transition duration-300`}
                    >
                      {isAuthenticated
                        ? "Subscribe Now"
                        : "Sign Up & Subscribe"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What's Included in Premium
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our premium coaching plans are designed to provide you with
              everything you need to succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Personalized Training Plans
              </h3>
              <p className="mt-2 text-gray-600">
                Custom workout routines tailored to your specific goals, fitness
                level, and available equipment.
              </p>
            </div>
            {/* More features... */}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              See what our members have achieved with premium coaching.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-md"
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
      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Get answers to common questions about our premium coaching plans.
            </p>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Can I cancel my subscription at any time?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, you can cancel your subscription at any time. There are no
                long-term commitments, and you'll continue to have access until
                the end of your billing period.
              </p>
            </div>
            {/* More FAQs... */}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Take Your Training to the Next Level?
          </h2>
          <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
            Join our premium coaching program today and start achieving results
            you never thought possible.
          </p>
          <div className="mt-8">
            <button
              onClick={isAuthenticated ? undefined : login}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-indigo-50 transition duration-300"
            >
              {isAuthenticated ? "View Pricing Plans" : "Sign Up Now"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumPlans;
