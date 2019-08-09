 if(JSON.parse(localStorage.getItem('goods'))){
    var cartadd = JSON.parse(localStorage.getItem('goods'))
    }else{
     var cartadd = []
    }
export default {
    'cartadd':cartadd,
    // 'change':[]
}