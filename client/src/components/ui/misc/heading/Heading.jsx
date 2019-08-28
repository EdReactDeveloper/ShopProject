import React from 'react';
import './Heading.scss';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Heading = ({ span, content, main, style }) => {
  return (
    <>
      <h2 className="heading" style={style}>
        <span>
          <FormattedMessage id={[span]} defaultMessage={span} />
        </span>
        <FormattedMessage id={[main]} defaultMessage={main} />
      </h2>
      <div className="heading__sub">
        <FormattedMessage id={[content.split(' ')[0]]} defaultMessage={content} />
      </div>
    </>
  );
};

Heading.propTypes = {
  span: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object
};

Heading.defaultProps = {
  style: {}
}

export default Heading;
