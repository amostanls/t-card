Component({
  mixins: [],
  data: {},
  props: {
    title: "Card Name",
    providerName: "Provider Name",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onReset() {
      my.navigateBack()
    },
  },
});
