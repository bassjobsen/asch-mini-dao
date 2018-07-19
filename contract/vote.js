module.exports = {
  voteProject: async function(projectId) {
      app.sdb.create('Vote', {
      projectId: projectId,
      transactionId: this.trs.id,
      authorId: this.trs.senderId,
      timestamp: this.trs.timestamp
      });
      app.sdb.increment('Project', { votes: 1 }, { id: projectId }); 
  }	
}
