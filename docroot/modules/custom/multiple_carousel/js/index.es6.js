import React from 'react';
import ReactDOM from 'react-dom';

import MultipleCarousel from './components/MultipleCarousel';

(function($, Drupal) {
  Drupal.behaviors.mytheme = {
    attach(context) {
      if (context === document) {
        const wrapper = $('#cr-wrapper');

        const data = wrapper.data('src').content || null;

        wrapper && wrapper.length
          ? ReactDOM.render(<MultipleCarousel />, wrapper[0])
          : false;
      }
    },
  };
})(jQuery, Drupal);
