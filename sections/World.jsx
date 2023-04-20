"use client";

import { motion } from "framer-motion";

const World = () => <section>    <motion.div
variants={staggerContainer}
initial="hidden"
whileInView="show"
viewport={{ once: false, amount: 0.25 }}
className={`${styles.innerWidth} mx-auto flex flex-col`}
>

<TypingText title="| People on the World" textStyles="text-center" />
<TitleText
  title={(
    <>Track friends around you and invite them to play together in the same
      world
    </>
  )}
  textStyles="text-center"
/></section>;

export default World;
