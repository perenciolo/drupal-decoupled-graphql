import React from 'react';
import renderHTML from 'react-render-html';

export default function HeroCard({ data }) {
  const {
    id,
    field_pdc_gic_title,
    field_pdc_gci_description,
    field_hc_show_scrollbar,
    field_pdc_gic_image: { alt, height, width, title, url },
    field_hc_show_image_on_right,
    primary_cta,
    secondary_cta,
  } = data;

  return (
    <div
      className={`container${
        +field_hc_show_image_on_right === 0 ? ' reverse' : ''
      }`}
    >
      <div className="side-left">
        <div className="wrapper">
          <h2>{field_pdc_gic_title}</h2>
          <div
            className={+field_hc_show_scrollbar === 1 ? 'show-scrollbar' : ''}
          >
            {field_pdc_gci_description && renderHTML(field_pdc_gci_description)}
          </div>
          {Boolean(primary_cta && Object.keys(primary_cta).length) && (
            <div className="btn_wrapper">
              {/* Primary CTA */}
              <a
                href={primary_cta.uri}
                target={primary_cta.options.isExternal ? '_blank' : '_self'}
                className={`cta--primary ${
                  secondary_cta && secondary_cta.length > 1 ? 'cta__block' : ''
                }`}
              >
                {primary_cta.title}
              </a>
              {/* Secondary CTA */}
              {secondary_cta &&
                secondary_cta.length &&
                secondary_cta.map((cta, i) => (
                  <a
                    key={String(i)}
                    href={cta.uri}
                    target={cta.options.isExternal ? '_blank' : '_self'}
                    className={`cta--secondary ${
                      secondary_cta && secondary_cta.length > 1
                        ? 'cta__block--secondary'
                        : ''
                    }`}
                  >
                    {cta.title}
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="side-right">
        {url && (
          <div className="img-wrapper">
            <img
              src={url}
              alt={alt || 'image'}
              width={width || ''}
              height={height || ''}
            />
          </div>
        )}
      </div>
    </div>
  );
}
