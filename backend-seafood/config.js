var mysql = require("mysql");

// exports.mysqlCon =
// {
// 	host : 		'localhost',
// 	user : 		'root',
// 	password : 	'',
// 	database : 	'test'
// }

// exports.mysqlCon =
// {
// 	host : 		'173.194.240.7',
// 	user : 		'root',
// 	password : 	'root',
// 	database : 	'webmobiTest'
// }

exports.amazon = {
	credentials: {
		key: 'AKIAJ2N7ME5HTT5JWB5Q',
		secret: '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',
		region: 'us-east-1'
	}
};

exports.mysqlCon =
{
  host :    'testing.c5zv8puk0kyb.us-east-1.rds.amazonaws.com',
  user :    'Testing',
  password :  'My_Instance',
  database :  'amigos'
}

exports.Wooseafood =
{
  key :    'ck_80332a84b1565e4cf17dac2679abf19537997e97',
  secret :    'cs_d34f5c712f02de4f053fd7ffc192850f37232d4f'
}