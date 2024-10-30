import React from "react";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import GradualSpacing from "@/components/ui/gradual-spacing";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-24%] h-[100%] skew-y-12"
        )}
      />
      <section className="container flex flex-col gap-4 items-center z-50 -mt-24 p-4">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-tight bg-gradient-to-b from-black to-gray-400/50  dark:from-white dark:to-gray-900/80 bg-clip-text text-transparent md:text-7xl md:leading-[5rem]"
          text="Goal Quest"
        />
        <h2 className="text-lg font-medium text-gray-600 dark:text-gray-400">
          Stay on Track, Reach Your Goals.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl">
          Set goals, track progress, and stay motivated with real-time charts
          and reminders—all in one simple, open-source platform. Get started and
          watch your journey unfold!
        </p>
        <RainbowButton className="w-fit rounded-md">Get Started</RainbowButton>
      </section>
    </main>
  );
};

export default Home;
