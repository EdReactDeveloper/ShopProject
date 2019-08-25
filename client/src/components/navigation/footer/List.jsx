import React from 'react';
import './styles/List.scss';
import { FormattedMessage } from 'react-intl';

const items = [
	{ title: 'about us', link: '' },
	{ title: 'your feedback', link: '' },
	{ title: 'join us', link: '' },
	{ title: 'contact us', link: '' },
	{ title: 'terms and conditions', link: '' },
	{ title: 'live support', link: '' },
	{ title: 'support', link: '' },
	{ title: 'our privacy', link: '' }
];
const List = () => {
	const footerList = items.map((item, i) => (
		<li className="footer__item" key={i}>
			<a href={item.link} className="footer__item-link">
				<FormattedMessage id={item.title.split(' ').join('')} defaultMessage={item.title} />
			</a>
		</li>
	));

	return <ul className="footer__list">{footerList}</ul>;
};

export default List;
