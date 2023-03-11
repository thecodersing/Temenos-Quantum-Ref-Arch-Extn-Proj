define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function transactionRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	transactionRepository.prototype = Object.create(BaseRepository.prototype);
	transactionRepository.prototype.constructor = transactionRepository;

	//For Operation 'getTransactions' with service id 'freedb_johnchangidb_transactions_get6631'
	transactionRepository.prototype.getTransactions = function(params, onCompletion){
		return transactionRepository.prototype.customVerb('getTransactions', params, onCompletion);
	};

	//For Operation 'doTransfer' with service id 'freedb_johnchangidb_transactions_create4925'
	transactionRepository.prototype.doTransfer = function(params, onCompletion){
		return transactionRepository.prototype.customVerb('doTransfer', params, onCompletion);
	};

	return transactionRepository;
})