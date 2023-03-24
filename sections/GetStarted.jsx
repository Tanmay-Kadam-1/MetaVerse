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
				className="w-[90%] h-[90%] object-contain"
			/>
		</motion.div>{" "}
	</section>
);

export default GetStarted;
