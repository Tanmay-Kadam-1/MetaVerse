"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col`}
		>
			<motion.div>
				<div className="  w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"></div>
			</motion.div>
		</motion.div>
	</section>
);

export default World;
