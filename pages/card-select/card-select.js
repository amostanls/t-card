import denoms from '/data/denoms'

Page({
  data: {
    cardName: '',
    amount: "RM 50.00",
    card_number: "4212 1234 5678 0012",
    card_ccv: "278",
    card_exp: "09/26",
    helpDialogMessage: `
      Hubungi call center kantor pembiayaan anda.
      Sebutkan nama dan nomor telepon yang terdaftar sebelumnya.
      Petugas kantor pembiayaan akan memberitahukan nomor kontrak anda.
    `,
    customerNumberLoading: false,
    denoms: [],
    custNumberInputErrorMsg: ''
  },

  onDeleteCard(){
    my.confirm({
      title: 'Delete Card',
      content: '',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      success: (result) => {
        my.showToast({
          type: 'success',
          content: 'Success',
          duration: 1000,
        });
        my.navigateBack();
      },
    });
  },

  onLoad(query) {
    this.setData({ cardName: query.cardName })
  },

  saveHelpDialogRef(ref) {
    this.helpDialogRef = ref
  },
  openHelpDialog() {
    this.helpDialogRef.show()
  },
  closeHelpDialog() {
    this.helpDialogRef.hide()
  },

  onCustomerNumberInput(e) {
    const { value } = e.detail
    this.setData({ custNumberInputErrorMsg: '' })
    clearTimeout(this.customerNumberTimer)
    this.setData({ customerNumberLoading: true })
    this.customerNumberTimer = setTimeout(() => {
      if (value) {
        this.setData({ denoms, customerNumberLoading: false })
      } else {
        this.setData({ denoms: [], customerNumberLoading: false })
      }
    }, 500)
  },

  onInputError(errorMsg) {
    this.setData({ custNumberInputErrorMsg: errorMsg })
  },
  switchChange (e){
    console.log('switchChange event, value:', e.detail.value)
  },
});
