module.exports = {
  addProject: async function(name, description) {
      app.validate('string', name, { length: { minimum: 1, maximum: 256 }})
      app.validate('string', description, { length: { minimum: 1, maximum: 1024 }})
      app.sdb.create('Project', {
      name: name,
      description: description, 	
      id: app.autoID.increment('project_max_id'),
      transactionId: this.trs.id,
      votes: 0,
      authorId: this.trs.senderId,
      timestamp: this.trs.timestamp
      })
  }
}
