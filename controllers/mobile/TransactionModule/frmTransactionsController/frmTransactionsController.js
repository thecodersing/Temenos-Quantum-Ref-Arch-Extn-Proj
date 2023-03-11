define({
  onNavigate: function (data) {
    kony.print("onNavigate is invoked");
  },
  onViewCreated: function () {
    kony.print("onViewCreated is invoked");
    this.view.init = this.init;
    this.view.preShow = this.preShow;
    this.view.lblBack.onTouchEnd=this.backHandler;
  },
  postShow: function () {
    kony.print("postShow is invoked");
  },
  init: function () {
    kony.print("init is invoked");
    this.view.lblSend.onTouchEnd=this.sendMoneyHandler;
  },
  preShow: function () {
    kony.print("preshow is invoked");
    this.showTxnData();
  },
  showTxnData: function(){
    var navManager = applicationManager.getNavigationManager();
    var resultData = navManager.getCustomInfo("frmTransactions");
    kony.print(resultData);
    var widgetDataMap = {
      "lblFrom": "fromaccountid",
      "lblTo": "toaccountid",
      "lblBalance": "amount",
    };
    this.view.segTransactions.widgetDataMap = widgetDataMap;
    this.view.segTransactions.setData(resultData);
  },
  backHandler: function(){
    var AccountModule = applicationManager.getModule("AccountsModule");
    //AccountModule.presentationController.navigateToHomeUsingNavObj();
    AccountModule.presentationController.getAccountsandShowHome();
  },
  sendMoneyHandler: function(){
    var transferModule = applicationManager.getModule("TransferModule");
    transferModule.presentationController.getAccountsandLoadTransferForm();
  }
});
