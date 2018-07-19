module.exports = {
  name: 'projects',
  alias: 'p',
  fields: [
     {
	"name": "id",
	"type": "BigInt",
	"not_null": true,
	"unique": true,
	"primary_key": true
    },   
    {
      name: 'transactionId',
      type: 'String',
      length: 64,
      not_null: true,
      unique: true
    },
    {
      name: 'name',
      type: 'String',
      length: 16,
      not_null: true
    },
    {
      name: 'description',
      type: 'Text',
      not_null: true
    },
    {
      name: 'authorId',
      type: 'String',
      length: 50,
      not_null: true
    },
    {
      name: 'votes',
      type: 'Number',
      not_null: true
    },
    {
      name: 'timestamp',
      type: 'Number',
      not_null: true
    }
  ]
}
