import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div>
    <h1 className="title">{title}</h1>
    <style jsx>{`
        .title {
          font-family: 'Permanent Marker', cursive;
          font-size: 80px;
          text-align: center;
          font-weight: 900;
          color: rgba(175, 47, 47, 0.15);
          margin-bottom: 20px;
        }
        `}</style>
  </div>
);

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: 'Simple title',
};

export default Title;
