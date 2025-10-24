import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import {FcGoogle } from "react-icons/fc"
import {FaGithub } from "react-icons/fa"
import { SignInFlow } from "../types";
import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";

// 登录卡片的设置

interface SignInCardProps {
    setState: (state : SignInFlow) => void; // 状态管理 函数 
}
export const SignInCard = ({setState}:SignInCardProps) => { //  {setState}:SignInCardProps  函数参数      
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const { signIn } = useAuthActions();
    const handleProviderSignIn =( value:"github"|"google")=>{
        signIn(value)
    };
    return (

        <Card  className="w-full h-full p-15">  
           
            <CardHeader className="px-0 pt-0 ">
               <CardTitle className="text-[25px] font-body "> 
               Login to continue   
              </CardTitle>
             <CardDescription>
               Use your email and other service to login.
             </CardDescription>
           </CardHeader>
           
           

           <CardContent className=" space-y-7 px-0 pb-0">
            <form className="space-y-2.5">
                {/* 邮箱输入框 */}
                <Input
                placeholder="Email"
                disabled={false}
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                type="email"
                required
                  /> 
                {/* 密码输入框 */}
                   <Input 
                   placeholder="password"
                disabled={false}
                value={password}
                onChange={(e)=>{ setPassword(e.target.value)}}
                type="password"
                required
                  />
                  {/*  按钮导入*/}
                
                <Button type="submit" size='lg' disabled={false} className="w-full  rounded-px-5" >
                    Continue
                </Button>
                
            </form>
            {/* 分割线 然后添加github and google的图标 */}
             <Separator />
                         <div className="flex flex-col gap-y-2.5">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    disabled={false}
                                    onClick={() => handleProviderSignIn("google")}
                                    className="w-full  relative rounded-px-5"
                                >
                                    <FcGoogle className="absolute left-5 top-3 -translate-y-1/2" />
                                    Continue with Google
                                </Button>
                         </div>

                         <div className="flex flex-col gap-y-2.5">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    disabled={false}
                                    onClick={() => handleProviderSignIn("github")}
                                    className="w-full  relative rounded-px-5"
                                >
                                    <FaGithub className="absolute left-5 top-3 -translate-y-1/2" />
                                    Continue with Github
                                </Button>
                         </div>

             <p className="text-sm  text-muted-foreground">
                Don't have an account? <span  onClick={()=>setState('signUp')}  className="text-sky-600 hover:underline cursor-pointer">Sign Up</span>
             </p>

           </CardContent>
        </Card>
    );
}
