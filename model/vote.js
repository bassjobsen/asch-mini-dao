module.exports = {
  name: 'votes',
  fields: [
     {
	"name": "projectId",
	"type": "BigInt",
	"not_null": true
    },
    {
      name: 'transactionId',
      type: 'String',
      length: 64,
      not_null: true,
      unique: true
    },
    {
      name: 'authorId',
      type: 'String',
      length: 50,
      not_null: true
    },
    {
      name: 'timestamp',
      type: 'Number',
      not_null: true
    }
  ]
}
