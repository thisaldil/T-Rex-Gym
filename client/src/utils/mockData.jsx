import React from "react";
export const courses = [
  {
    id: "1",
    title: "Calisthenics Fundamentals",
    description:
      "Master the basics of bodyweight training with proper form and technique.",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 12,
    isPremium: false,
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    progress: 0,
  },
  {
    id: "2",
    title: "Push-Up Progression",
    description:
      "From wall push-ups to one-arm push-ups: a complete progression guide.",
    level: "Beginner to Advanced",
    duration: "6 weeks",
    lessons: 18,
    isPremium: false,
    image:
      "https://images.unsplash.com/photo-1598971639058-a09736fcd8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    progress: 25,
  },
  {
    id: "3",
    title: "Pull-Up Mastery",
    description:
      "Build strength and technique to achieve your first pull-up and beyond.",
    level: "Beginner to Intermediate",
    duration: "8 weeks",
    lessons: 24,
    isPremium: false,
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    progress: 0,
  },
  {
    id: "4",
    title: "Handstand Journey",
    description:
      "Learn the handstand progressively, from wall supports to freestanding.",
    level: "Intermediate",
    duration: "12 weeks",
    lessons: 36,
    isPremium: true,
    image:
      "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    progress: 0,
  },
  {
    id: "5",
    title: "Muscle-Up Training",
    description:
      "Comprehensive guide to achieving your first bar and ring muscle-ups.",
    level: "Advanced",
    duration: "10 weeks",
    lessons: 30,
    isPremium: true,
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    progress: 0,
  },
  {
    id: "6",
    title: "Calisthenics Mobility",
    description:
      "Improve your range of motion and prevent injuries with targeted mobility work.",
    level: "All Levels",
    duration: "4 weeks",
    lessons: 16,
    isPremium: false,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    progress: 50,
  },
];
export const premiumPlans = [
  {
    id: "basic",
    name: "Basic Coaching",
    price: 29,
    period: "month",
    description: "Perfect for beginners looking for structured guidance.",
    features: [
      "Access to all premium courses",
      "Monthly personalized workout plan",
      "Form check videos (2 per month)",
      "Email support",
      "Progress tracking tools",
    ],
    recommended: false,
  },
  {
    id: "pro",
    name: "Pro Coaching",
    price: 79,
    period: "month",
    description:
      "For serious athletes wanting to take their training to the next level.",
    features: [
      "Everything in Basic",
      "Weekly personalized workout plan",
      "Unlimited form check videos",
      "Nutrition guidance",
      "Direct messaging with coach",
      "Monthly 1-on-1 video call",
      "Priority support",
    ],
    recommended: true,
  },
  {
    id: "elite",
    name: "Elite Coaching",
    price: 199,
    period: "month",
    description: "The ultimate coaching experience for maximum results.",
    features: [
      "Everything in Pro",
      "Daily personalized workout plan",
      "Weekly 1-on-1 video calls",
      "Custom nutrition plan",
      "Custom mobility program",
      "Recovery protocols",
      "24/7 coach access",
      "Exclusive community access",
    ],
    recommended: false,
  },
];
export const testimonials = [
  {
    id: "1",
    name: "Sarah L.",
    role: "Pro Plan Member",
    content:
      "The personalized coaching has transformed my training. I finally achieved my first muscle-up after years of trying on my own!",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: "2",
    name: "Michael T.",
    role: "Basic Plan Member",
    content:
      "Even the free content is better than most paid programs I've tried. The structured progressions make everything achievable.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "3",
    name: "Jasmine K.",
    role: "Elite Plan Member",
    content:
      "The 1-on-1 coaching sessions have been game-changing. My form has improved tremendously and I'm now injury-free for the first time in years.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
  },
];
export const workoutProgress = [
  {
    week: "Week 1",
    strength: 30,
    skill: 20,
    mobility: 50,
  },
  {
    week: "Week 2",
    strength: 40,
    skill: 30,
    mobility: 55,
  },
  {
    week: "Week 3",
    strength: 45,
    skill: 40,
    mobility: 60,
  },
  {
    week: "Week 4",
    strength: 55,
    skill: 45,
    mobility: 65,
  },
  {
    week: "Week 5",
    strength: 60,
    skill: 55,
    mobility: 70,
  },
  {
    week: "Week 6",
    strength: 70,
    skill: 65,
    mobility: 75,
  },
  {
    week: "Week 7",
    strength: 75,
    skill: 70,
    mobility: 80,
  },
  {
    week: "Week 8",
    strength: 80,
    skill: 80,
    mobility: 85,
  },
];
export const upcomingCoachingSessions = [
  {
    id: "1",
    title: "Form Check & Progress Review",
    coach: "Coach Mike",
    date: "2023-10-15",
    time: "10:00 AM",
    duration: "30 minutes",
    platform: "Zoom",
  },
  {
    id: "2",
    title: "Handstand Technique Workshop",
    coach: "Coach Emma",
    date: "2023-10-18",
    time: "4:00 PM",
    duration: "45 minutes",
    platform: "Google Meet",
  },
];
export const communityPosts = [
  {
    id: "1",
    user: {
      name: "Alex",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    },
    title: "Achieved my first muscle-up today!",
    content:
      "After 6 months of consistent training with the muscle-up progression course, I finally got my first clean muscle-up! Thanks for all the support and tips from this amazing community.",
    likes: 24,
    comments: 8,
    time: "2 hours ago",
  },
  {
    id: "2",
    user: {
      name: "Jessica",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    title: "Form check: Handstand progression",
    content:
      "I've been working on wall handstands for 3 weeks now. Can someone check my form in this video? I feel like my shoulders aren't opening enough.",
    likes: 12,
    comments: 15,
    time: "5 hours ago",
  },
  {
    id: "3",
    user: {
      name: "Coach David",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    title: "Weekly challenge: 100 push-ups for 7 days",
    content:
      "Join our weekly challenge! 100 push-ups every day for 7 days. You can break them into as many sets as needed. Post your progress daily in the comments!",
    likes: 56,
    comments: 32,
    time: "1 day ago",
  },
];

export const mockData = {
  courses,
  premiumPlans,
  testimonials,
  workoutProgress,
  upcomingCoachingSessions,
  communityPosts,
};
