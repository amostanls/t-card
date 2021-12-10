const app=getApp();

Page({
  data: {
    card_number: 4200123498760000,
  },

  onInputAmount(e) {
    this.setData({
      amount: e.detail.value,
    });
  },

  onInputName(e) {
    this.setData({
      name: e.detail.value,
      section: e.detail.value.charAt(0),
    });
  },

  onConfirm: function(e) {
    my.confirm({
      title: 'Add Card',
      content: '',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      success: (result) => {
        // addMe(e);
        my.showToast({
          type: 'success',
          content: 'Success',
          duration: 1000,
        });
        my.navigateBack();
      },
    });
  },  

  methods:{
    addMe(e){
      this.setData({card_number: card_number+1});
    },
  },
});