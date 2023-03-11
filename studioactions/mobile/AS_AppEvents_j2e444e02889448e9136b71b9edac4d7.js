function AS_AppEvents_j2e444e02889448e9136b71b9edac4d7(eventobject) {
    var self = this;
    kony.lang.setUncaughtExceptionHandler(GlobalExceptionHandler.exceptionHandler);
    try {
        require(['ApplicationManager', 'ServiceResponseHandler'], function(ApplicationManager, ServiceResponseHandler) {
            kony.print('ApplicationManager is loaded');
            applicationManager = ApplicationManager.getApplicationManager();
            serviceResponseHandler = new ServiceResponseHandler();
        });
        //var ApplicationManager = require('ApplicationManager');
        //applicationManager = ApplicationManager.getApplicationManager();
    } catch (err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
    }
}