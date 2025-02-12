"use client";

import { motion } from "framer-motion";

export default function MessageDescription() {
  return (
    <motion.div initial={{ y: 30 }} animate={{ y: 0 }}>
      <h1 className="text-4xl font-primary mb-6 ">Message Board</h1>
      <p className="font-primary mb-6">Feel free to say something!</p>
    </motion.div>
  );
}