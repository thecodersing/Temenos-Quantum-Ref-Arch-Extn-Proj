define([], function () { 

  function TransferManager() { 
    kony.mvc.Business.Delegator.call(this); 
  } 

  inheritsFrom(TransferManager, kony.mvc.Business.Delegator); 

  TransferManager.prototype.saveTransactionToDB= function(transData, presentationSuccessCallback,presentationErrorCallback){
    var self = this;
    var transactionList = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("transaction");
    transactionList.customVerb('doTransfer', transData, getTransferCompletionCallback); 
    function getTransferCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      kony.print("Data from getTransferCompletionCallback ... "+JSON.stringify(obj));
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };

  return TransferManager;

});