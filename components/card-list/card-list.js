Component({
  mixins: [],
  data: {},
  props: {
    cards: [],
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onCardCellTap (e, props) {
      const { card } = props
      my.navigateTo({
        url: `/pages/provider-select/provider-select?providerName=${card.name || ''}`
      })
    },
    onTapFiatCell () {
      my.navigateTo({ 
        url: '/pages/fiat/index/index'
      })
    }
  },
});
