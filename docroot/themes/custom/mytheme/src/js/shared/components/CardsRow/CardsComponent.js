import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import api from '_shared/Api';
import CardComponent from './CardComponent';

const GET_CARDS = `
  {
    blockContentById(id: "1") {
      ... on BlockContentCards {
        fieldCardTitle
        fieldCardDescription {
          value
          format
          processed
        }
        fieldCardColumns
        fieldCardItem {
          ... on FieldBlockContentCardsFieldCardItem {
            entity {
              ... on ParagraphCardItem {
                fieldCardTitle
                fieldCardDescription {
                  value
                  format
                  processed
                }
              }
            }
          }
        }
      }
    }
  }
`;

class CardsComponent extends Component {
  state = {
    cards_info: null,
    cards: []
  };

  async componentWillMount() {
    await api.post('', { query: GET_CARDS }).then(result => {
      const cards_data = result.data.data.blockContentById;
      this.setState({
        cards_info: cards_data,
        cards: cards_data.fieldCardItem
      });
    });
  }

  render() {
    return (
      <div className="cards-row">
        {this.state.cards_info && (
          <div className="cards-row-header">
            <h1>{this.state.cards_info.fieldCardTitle}</h1>
            {this.state.cards_info.fieldCardDescription
              ? renderHTML(this.state.cards_info.fieldCardDescription.value)
              : ''}
          </div>
        )}

        {this.state.cards.length > 0 &&
          this.state.cards.map((card_info, i) => (
            <CardComponent
              key={i}
              info={card_info}
              columns={this.state.cards_info.fieldCardColumns}
            />
          ))}
      </div>
    );
  }
}

export default CardsComponent;
