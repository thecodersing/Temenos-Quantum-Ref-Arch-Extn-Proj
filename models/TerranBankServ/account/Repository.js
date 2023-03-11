define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function accountRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	accountRepository.prototype = Object.create(BaseRepository.prototype);
	accountRepository.prototype.constructor = accountRepository;

	//For Operation 'getAccounts' with service id 'freedb_johnchangidb_accounts_get1630'
	accountRepository.prototype.getAccounts = function(params, onCompletion){
		return accountRepository.prototype.customVerb('getAccounts', params, onCompletion);
	};

	return accountRepository;
})