import '../scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

(function($, Drupal) {
  Drupal.behaviors.cardsRow = {
    attach(context) {
      if (context === document) {
        const wrapper = $('.block__cards--wrapper');

        if (wrapper.length) {
          wrapper.each(function() {
            const data = $(this).data('src').content || null;

            // $(this).length
            //   ? ReactDOM.render(<CardsRow data={data} />, $(this)[0])
            //   : false;
          });
        }
      }
    },
  };
})(jQuery, Drupal);
