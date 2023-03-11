define({
  getTxnSC: function(resp) {
    var txnNavObj = applicationManager.getNavigationManager();
    resp.transactions = resp.transactions.map(t => {
      if(t.amount > 30){
        t.amount = {text: t.amount, skin: "sknLbl120Red"};
      }
      return t;
    });
    txnNavObj.setCustomInfo("frmTransactions",resp.transactions);
    txnNavObj.navigateTo("frmTransactions");
  }
});