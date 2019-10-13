import React from 'react';
import ReactDOM from 'react-dom';

import MultipleCarousel from '_components/MultipleCarousel';

(function($, Drupal) {
  Drupal.behaviors.mytheme = {
    attach(context) {
      if (context === document) {
        const wrapper = $('.multiple-carousel__wrapper');

        if (wrapper.length) {
          wrapper.each(function() {
            const data = $(this).data('src').content || null;
            // 1 steps | 0 arrow
            const navType = $(this).data('nav');

            $(this).length
              ? ReactDOM.render(
                  <MultipleCarousel navType={navType} data={data} />,
                  $(this)[0]
                )
              : false;
          });
        }
      }
    },
  };
})(jQuery, Drupal);
