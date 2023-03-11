define([], function () { 

  /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Delegator
     */
  function AccountsManager() { 

    kony.mvc.Business.Delegator.call(this); 

  } 

  inheritsFrom(AccountsManager, kony.mvc.Business.Delegator); 

  AccountsManager.prototype.getAccounts= function(presentationSuccessCallback,presentationErrorCallback,selData){
    var self = this;
    var accountList=kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("account");
    accountList.customVerb('getAccounts', {}, getAccountsCompletionCallback); 
    function getAccountsCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      kony.print("Data from getAccounts ... "+JSON.stringify(obj));
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"],selData);
      } else {
        presentationErrorCallback(obj["errmsg"],selData);
      }
    }
    /*var dummydata = [
      {
        accountid: "1234567890",
        accountname: "Savings",
        balance: "1009.10"
      },
      {
        accountid: "0987654321",
        accountname: "Current",
        balance: "1999.50"
      }
    ];*/
    //presentationSuccessCallback(dummydata, selData);
  };

  return AccountsManager;

});