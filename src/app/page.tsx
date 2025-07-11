'use client'

import Image from "next/image";
import { use, useEffect, useState } from "react";
import { User } from "../../types/user";
import Navbar from "@/components/navbar/Navbar";
import RoundedButton from "@/components/buttons/RoundedButton";
import { useRouter } from "next/navigation";

import 'atropos/css'
import Atropos from "atropos/react";
import Background from "@/components/utils/Background";


export default function Home() {
  //const users = use<User[]>(fetchUsers())
  const router = useRouter()

  const register = () => {
    router.push('/register')
  }

  return (
    <div className="w-full min-h-[100dvh] ">
      <Background/>

      <Navbar active={0}></Navbar>

      <section className="w-full h-full absolute top-0 left-0 flex gap-1 flex-row">

        <div className="flex flex-col gap-9 w-[50vw] text-[30px] h-full pt-[15%] pl-[5%] pr-[7%]">
          <p
          data-aos="fade-up"
            className="leading-9">
            ¡<b>Bienvenido</b> a nuestra <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-[35px] font-extrabold text-transparent">Plataforma</span>!
          </p>
          <p className="leading-9">
            <b>Regístrate</b> a continuación o explora las opciones de <b>administración</b>.
          </p>
          <RoundedButton
            onClick={register}
          />
        </div>

        <div className="w-[50vw] h-full relative">


          <Atropos
            className="my-atropos absolute top-[15%] left-[50%] w-[30%] max-h-[450px] h-[35%] group/card">

            <div data-atropos-offset="-5" className="w-full h-full rounded-[1rem] aspect-square bg-amber-500 duration-500 group-hover/card:bg-gradient-to-r from-fuchsia-600 to-indigo-800 flex items-center justify-center cursor-pointer">
            <p 
            data-atropos-offset="20" 
            className="font-black text-white text-[28px]">Nuestros <br></br> Clientes</p>
            </div>
          </Atropos>

          <Atropos
            className="my-atropos absolute top-[5%] left-[18%] w-[30%] max-h-[450px] h-[35%] group/card">

            <div data-atropos-offset="-5" className="w-full h-full rounded-[1rem] aspect-square bg-amber-500 duration-500 group-hover/card:bg-gradient-to-r from-fuchsia-600 to-indigo-800 flex items-center justify-center cursor-pointer">
            <p 
            data-atropos-offset="20" 
            className="font-black text-white text-[28px]">Nuestros <br></br> Proyectos</p>
            </div>
          </Atropos>

          <Atropos
            className="my-atropos absolute -top-[10vh] left-[52%] w-[30%] max-h-[450px] h-[35%] group/card">

            <div data-atropos-offset="-5" className="w-full h-full rounded-[1rem] aspect-square bg-amber-500 duration-500 group-hover/card:bg-gradient-to-r from-fuchsia-600 to-indigo-800 flex items-center justify-center cursor-pointer">
            <p 
            data-atropos-offset="20" 
            className="font-black text-white text-[28px]">Quiénes <br></br> Somos</p>
            </div>
          </Atropos>
        </div>

      </section>

    </div>
  );
}
