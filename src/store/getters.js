export default {
    'cartadd':(state)=>state.cartadd,
    // 'change':(state)=>state.number
    getnumber(state){
        var a = 0;
        state.cartadd.forEach(item => {
            a=item.num+a;
        });
        return a
    }

}