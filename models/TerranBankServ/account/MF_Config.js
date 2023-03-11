/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"accountid": "accountid",
		"accountname": "accountname",
		"balance": "balance",
		"id": "id",
	};

	Object.freeze(mappings);

	var typings = {
		"accountid": "string",
		"accountname": "string",
		"balance": "number",
		"id": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "TerranBankServ",
		tableName: "account"
	};

	Object.freeze(config);

	return config;
})