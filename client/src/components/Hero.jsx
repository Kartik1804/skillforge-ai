import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-[80vh] px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold leading-tight"
      >
        AI Powered
        <br />
        Developer Career OS
      </motion.h1>

      <p className="mt-6 text-xl text-gray-400 max-w-3xl">
        Build projects, create resumes, crack interviews,
        track progress and become industry ready with one platform.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition">
          Get Started
        </button>

        <button className="px-8 py-4 rounded-xl border border-gray-500 hover:border-cyan-500 transition">
          GitHub
        </button>
      </div>
    </section>
  );
}