import React from 'react';
import renderHTML from 'react-render-html';

const CardComponent = ({ title, desc, columns, bgType, link }) => {
  // TYPES:
  // 0|Normal
  // 1|Contrast
  // 2|Primary-Secondary
  // 3|Secondary-Primary
  let bgColor = '';
  switch (+bgType) {
    // case 0 should not alter.
    case 1: {
      bgColor = 'contrast';
      break;
    }
    case 2: {
      bgColor = 'primary-secondary';
      break;
    }
    case 3: {
      bgColor = 'secondary-primary';
      break;
    }
  }
  const classes = [`is-${columns} ${bgColor}`];

  return (
    <div className="card-row-item" className={classes}>
      <h6 className="card-item-title">{title}</h6>
      {desc && <div className="card-item-desc">{renderHTML(desc)}</div>}

      {link && Object.keys(link).length > 0 && (
        <div className="card-link">
          <a
            href={link.uri}
            target={link.options.isExternal ? '_blank' : '_self'}
          >
            {link.title || link.uri}
          </a>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
