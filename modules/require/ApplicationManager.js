define(['HashTable'], function( HashTable) {

  function ApplicationManager(){
    /**@member {object} applicationManagerInstance Contains instance of application manager*/
    /**@member {object} HashTable Contains instance of Hashtable*/
    /**@member {object} serviceResponseHandler Contains instance of serviceResponseHandler*/
    this.applicationManagerInstance= null;
    this.HashTable= null;
    this.serviceResponseHandler = null;
    this.numberOfAsyncForPreAppInit=2;
  }

  ApplicationManager.getApplicationManager = function(){
    if (!this.applicationManagerInstance) 
      this.applicationManagerInstance = new ApplicationManager();
    return this.applicationManagerInstance;
  };

  ApplicationManager.prototype.getModule = function(moduleName){  
    if(typeof moduleName === 'string' || moduleName instanceof String){
      var channel = kony.sdk.getChannelType();
      if(channel === "tablet"){
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule(moduleName,"Tablet");
      }else{
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule(moduleName);
      }
    } 
  };

  /*ApplicationManager.prototype.getServiceResponseHandler = function() {
    if (!this.serviceResponseHandler) {
      require(['ServiceResponseHandler'], function (ServiceResponseHandler) {
        kony.print('ServiceResponseHandler is loaded');
        this.serviceResponseHandler = new ServiceResponseHandler();
      });
      //var ServiceResponseHandler = require('ServiceResponseHandler');
      //this.serviceResponseHandler = new ServiceResponseHandler();
      return this.serviceResponseHandler;
    }else{
      return this.serviceResponseHandler;
    }
  };*/

  ApplicationManager.prototype.getServiceResponseHandler = function() {
    if (!this.serviceResponseHandler) {
      this.serviceResponseHandler = serviceResponseHandler;
    }
    return this.serviceResponseHandler;
  };

  ApplicationManager.prototype.getNavigationManager = function() {
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('NavigationManager').businessController;
  };

  ApplicationManager.prototype.getAccountsManager = function() {		
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AccountsManager').businessController;
  };

  ApplicationManager.prototype.getTransactionManager = function() {		
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('TransactionManager').businessController;
  };

  ApplicationManager.prototype.getTransferManager = function() {		
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('TransferManager').businessController;
  };

  return ApplicationManager;
});