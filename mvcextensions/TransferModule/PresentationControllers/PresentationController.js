define([], function() {

  function Transfer_PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
  }

  inheritsFrom(Transfer_PresentationController, kony.mvc.Presentation.BasePresenter);
  Transfer_PresentationController.prototype.initializePresentationController = function() {};

  Transfer_PresentationController.prototype.getAccountsandLoadTransferForm = function() {
    let navigationObj = applicationManager.getNavigationManager();
    let accs = navigationObj.getCustomInfo("frmHome");
    kony.print("accs: "+accs);
    let masterData = [];
    accs.forEach(a => {
      const {accountid,balance,accountname} = a;
      masterData.push([accountid,accountname+" .."+accountid.slice(-4)]);
    });
    navigationObj.setCustomInfo("frmTransfer",masterData);
    navigationObj.navigateTo("frmTransfer");
  };

  Transfer_PresentationController.prototype.saveTransactionToDB = function(fromaccountid, toaccountid, amount) {
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
  };

  return Transfer_PresentationController;
});