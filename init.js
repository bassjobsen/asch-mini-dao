module.exports = async function () {
  console.log('enter dapp init')

  app.registerContract(1002, 'project.addProject')
  app.registerContract(1003, 'vote.voteProject')

  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}
