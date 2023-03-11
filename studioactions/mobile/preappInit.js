function preappInit(eventobject) {
    var self = this;
    kony.lang.setUncaughtExceptionHandler(GlobalExceptionHandler.exceptionHandler);
    try {
        var ApplicationManager = require(['ApplicationManager']);
        applicationManager = ApplicationManager.getApplicationManager();
    } catch (err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
    }
}