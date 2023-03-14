import mongoose from 'mongoose';


// try {
export const connect= async()=> {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')
  console.log("connect db")
}
  //     const Cat = mongoose.model('Cat', { name: String });
  //     const kitty = new Cat({ name: 'Zildjian' });
  //     kitty.save().then(() => console.log('meow'));
  //     console.log("db connect")
  // } catch (error) {
  //   console.log(error)
  // }



// 