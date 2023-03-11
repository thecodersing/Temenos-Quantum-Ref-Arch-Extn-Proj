define([], function () { 

  /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Delegator
     */
  function TransactionManager() { 

    kony.mvc.Business.Delegator.call(this); 

  } 

  inheritsFrom(TransactionManager, kony.mvc.Business.Delegator); 

  TransactionManager.prototype.getTransactions= function(presentationSuccessCallback,presentationErrorCallback,selectedRowData){
    var self = this;
    var transactionList = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("transaction");
    transactionList.customVerb('getTransactions', {}, getTransactionCompletionCallback); 
    function getTransactionCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      kony.print("Data from getTransactions ... "+JSON.stringify(obj));
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };

  return TransactionManager;

});