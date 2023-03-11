define({
  saveTransactionToDB: function(fromaccountid, toaccountid, amount, currency) {
    if(currency === "INR")
      amount = amount/ 70;
    const params = {
      fromaccountid: fromaccountid,
      toaccountid: toaccountid,
      amount: amount,
      notes: "FromMVC2.0 client",
    };
    let transferManager = applicationManager.getTransferManager();
    doTransSC = function(resp){
      let navigationObj = applicationManager.getNavigationManager();
      alert("Transaction Added Sucessfully#### . "+JSON.stringify(resp));
      navigationObj.navigateTo("frmHome");
    };
    doTransFC = function(errMsg){
      let navigationObj = applicationManager.getNavigationManager();
      navigationObj.setCustomInfo("frmTransfer",errMsg);
      alert("Error Added Transaction Record###### "+JSON.stringify(errMsg));
      navigationObj.navigateTo("frmHome");
    };
    transferManager.saveTransactionToDB(params, doTransSC, doTransFC);
  }
});