import React from 'react';
import ReactDOM from 'react-dom';

import MultipleCarousel from '_components/MultipleCarousel';

(function($, Drupal) {
  Drupal.behaviors.mytheme = {
    attach(context) {
      if (context === document) {
        const wrapper = $('.paragraph--type--display-carousel');

        if (wrapper.length) {
          wrapper.each(function() {
            const data = $(this).data('src').content || null;

            console.log(data);
            $(this).length
              ? ReactDOM.render(<MultipleCarousel data={data} />, $(this)[0])
              : false;
          });
        }
      }
    },
  };
})(jQuery, Drupal);
