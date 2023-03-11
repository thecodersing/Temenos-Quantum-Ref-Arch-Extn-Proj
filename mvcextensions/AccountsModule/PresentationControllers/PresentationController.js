define([], function() {
  /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
  function Accounts_PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
  }

  inheritsFrom(Accounts_PresentationController, kony.mvc.Presentation.BasePresenter);

  /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
  Accounts_PresentationController.prototype.initializePresentationController = function() {

  };

  Accounts_PresentationController.prototype.getAccountsandShowHome = function() {
    var accountsManger = applicationManager.getAccountsManager();
    accountsManger.getAccounts(this.getAccountsSC.bind(this),this.getAccountsEC.bind(this)); 
  };

  Accounts_PresentationController.prototype.getAccountsSC = function(resp) {
    resp = resp.accounts;
    var accNavObj = applicationManager.getNavigationManager();
    accNavObj.setCustomInfo("frmHome",resp.accounts);
    accNavObj.navigateTo("frmHome");
  };

  Accounts_PresentationController.prototype.getAccountsEC = function(errMsg) {
    var accNavObj = applicationManager.getNavigationManager();
    accNavObj.setCustomInfo("frmHome",errMsg);
    accNavObj.navigateTo("frmHome");
  };

  Accounts_PresentationController.prototype.navigateToHomeUsingNavObj = function(){
    var accNavObj = applicationManager.getNavigationManager();
    accNavObj.goBack("frmTransactions");
    //accNavObj.navigateTo("frmHome"); 
  };

  return Accounts_PresentationController;
});