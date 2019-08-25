import React from 'react';
import NewsLetter from '../../../ui/misc/NewsLetter';
import Heading from '../../../ui/misc/Heading';
import List from '../bestSales/List';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BestSales = ({ products }) => {
	return (
		<section className="sales__wrapper">
			<Heading
				span="best"
				main="sales"
				content="lorem Ipsum is simply dummy text of the printing and typesetting
       industry"
			/>
			<List products={products} />
			<NewsLetter />
		</section>
	);
};

const mapStateToProps = state => ({
	products: state.products
});

BestSales.propTypes = {
	products: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(BestSales);
