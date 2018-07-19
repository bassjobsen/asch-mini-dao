module.exports = {
  addProject: async function(name, description) {
      app.sdb.create('Project', {
      name: name,
      description: description, 	
      id: app.autoID.increment('project_max_id'),
      transactionId: this.trs.id,
      votes: 0,
      authorId: this.trs.senderId,
      timestamp: this.trs.timestamp
      })
  },
  getProjects: async function() {
  	return app.model.Project.findAll();
  }	
}
