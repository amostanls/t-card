const app=getApp();

let start = 1;

function generate(){
  return 4200123498760000+start++;
}

Page({
  data: {
    card_number: generate(),
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
      title: 'Add Card Details',
      content: '',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      success: (result) => {
        app.cards = app.cards.concat(
          [
            {
              "section": this.section,
              "name": this.name,
              "amount": this.amount,
            }
          ],
        );
        my.showToast({
          type: 'success',
          content: 'Success',
          duration: 3000,
        });
        my.navigateBack();
      },
    fail: (result)=>{
      
    }
    });
  },  
});