import { motion } from 'framer-motion';
import { ComputerCanvas } from './canvas';

const Hero = () => {
	const resumeUrl = `${import.meta.env.BASE_URL}Kenneth_Cudia_Resume.pdf`;

	return (
		<section className='hero-section'>
			<div className='hero-header'>
				<div className='hero-header-pin'>
					<div className='hero-header-dot' />
					<div className='hero-header-line' />
				</div>

				<div>
					<h1>
						Hi, I'm <span className='text-blue-primary'>Kenneth</span>
					</h1>
					<p>
						Frontend Engineer building React apps and 3D&nbsp;web
						experiences with Three.js/WebGL for global users.
					</p>
					<div className='mt-4'>
						<a
							href={resumeUrl}
							target='_blank'
							rel='noreferrer'
							className='hero-resume-button'
						>
							Download Resume
						</a>
					</div>
				</div>
			</div>

			<div className='computer-canvas'>
				<ComputerCanvas />
			</div>

			<div className='bottom-button'>
				<a href='#about'>
					<div className='bottom-button-content'>
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className='bottom-button-ball'
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
