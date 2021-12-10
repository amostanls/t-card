Component({
  mixins: [],
  data: {},
  props: {
    title: "Freeze Subscription",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  switchChange (e){
     my.confirm({
      title: 'Freeze Subscription',
      content: '',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      success: (result) => {
        console.log('switchChange event, value:', e.detail.value);
      },
    });
  },
  methods: {
    onReset() {
      my.navigateBack()
    },
  },
});
