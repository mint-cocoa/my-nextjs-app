
import { Inter } from 'next/font/google'
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })






export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  

  const handleLogin = () => {
    try {
      // 간단한 하드코딩된 로그인 체크
      if (email === "admin@gmail.com" && password === "admin") {
        router.push('admin');
      } else if (email === "patient@gmail.com" && password === "patient") { 
        router.push('patient_mainpage');
      }
    } catch (error) {
      console.error(error); // 오류를 콘솔에 출력
      // 필요에 따라 추가적인 오류 처리 로직을 여기에 작성할 수 있습니다.
    }
  };



  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">충북대학교 병원 예약 시스템</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
               type="password"
               id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-2">
            <button 
            type="button"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
        

        <p className="mt-4 text-sm text-center text-gray-700">
          저희 병원이 처음이신가요?{" "}
        
          <button
            onClick={() => router.push('patient_register')} // 'signup'은 회원가입 페이지의 경로입니다.
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              회원가입
            </button>
          </p>
      </div>
    </div>
  );
}
