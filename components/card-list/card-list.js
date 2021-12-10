Component({
  mixins: [],
  data: {

  },
  props: {
    cards: [],
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onCardCellTap (e, props) {
      const { card } = props;
      my.navigateTo({
        url: `/pages/card-select/card-select?cardName=${card.name || ''}`
      });
    },
    onTapFiatCell () {
      my.navigateTo({ 
        url: '/pages/fiat/index/index'
      });
    }
  },
});
