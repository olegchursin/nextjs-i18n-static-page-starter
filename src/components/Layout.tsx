import i18next from 'i18next';
import Head from 'next/head';

import LanguageMenu from './LanguageMenu';

const Layout: React.FC<any> = function ({ children }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta name="og:title" content={i18next.t('siteMeta.title')} />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>{' '}
				<title>{i18next.t('siteMeta.title')}</title>
			</Head>
			<LanguageMenu />

			<header>
				<h1>{i18next.t('siteMeta.title')}</h1>
			</header>

			<main>{children}</main>
		</>
	);
};
export default Layout;
