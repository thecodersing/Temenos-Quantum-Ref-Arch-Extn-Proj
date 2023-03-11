/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"tid": "tid",
		"fromaccountid": "fromaccountid",
		"toaccountid": "toaccountid",
		"amount": "amount",
		"notes": "notes",
		"createdts": "createdts",
	};

	Object.freeze(mappings);

	var typings = {
		"tid": "number",
		"fromaccountid": "string",
		"toaccountid": "string",
		"amount": "number",
		"notes": "string",
		"createdts": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"tid",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "TerranBankServ",
		tableName: "transaction"
	};

	Object.freeze(config);

	return config;
})