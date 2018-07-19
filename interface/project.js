app.route.get('/project/all',  async function (req) {
    return await app.model.Project.findAll()
});
