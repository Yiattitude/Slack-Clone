"use client"
// React 组件 用来进行交互
// 登录界面背景的设置 同时也是 AuthScreen 的容器

import React, { useState } from 'react'; 
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";


export  const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn"); // 状态管理 声明一个名为 state 的状态变量，其类型被 TypeScript 严格限定为 SignInFlow，初始值为 "signin"。同时获得一个用于更新该状态的函数 setState。
    return (
        <div className="w-full h-full flex items-center justify-center bg-black text-white"> 
        {/* 登录界面背景的设置 */}
          <div className="md:h-auto md:w-[450px] ">
            {/* 登录卡片的大小设置 */}
            {state === "signIn" ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}
          </div>
        </div>
    ); 
}
