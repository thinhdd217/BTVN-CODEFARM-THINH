const sum=(a,b)=>{
    return a+b;

}
//console.log(sum2(1,2))
const sum2=(a,b)=>a+b;
const showObj=()=>({name:"Thinh"})
const showArr=()=>{1,2,3}
//input=>output
const user={
    fullname:"DO DINH THINH",
    hello:function(){
        console.log(`xin chao toi ten la ${this.fullname}`)
    }
}
user.hello()
const user2={
    fullname:"DO DInh Thinh",
    hello:()=>{
        console.log(`xin chao toi la ${this.fullname}`)
    }
    //arrow function khong co this khong co context ring khong nho duoc noi minh sinh ra (closure)
}
user2.hello()