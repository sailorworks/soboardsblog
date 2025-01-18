"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepItemProps {
  step: Step;
  index: number;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Step 1",
    description:
      "We lay out a 3-4 month plan for organic sales. Including every type of content that can be created with minimal involvement. Exception being the preference of the client.",
  },
  {
    number: 2,
    title: "Step 2",
    description: "3-4 clients per month. Using our sales technique.",
  },
  {
    number: 3,
    title: "Step 3",
    description:
      "Data analysis, and using our assets to drive accelerated results in the early stages. Gain momentum, and find the crack for every OOH.",
  },
];

const StepItem: React.FC<StepItemProps> = ({ step, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center mb-16 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Circle indicator */}
      <motion.div
        className="absolute left-4 w-8 h-8 bg-purple-500 rounded-full md:left-1/2 md:-ml-4"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        <div className="w-2 h-2 bg-gray-900 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 ${
          index % 2 === 0 ? "md:pr-16" : "md:pl-16"
        }`}
      >
        <motion.div
          className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          initial={{ x: index % 2 === 0 ? -50 : 50 }}
          animate={isInView ? { x: 0 } : { x: index % 2 === 0 ? -50 : 50 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
          <p className="text-[#D1D5DB]">{step.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-4xl font-bold mb-16 text-white">
          How It{" "}
          <span className="bg-purple-500/20 text-purple-300 px-2">Works</span>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 w-1 h-full bg-gray-700 md:left-1/2 md:-ml-0.5" />

          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
