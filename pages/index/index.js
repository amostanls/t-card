// import providers from '/data/providers'
// import cards from '/data/cards'
const app = getApp();

Page({
  data: {
    // providers,
    // providersSearchResult: [],
    // cards,
    cardsSearchResult:[],
    isSearch: false
  },

  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    this.setData({ cardsSearchResult: app.cards});
  },
  onReady() {},
  onShow() {
    // Page display
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    this.setData({ cardsSearchResult: app.cards});
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {},
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'DANA Mini Biller Template',
      desc: 'DANA Mini Program tempalate for bill payment',
      path: 'pages/index/index',
    };
  },

  onSearchInput(e)  {
    const searchKey = e.detail.value || ''
    const lowerCaseSearchKey = searchKey.toLowerCase()
    const filtered = app.cards.filter(card => {
      const lowerCaseCardName = card.name.toLowerCase()
      if (lowerCaseCardName.indexOf(lowerCaseSearchKey) !== -1) {
        return card
      }
    })
    if (searchKey) {
      this.setData({ 
        cardsSearchResult: filtered,
        isSearch: true,
      })
    } else {
      this.setData({
        cardsSearchResult: app.cards,
        isSearch: false,
      })
    }
  },

  onAddCard(){
    my.navigateTo({
      url: '/pages/card-add/card-add'
    });
  }
});