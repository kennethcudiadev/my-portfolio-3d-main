import {
	astro,
	freelance,
	github_alt,
	javascript,
	linkedin,
	nextjs,
	reactjs,
	tailwind,
	threejs,
	typescript,
	vite,
	vaniday,
	zakeke,
} from '../assets';

const base = (import.meta.env.BASE_URL || '/').replace(/\/*$/, '') + '/';

// Defaults when env does not load; keep in sync with .env
const DEFAULT_GITHUB_URL = 'https://github.com/kennethcudiadev';
const DEFAULT_LINKEDIN_URL = 'https://www.linkedin.com/in/kenneth-cudia-dev';

const githubUrl = (() => {
	const fromEnv = String(import.meta.env.VITE_APP_GITHUB_URL || '').trim();
	if (fromEnv && fromEnv !== 'https://github.com') return fromEnv;
	const fromUser = String(import.meta.env.VITE_APP_GITHUB_USER || '').trim();
	const built = fromUser
		? `https://github.com/${fromUser}`.replace(/\/?$/, '')
		: '';
	if (built && built !== 'https://github.com') return built;
	return DEFAULT_GITHUB_URL;
})();

const linkedinUrl = (() => {
	const raw = String(
		import.meta.env.VITE_APP_LINKEDIN_URL ||
			import.meta.env.VITE_APP_LINKEDIN_USER ||
			''
	).trim();
	if (!raw) return DEFAULT_LINKEDIN_URL;
	return raw.startsWith('http') ? raw : `https://${raw.replace(/^\/+/, '')}`;
})();

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const technologies = [
	{
		name: 'React',
		icon: reactjs,
	},
	{
		name: 'Next.js',
		icon: nextjs,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'JavaScript (ES6+)',
		icon: javascript,
	},
	{
		name: 'Three.js',
		icon: threejs,
	},
	{
		name: 'React Three Fiber',
		icon: astro,
	},
	{
		name: 'WebGL',
		icon: vite,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
];

const experiences = [
	{
		title: 'Frontend Developer',
		company_name: 'Vaniday',
		icon: vaniday,
		iconBg: '#383E56',
		date: 'Mar 2023 – Present',
		points: [
			'Built booking flows and merchant dashboards with React, Next.js, and TypeScript for a global marketplace.',
			'Created reusable UI components and layouts to speed up development and keep the UI consistent.',
			'Implemented responsive interfaces and integrated REST APIs for booking, scheduling, and merchant tools.',
			'Improved performance by refactoring React code and optimizing rendering.',
		],
	},
	{
		title: '3D Web Developer',
		company_name: 'Zakeke',
		icon: zakeke,
		iconBg: '#383E56',
		date: 'Apr 2022 – Feb 2023',
		points: [
			'Built browser‑based 3D product configurators integrated into React e‑commerce pages.',
			'Created interactive Three.js/WebGL product viewers with camera controls and material customization.',
			'Optimized GLTF/GLB assets and rendering pipelines to reduce load times and improve performance.',
		],
	},
	{
		title: 'Freelance 3D Web Developer',
		company_name: 'Self‑employed',
		icon: freelance,
		iconBg: '#383E56',
		date: 'Jun 2020 – Mar 2022',
		points: [
			'Delivered interactive WebGL marketing experiences for startups and small businesses.',
			'Built 3D landing heroes and animations with Three.js and React Three Fiber.',
			'Created reusable 3D components and optimized assets for fast, cross‑browser performance.',
		],
	},
];

// Add project: put image in public/projects/, then add one object below. Use source_code_link: '#' if private.
const projects = [
	{
		name: 'Global Disaster Risk Explorer',
		description:
			'Interactive 3D globe for exploring earthquake data worldwide. Filter by year and magnitude, view USGS data with charts and optional density heatmap.',
		tags: [
			{ name: 'react', color: 'blue-text-gradient' },
			{ name: 'threejs', color: 'green-text-gradient' },
			{ name: 'typescript', color: 'pink-text-gradient' },
		],
		image: `${base}projects/project4.jpg`,
		source_code_link:
			'https://github.com/kennethcudiadev/DisasterExplorer-main',
		website_link: 'https://disaster-explorer-main.vercel.app/',
	},
	{
		name: 'Shoe Configurator',
		description:
			'Browser-based 3D shoe configurator for e-commerce. Customize materials and colors in real time with Three.js and React, optimized for product presentation.',
		tags: [
			{ name: 'react', color: 'blue-text-gradient' },
			{ name: 'threejs', color: 'green-text-gradient' },
			{ name: 'glb', color: 'pink-text-gradient' },
		],
		image: `${base}projects/project2.jpg`,
		source_code_link: 'https://github.com/kennethcudiadev/shoe-configurator',
		website_link:
			'https://shoe-configurator-aalm-7ri2lkd9e-kennethcudiadevs-projects.vercel.app/',
	},
	{
		name: '3D Interior Floor Plan Configurator',
		description:
			'Interactive 3D room planner built with React Three Fiber, Drei, and GSAP. Users can edit floor plans, place furniture, explore layouts in real time, and view dynamic cost updates for a more practical interior planning experience.',
		tags: [
			{ name: 'react', color: 'blue-text-gradient' },
			{ name: 'r3f', color: 'green-text-gradient' },
			{ name: 'gsap', color: 'pink-text-gradient' },
		],
		image: `${base}projects/project3.jpg`,
		source_code_link:
			'https://github.com/kennethcudiadev/Interactive-3D-Room-Planner',
		website_link: 'https://interactive-3-d-room-planner.vercel.app/',
	},
	{
		name: 'Globe',
		description:
			'Interactive 3D globe built with React and Three.js. Explore a WebGL-powered globe visualization with smooth camera controls and real-time rendering.',
		tags: [
			{ name: 'react', color: 'blue-text-gradient' },
			{ name: 'threejs', color: 'green-text-gradient' },
			{ name: 'webgl', color: 'pink-text-gradient' },
		],
		image: `${base}projects/project1.jpg`,
		source_code_link: '#',
		website_link: 'https://globe-alpha-seven.vercel.app/',
	},
];

const socials = [
	{
		name: 'linkedin',
		icon: linkedin,
		link: linkedinUrl,
	},
	{
		name: 'github',
		icon: github_alt,
		link: githubUrl,
	},
];

export { experiences, projects, socials, technologies };
