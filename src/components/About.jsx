import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p variants={fadeIn('', '', 0.2, 1)} className='about-text'>
				Frontend Engineer with 5+&nbsp;years building React apps and
				interactive 3D&nbsp;experiences.
				<br />
				I focus on performant, responsive interfaces, SaaS dashboards, and
				booking flows for global users.
				<br />
				My strengths are React architecture, frontend performance, and
				Three.js/WebGL‑based real‑time 3D&nbsp;visualizations.
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
