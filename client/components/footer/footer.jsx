import React from 'react';
import PropTypes from 'prop-types';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed',
  },
  {
    text: 'priority',
    id: 'priority',
  },
  {
    text: 'date',
    id: 'date',
  },
];

const Footer = ({ amount, activeFilter, changeFilter }) => (
  <div>
    <div className="footer">
      <span className="amount">{`${amount} Tasks left`}</span>
      <div className="btn-group">
        {FILTERS_BTN.map(({ text, id }) => (
          <button
            onClick={() => { changeFilter(id); }}
            key={id}
            className={id === activeFilter ? 'filter-btn active' : 'filter-btn'}
          >{text}</button>
        ))}
      </div>
    </div>

    <style jsx>{`
        .footer {
          position: relative;
          min-height: 50px;
          display: flex;
          align-items: center;
              padding: 0 6px 0 21px;
          justify-content: space-between;
        }
        
        .amount {
          font-size: 13.3333px;
        }
        
        .btn-group {
          position: relative;
          z-index: 1;
        }
        
        .filter-btn {
          margin: 3px;
          padding: 3px 7px;
          border: 1px solid transparent;
          border-radius: 3px;
          background-color: transparent;
          cursor: pointer;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
          border-color: rgba(175, 47, 47, 0.2);
        }
        
        .footer:before {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 50px;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                        0 8px 0 -3px #f6f6f6,
                        0 9px 1px -3px rgba(0, 0, 0, 0.2),
                        0 16px 0 -6px #f6f6f6,
                        0 17px 2px -6px rgba(0, 0, 0, 0.2);
        }
        `}</style>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
};

Footer.defaultProps = {
  changeFilter: () => {},
  amount: 0,
  activeFilter: 'all',
};

export default Footer;
