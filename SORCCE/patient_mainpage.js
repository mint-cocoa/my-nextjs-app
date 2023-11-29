// Mock 데이터
const mockDoctorsData = [
    {
      name: '이종훈 원장',
      availability: [
        { date: '2023.11.22', time: '11:00', available: true },
        { date: '2023.11.22', time: '13:00', available: true },
        { date: '2023.11.22', time: '15:00', available: false }
      ]
    },
    // 다른 의사들의 데이터도 이와 같은 형식으로 추가
  ];
  
  // 백엔드 API 대신 Mock 데이터를 반환하는 함수
  function fetchAppointments() {
    // Promise 객체를 사용하여 비동기 처리를 모방
    return Promise.resolve(mockDoctorsData);
  }
  
  // 기존의 fetchAppointments 함수를 대체
  document.addEventListener('DOMContentLoaded', function() {
    fetchAppointments().then(data => {
      const modalSection = document.querySelector('.modal-section');
      modalSection.innerHTML = ''; // 기존 내용을 지움
      data.forEach(doctor => {
        const section = document.createElement('div');
        section.className = 'modal-section';
        
        const h2 = document.createElement('h2');
        h2.textContent = doctor.name;
        section.appendChild(h2);
        
        doctor.availability.forEach(slot => {
          const content = document.createElement('div');
          content.className = `modal-content ${slot.available ? 'available' : 'unavailable'}`;
          
          const dateTime = document.createElement('span');
          dateTime.className = 'date-time';
          dateTime.textContent = `${slot.date} ${slot.time}`;
          content.appendChild(dateTime);
          
          const action = document.createElement('span');
          action.className = 'action';
          action.textContent = slot.available ? '예약하기 >' : '예약불가';
          content.appendChild(action);
          
          section.appendChild(content);
        });
        
        modalSection.appendChild(section);
      });
    }).catch(error => console.error('Error:', error));
  });
  

/*
document.addEventListener('DOMContentLoaded', function() {
    function fetchAppointments() {
      fetch('/api/appointments')
        .then(response => response.json())
        .then(data => {
          const modalSection = document.querySelector('.modal-section');
          modalSection.innerHTML = ''; // Clear existing content
          data.forEach(appointment => {
            // Add new appointment details to the page
            // ... 페이지 예약시간 추가로직 구현
          });
        })
        .catch(error => console.error('Error:', error));
    }
  
    // 페이지 로드 시 예약 정보를 불러옴.
    fetchAppointments();
  });
  */