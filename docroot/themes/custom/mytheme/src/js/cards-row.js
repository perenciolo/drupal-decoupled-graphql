import React from 'react';
import ReactDOM from 'react-dom';

import CardsPdComponent from '_components/CardsRow/CardsPdComponent';

(function($, Drupal) {
  Drupal.behaviors.cardsRow = {
    attach(context) {
      if (context === document) {
        const wrapper = $('#cr-wrapper', document);

        const data = wrapper.data('src') ? wrapper.data('src').content : null;

        wrapper && wrapper.length
          ? ReactDOM.render(<CardsPdComponent data={data} />, wrapper[0])
          : false;
      }
    }
  };
})(jQuery, Drupal);
