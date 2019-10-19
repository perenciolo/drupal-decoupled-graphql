import React from 'react';
import ReactDOM from 'react-dom';

import FullPageBanner from '_components/FullPageBanner';
import { GlobalStyle } from '_components/FullPageBanner/styles';

(function($, Drupal) {
  Drupal.behaviors.fullPageBg = {
    attach(context) {
      if (context === document) {
        const wrapper = $('.full-page-background__wrapper');

        if (wrapper.length) {
          wrapper.each(function() {
            const data = $(this).data('src').content || null;

            $(this).length
              ? ReactDOM.render(
                  <>
                    <GlobalStyle />
                    <FullPageBanner data={data} />
                  </>,
                  $(this)[0]
                )
              : false;
          });
        }
      }
    },
  };
})(jQuery, Drupal);
