import PropTypes from 'prop-types';

export const formatTitle = (title, limit = 17) => {
	let string = '';
	if (title.length > limit) {
		string = title.slice(0, 17);
		return string + '...';
	} else {
		return title;
	}
};

formatTitle.propTypes = {
	title: PropTypes.string.isRequired,
	limit: PropTypes.number.isRequired
};
