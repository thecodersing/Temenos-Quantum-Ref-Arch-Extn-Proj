define({
  onNavigate: function (data) {
    kony.print("onNavigate is invoked");
  },
  onViewCreated: function () {
    kony.print("onViewCreated is invoked");
    this.view.init = this.init;
    this.view.preShow = this.preShow;
    this.view.segAccounts.onRowClick=this.rowClickHandler;
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
    this.showAccountsData();
  },
  showAccountsData: function(){
    var navManager = applicationManager.getNavigationManager();
    var resultData = navManager.getCustomInfo("frmHome");
    kony.print(resultData);
    var widgetDataMap = {
      //"lblAccountid":"accountid",
      "lblAccountid": "accountidmasked",
      "lblAccountname": "accountname",
      "lblBalance": "balance"
    };
    this.view.segAccounts.widgetDataMap = widgetDataMap;
    this.view.segAccounts.setData(resultData);
  },
  rowClickHandler: function(){
    var selectedRowData = this.view.segAccounts.selectedRowItems[0].accountidmasked;
    var transactionModule = applicationManager.getModule("TransactionModule");
    transactionModule.presentationController.getTransactionsAndShow(selectedRowData);
  },
  sendMoneyHandler: function(){
    var transferModule = applicationManager.getModule("TransferModule");
    transferModule.presentationController.getAccountsandLoadTransferForm();
  }
});
