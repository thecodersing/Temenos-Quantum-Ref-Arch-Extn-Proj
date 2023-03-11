define({
  onNavigate: function (data) {
    kony.print("onNavigate is invoked");
  },
  onViewCreated: function () {
    kony.print("onViewCreated is invoked");
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },
  postShow: function () {
    kony.print("postShow is invoked");
  },
  init: function () {
    kony.print("init is invoked");
    this.view.btnSubmit.onClick=this.doTransfer;
    this.view.lblHome.onTouchEnd=this.backHandler;
  },
  preShow: function () {
    kony.print("preshow is invoked");
    this.loadAccountList();
  },
  loadAccountList: function(){
    var navManager = applicationManager.getNavigationManager();
    var masterData = navManager.getCustomInfo("frmTransfer");
    this.view.listFrom.masterData = masterData;
    this.view.listTo.masterData= masterData.slice().reverse();
    this.view.forceLayout();
  },
  doTransfer: function(){
    const fromaccountid = this.view.listFrom.selectedKey;
    const toaccountid = this.view.listTo.selectedKey;
    const amount = this.view.txtAmount.text;
    const transferModule = applicationManager.getModule("TransferModule");
    transferModule.presentationController
      .saveTransactionToDB(fromaccountid, toaccountid, amount);
  },
  backHandler: function(){
    var accModule = applicationManager.getModule("AccountsModule");
    accModule.presentationController.getAccountsandShowHome();
  }
});
