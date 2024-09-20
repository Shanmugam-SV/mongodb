const express = require('express');
const app = express()
const mongoose = require('mongoose')
const Student = require('./models/Student');
mongoose.connect('mongodb://localhost:27017/Test1').then (()=> {
    console.log('Connected to MongoDB');
}).catch((err)=> {
    console.error('Failed to connect to MongoDB', err);
})
//insert data into database
const newStudent = new Student({
    name: 'Shanma',
    age: 22,
})
newStudent.save().then(()=> {
    console.log('Data inserted successfully');
});
//update db
// Student.findByIdAndUpdate('66ec4eeb9337a59d8da67926',{name: 'nila'}).then(()=> {
//     console.log('Data updated successfully');
// });
Student.findByIdAndDelete('66ec4eeb9337a59d8da67926').then(()=> {
    console.log('Data deleted successfully');
 
}).catch(err => {
    console.error('Failed to delete data');
    //shanmugam
 
});
Student.find().then((students)=> {
    console.log('Data fetched successfully');
    console.log(students[0].name);
}).catch(err => {
    
 
});;
app.listen(8000,()=> {
    console.log('Server is running on port 8000');
});
