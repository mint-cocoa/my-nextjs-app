import React from "react";
import { Patient_register } from "../components/component/patient_register"; // YourComponentFile에는 주어진 컴포넌트 파일의 경로를 지정하세요
function Patient_register_logic() {
  return (
    <div>
      <Patient_register />
    </div>
  );












}

export default Patient_register_logic;

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.querySelector('form');
//   form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Mock 응답 데이터
//     const mockResponse = { success: true, message: '환자 등록 완료' };
//     //로그인페이지로 경로 이동
//     setTimeout(function () {
//       window.location.href = 'patient_login.html';
//     });

//     // 여기서 실제 API 요청 대신 Mock 응답을 처리
//     Promise.resolve(mockResponse).then(response => {
//       if (response.success) {
//         alert(response.message);
//         // 성공 로직 처리
//       } else {
//         // 실패 로직 처리
//       }
//     });
//   });
// });

/*
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => { data[key] = value; });
      
      fetch('/api/doctors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        alert('의사 등록 성공');
        // 여기서 추가로 성공 시 로직을 구현
      })
      .catch(error => {
        alert('의사 등록 실패');
        console.error('Error:', error);
      });
    });
  });
  */