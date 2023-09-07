'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({imgUrl, title, subtitle, index}) => (
  <motion.div
    variant={fadeIn('up', 'spring', index * 0.5,1)}
    className="flex md:flex-row flex-col gap-4"
  >
    Insight Card
  </motion.div>
);

export default InsightCard;
