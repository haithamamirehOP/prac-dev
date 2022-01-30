export class Source {
  api = 'https://www.forbes.com/xignite/?identifier=';

  site =
    '/sites/sergeiklebnikov/2020/04/16/here-are-29-get-out-and-go-stocks-for-the-end-of-coronavirus-quarantine';

  HOGticker = '[data-name=HOG] .percent-link > span';
  WGOticker = '[data-name=WGO] .percent-link > span';

  positiveValue = 1.5;
  negativeValue = -2.5;

  formatPercent(percent) {
    let percentage = Math.round(percent * 10) / 10
    return `${(percentage > 0) ? '+' : ''}${percentage}%`;
  }
}
export const source = new Source();
