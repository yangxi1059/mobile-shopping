import axios from "../plugins/axios";

export default{
  cartadd:({commit,state},payload)=>{
      console.log(payload)
    {commit('cartadd',payload)}
  },
  changeItem:({commit,state},payload)=>{

    // [...state.buycar]
    // {....state}
    state.cartadd.forEach((item,index)=>{
      console.log(item)
        if(item.id==payload._id){
        item.num=payload.num+item.num*1;        
        if(item.num<1){
          item.num = 1
        }   
        console.log(state.cartadd)  
      }
    });
    localStorage.setItem('goods',JSON.stringify(state.cartadd))
    //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用
    commit('cartadd1',state.cartadd)
    // commit(types.CHANGE_ITEM,state)  ×
  },
  deletegoods:({commit,state},payload)=>{
    console.log(1)
    state.cartadd.forEach((item,index)=>{
      console.log(payload)
      if(item.id==payload){
        state.cartadd.splice(index,1)
      }
    });
    localStorage.setItem('goods',JSON.stringify(state.cartadd))
    commit('cartadd2',state.cartadd)

  }
  // change:({commit,state},payload)=>{
  //   {commit('change',payload)}
  // }
}