"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => (
	<section className={`${styles.paddings}`} id="explore">
		Explore section
	</section>
);

export default Explore;
