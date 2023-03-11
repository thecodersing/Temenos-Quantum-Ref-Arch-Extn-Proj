define({
  getTransactions: function(presentationSuccessCallback,presentationErrorCallback,selectedRowData){
    var self = this;
    var transactionList = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("transaction");
    transactionList.customVerb('getTransactions', {
      "$filter": "endswith('fromaccountid', '"+selectedRowData.replaceAll("X","")+"') eq true"
    }, getTransactionCompletionCallback); 
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
  },
});