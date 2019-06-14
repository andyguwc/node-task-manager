require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndRemove('5cfd8d1cf593be743a18a9c4').then(()=>{
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((e) => {
    console.log(e)
})
