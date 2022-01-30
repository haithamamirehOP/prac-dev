import { source } from './forbes_ticker_source';

describe('Forbes Ticker Test', () => {
  let firstTicker;
  let secondTicker;
  before(() => {
    cy.intercept('GET', source.api + 'HOG', { PercentChangeFromPreviousClose: source.positiveValue }).as('response1');
    cy.intercept('GET', source.api + 'WGO', { PercentChangeFromPreviousClose: source.negativeValue }).as('response2');
    cy.visit(source.site);
    cy.wait('@response1').its('response.body.PercentChangeFromPreviousClose').then((response) => {
        firstTicker = response;
      });
    cy.wait('@response2').its('response.body.PercentChangeFromPreviousClose').then((response) => {
        secondTicker = response;
      });
  });

  describe('Green Ticker', () => {
    it('should check that the ticker is green if the ticker value is positive', () => {
      cy.get(source.HOGticker).should('have.class', 'ticker-green');
      cy.get(source.HOGticker).should('have.css', 'color', 'rgb(0, 153, 51)');
    });

    it('should match the ticker value on site with the one stubbed', () => {
      cy.get(source.HOGticker).should('have.text', source.formatPercent(firstTicker));
    });
  });

  describe('Red Ticker', () => {
    it('should check that the ticker is red if the ticker value is positive', () => {
      cy.get(source.WGOticker).should('have.class', 'ticker-red');
      cy.get(source.WGOticker).should('have.css', 'color', 'rgb(212, 23, 35)');
    });

    it('should match the ticker value on site with the one stubbed', () => {
      cy.get(source.WGOticker).should('have.text',source.formatPercent(secondTicker));
    });
  });
});
