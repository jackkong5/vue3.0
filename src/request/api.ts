import service from "@/request/index";
interface loginData{
    username:string,
    password:string
}
export const login = (data:loginData)=>service({
        url:'/user/login',
        method:'post',
        data
})
