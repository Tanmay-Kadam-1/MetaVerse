"use client";

const GetStarted = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={planetVariants("left")}
			className={`flex-1 ${styles.flexCenter}`}
		>
			<img
				src="/get-started.png"
				alt="get-started"
				className="w-[90%] h-[90%] object-"
			/>
			<motion.div
				variants={fadeIn("left", "", 0.2, 1)}
				className="flex-[0.75] ex justiy-center flex-col"
			></motion.div>
		</motion.div>{" "}
	</section>
);

export default GetStarted;
