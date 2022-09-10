import logo from '~/assets/icons/logo.svg';

import { useUiStore } from '~/hooks';

export const HomePage = () => {
	const { darkMode, toggleDarkMode } = useUiStore();

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				paddingTop: '50px',
				color: darkMode ? '#fff' : '#000',
				backgroundColor: darkMode ? '#000' : '#fff',
				minHeight: '100vh',
			}}
		>
			<img src={logo} alt="Logo" style={{ height: '150px' }} />
			<ul
				style={{
					padding: 0,
					listStyle: 'none',
					fontSize: '1.6rem',
					display: 'flex',
					flexDirection: 'column',
					gap: '14px',
				}}
			>
				<li>🚀 Vite</li>
				<li>🔥 React</li>
				<li>📖 TypeScript</li>
				<li>🔨 Eslint</li>
				<li>💅 Prettier</li>
			</ul>
			<p>
				Don&apos;t forgot to install Eslint and Prettier in your VSCode
			</p>
			<div>
				<a
					style={{ color: '#F24C4C' }}
					target="_blank"
					href="https://github.com/igdev116/vite-react-ts-eslint-prettier"
					rel="noreferrer"
				>
					Github
				</a>
			</div>

			<div style={{ marginTop: '20px' }}>
				<p>Dark mode</p>

				<label className="switch">
					<input type="checkbox" onChange={toggleDarkMode} />
					<span className="slider round" />
				</label>
			</div>
		</div>
	);
};
