/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "account", "objectService" : "TerranBankServ"};

    var setterFunctions = {
        accountid: function(val, state) {
            context["field"] = "accountid";
            context["metadata"] = (objectMetadata ? objectMetadata["accountid"] : null);
            state['accountid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountname: function(val, state) {
            context["field"] = "accountname";
            context["metadata"] = (objectMetadata ? objectMetadata["accountname"] : null);
            state['accountname'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balance: function(val, state) {
            context["field"] = "balance";
            context["metadata"] = (objectMetadata ? objectMetadata["balance"] : null);
            state['balance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function account(defaultValues) {
        var privateState = {};
        context["field"] = "accountid";
        context["metadata"] = (objectMetadata ? objectMetadata["accountid"] : null);
        privateState.accountid = defaultValues ?
            (defaultValues["accountid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountid"], context) :
                null) :
            null;

        context["field"] = "accountname";
        context["metadata"] = (objectMetadata ? objectMetadata["accountname"] : null);
        privateState.accountname = defaultValues ?
            (defaultValues["accountname"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountname"], context) :
                null) :
            null;

        context["field"] = "balance";
        context["metadata"] = (objectMetadata ? objectMetadata["balance"] : null);
        privateState.balance = defaultValues ?
            (defaultValues["balance"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balance"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "accountid": {
                get: function() {
                    context["field"] = "accountid";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountid, context);
                },
                set: function(val) {
                    setterFunctions['accountid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountname": {
                get: function() {
                    context["field"] = "accountname";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountname"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountname, context);
                },
                set: function(val) {
                    setterFunctions['accountname'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "balance": {
                get: function() {
                    context["field"] = "balance";
                    context["metadata"] = (objectMetadata ? objectMetadata["balance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.balance, context);
                },
                set: function(val) {
                    setterFunctions['balance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
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
            privateState.accountid = value ? (value["accountid"] ? value["accountid"] : null) : null;
            privateState.accountname = value ? (value["accountname"] ? value["accountname"] : null) : null;
            privateState.balance = value ? (value["balance"] ? value["balance"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(account);

    //Create new class level validator object
    BaseModel.Validator.call(account);

    var registerValidatorBackup = account.registerValidator;

    account.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(account.isValid(this, propName, val)) {
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
    //For Operation 'getAccounts' with service id 'freedb_johnchangidb_accounts_get1630'
     account.getAccounts = function(params, onCompletion){
        return account.customVerb('getAccounts', params, onCompletion);
     };

    var relations = [];

    account.relations = relations;

    account.prototype.isValid = function() {
        return account.isValid(this);
    };

    account.prototype.objModelName = "account";
    account.prototype.objServiceName = "TerranBankServ";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    account.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("TerranBankServ", "account", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    account.clone = function(objectToClone) {
        var clonedObj = new account();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return account;
});