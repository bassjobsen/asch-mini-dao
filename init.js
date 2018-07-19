module.exports = async function () {
  app.logger.info('enter dapp init')

  app.registerContract(1002, 'project.addProject')
  app.registerContract(1003, 'vote.voteProject')

  app.events.on('newBlock', (block) => {
    app.logger.info('new block received: %s', block.height)
  })
}
