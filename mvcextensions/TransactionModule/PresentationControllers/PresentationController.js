define([], function() {
  /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
  function Transaction_PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
  }

  inheritsFrom(Transaction_PresentationController, kony.mvc.Presentation.BasePresenter);

  /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
  Transaction_PresentationController.prototype.initializePresentationController = function() {

  };

  Transaction_PresentationController.prototype.getTransactionsAndShow = function(selectedRowData) {
    var txnManger = applicationManager.getTransactionManager();
    txnManger.getTransactions(this.getTxnSC.bind(this),this.getTxnEC.bind(this), selectedRowData); 
  };

  Transaction_PresentationController.prototype.getTxnSC = function(resp) {
    var txnNavObj = applicationManager.getNavigationManager();
    txnNavObj.setCustomInfo("frmTransactions",resp.transactions);
    txnNavObj.navigateTo("frmTransactions");
  };

  Transaction_PresentationController.prototype.getTxnEC = function(errMsg) {
    var txnNavObj = applicationManager.getNavigationManager();
    txnNavObj.setCustomInfo("frmTransactions",errMsg);
    txnNavObj.navigateTo("frmTransactions");
  };

  return Transaction_PresentationController;
});