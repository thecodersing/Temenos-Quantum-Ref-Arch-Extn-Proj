/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "transaction", "objectService" : "TerranBankServ"};

    var setterFunctions = {
        tid: function(val, state) {
            context["field"] = "tid";
            context["metadata"] = (objectMetadata ? objectMetadata["tid"] : null);
            state['tid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromaccountid: function(val, state) {
            context["field"] = "fromaccountid";
            context["metadata"] = (objectMetadata ? objectMetadata["fromaccountid"] : null);
            state['fromaccountid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        toaccountid: function(val, state) {
            context["field"] = "toaccountid";
            context["metadata"] = (objectMetadata ? objectMetadata["toaccountid"] : null);
            state['toaccountid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        amount: function(val, state) {
            context["field"] = "amount";
            context["metadata"] = (objectMetadata ? objectMetadata["amount"] : null);
            state['amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        notes: function(val, state) {
            context["field"] = "notes";
            context["metadata"] = (objectMetadata ? objectMetadata["notes"] : null);
            state['notes'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdts: function(val, state) {
            context["field"] = "createdts";
            context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
            state['createdts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function transaction(defaultValues) {
        var privateState = {};
        context["field"] = "tid";
        context["metadata"] = (objectMetadata ? objectMetadata["tid"] : null);
        privateState.tid = defaultValues ?
            (defaultValues["tid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tid"], context) :
                null) :
            null;

        context["field"] = "fromaccountid";
        context["metadata"] = (objectMetadata ? objectMetadata["fromaccountid"] : null);
        privateState.fromaccountid = defaultValues ?
            (defaultValues["fromaccountid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromaccountid"], context) :
                null) :
            null;

        context["field"] = "toaccountid";
        context["metadata"] = (objectMetadata ? objectMetadata["toaccountid"] : null);
        privateState.toaccountid = defaultValues ?
            (defaultValues["toaccountid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["toaccountid"], context) :
                null) :
            null;

        context["field"] = "amount";
        context["metadata"] = (objectMetadata ? objectMetadata["amount"] : null);
        privateState.amount = defaultValues ?
            (defaultValues["amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["amount"], context) :
                null) :
            null;

        context["field"] = "notes";
        context["metadata"] = (objectMetadata ? objectMetadata["notes"] : null);
        privateState.notes = defaultValues ?
            (defaultValues["notes"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["notes"], context) :
                null) :
            null;

        context["field"] = "createdts";
        context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
        privateState.createdts = defaultValues ?
            (defaultValues["createdts"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdts"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "tid": {
                get: function() {
                    context["field"] = "tid";
                    context["metadata"] = (objectMetadata ? objectMetadata["tid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tid, context);
                },
                set: function(val) {
                    setterFunctions['tid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromaccountid": {
                get: function() {
                    context["field"] = "fromaccountid";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromaccountid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromaccountid, context);
                },
                set: function(val) {
                    setterFunctions['fromaccountid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toaccountid": {
                get: function() {
                    context["field"] = "toaccountid";
                    context["metadata"] = (objectMetadata ? objectMetadata["toaccountid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.toaccountid, context);
                },
                set: function(val) {
                    setterFunctions['toaccountid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "amount": {
                get: function() {
                    context["field"] = "amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.amount, context);
                },
                set: function(val) {
                    setterFunctions['amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "notes": {
                get: function() {
                    context["field"] = "notes";
                    context["metadata"] = (objectMetadata ? objectMetadata["notes"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.notes, context);
                },
                set: function(val) {
                    setterFunctions['notes'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "createdts": {
                get: function() {
                    context["field"] = "createdts";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdts, context);
                },
                set: function(val) {
                    setterFunctions['createdts'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.tid = value ? (value["tid"] ? value["tid"] : null) : null;
            privateState.fromaccountid = value ? (value["fromaccountid"] ? value["fromaccountid"] : null) : null;
            privateState.toaccountid = value ? (value["toaccountid"] ? value["toaccountid"] : null) : null;
            privateState.amount = value ? (value["amount"] ? value["amount"] : null) : null;
            privateState.notes = value ? (value["notes"] ? value["notes"] : null) : null;
            privateState.createdts = value ? (value["createdts"] ? value["createdts"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(transaction);

    //Create new class level validator object
    BaseModel.Validator.call(transaction);

    var registerValidatorBackup = transaction.registerValidator;

    transaction.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(transaction.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    //For Operation 'getTransactions' with service id 'freedb_johnchangidb_transactions_get6631'
     transaction.getTransactions = function(params, onCompletion){
        return transaction.customVerb('getTransactions', params, onCompletion);
     };

    //For Operation 'doTransfer' with service id 'freedb_johnchangidb_transactions_create4925'
     transaction.doTransfer = function(params, onCompletion){
        return transaction.customVerb('doTransfer', params, onCompletion);
     };

    var relations = [];

    transaction.relations = relations;

    transaction.prototype.isValid = function() {
        return transaction.isValid(this);
    };

    transaction.prototype.objModelName = "transaction";
    transaction.prototype.objServiceName = "TerranBankServ";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    transaction.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("TerranBankServ", "transaction", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    transaction.clone = function(objectToClone) {
        var clonedObj = new transaction();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return transaction;
});