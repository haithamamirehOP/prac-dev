export class Source {
  getAdsData() {
    const a = [];
    cy.window().then((win) => {
      win.fbsads.adSlots.forEach((ad) => {
        a.push(ad.getTargetingMap());
      });
    });
    return a;
  }
  // getAdsSizes(id) {
  //   const size = [];
  //   cy.window().then((win) => {
  //     win.fbsads.adSlots.forEach((ad) => {
  //       size.push(ad.getSizes(id));
  //     });
  //   });
  //   return size;
  // }
}

export const source = new Source();
