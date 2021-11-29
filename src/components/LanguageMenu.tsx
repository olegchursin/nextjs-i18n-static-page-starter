import i18next from 'i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { languages } from '../i18n/config';

const LanguageMenu: React.FC = () => {
	const router = useRouter();
	const { pathname } = router;

	return (
		<div className="flex flex-wrap content-end text-gray-300">
			{languages.map((lang, index) => {
				const current = [
					'uppercase',
					i18next.language === lang ? 'text-blue-600' : ''
				];
				const path = pathname.replace(/\[lang\]/i, lang);

				return (
					<Link key={index} prefetch={false} href={pathname} as={path}>
						<a>{i18next.t(lang)}</a>
					</Link>
				);
			})}
		</div>
	);
};

export default LanguageMenu;
