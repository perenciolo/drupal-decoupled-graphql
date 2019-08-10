import React from 'react';
import ReactDOM from 'react-dom';

import CardsComponent from '_components/CardsRow/CardsComponent';

(function($, Drupal) {
  Drupal.behaviors.mymodule = {
    attach(context) {
      if (context === document) {
        const wrapper = document.getElementsByClassName('field--name-body');

        wrapper && wrapper.length
          ? ReactDOM.render(<CardsComponent />, wrapper[0])
          : false;
      }
    }
  };
})(jQuery, Drupal);
