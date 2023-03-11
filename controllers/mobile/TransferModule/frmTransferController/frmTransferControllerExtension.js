define({ 
  init: function () {
    kony.print("init is invoked in extn");
    this.view.btnSubmit.onClick=this.doTransfer;
    this.view.lblHome.onTouchEnd=this.backHandler;
    this.view.listCurr.masterData=[
      ["INR","INR"],
      ["USD","USD"]
    ];
  },
  doTransfer: function(){
    const fromaccountid = this.view.listFrom.selectedKey;
    const toaccountid = this.view.listTo.selectedKey;
    const amount = this.view.txtAmount.text;
    const curr = this.view.listCurr.selectedKey;
    const transferModule = applicationManager.getModule("TransferModule");
    transferModule.presentationController
      .saveTransactionToDB(fromaccountid, toaccountid, amount, curr);
  },
});