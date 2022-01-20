import axios from '../axios'
import store from '../store'
import qs from 'qs'

function getmain(){
  axios.get("/api/home/main").then(function(res){
    console.log(res)
    store.commit("increment")
  }).catch((err)=>{
    // alert("失败")
    console.log(err)
  })

};





export {getmain}
export default {
  name:"serve"
}


