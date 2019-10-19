import '../scss/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import HeroCard from '_components/HeroCard';

(function($, Drupal) {
  Drupal.behaviors.heroCard = {
    attach(context) {
      if (context === document) {
        const wrapper = $('.block__hero-card--wrapper');

        if (wrapper.length) {
          wrapper.each(function() {
            const data = $(this).data('src').content || null;

            $(this).length
              ? ReactDOM.render(<HeroCard data={data} />, $(this)[0])
              : false;
          });
        }
      }
    },
  };
})(jQuery, Drupal);
