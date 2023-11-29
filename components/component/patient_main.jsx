import React from "react";


function Patientmain() {
    return (
      <div>
        <div className="modal">
  <div className="modal-header">
    의사 예약하기
  </div>
  
 
  <div className="modal-section">
    <h2>이종훈 원장</h2>
    <div className="modal-content available">
      <span className="date-time">2023.11.22 11:00, 수요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
    
    <div className="modal-content available">
      <span className="date-time">2023.11.22 13:00, 수요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
   
    <div className="modal-content unavailable">
      <span className="date-time">2023.11.22 15:00, 수요일</span>
      <span className="action">예약불가</span>
    </div>

    <div className="modal-content available">
      <span className="date-time">2023.11.22 13:00, 수요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
  </div>
  

  <div className="modal-section">
    <h2>김현우 원장</h2>
    <div className="modal-content available">
      <span className="date-time">2023.11.23 11:00, 목요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
  
    <div className="modal-content unavailable">
      <span className="date-time">2023.11.23 15:00, 목요일</span>
      <span className="action">예약불가</span>
    </div>
    <div className="modal-content unavailable">
      <span className="date-time">2023.11.23 15:00, 목요일</span>
      <span className="action">예약불가</span>
    </div>
    <div className="modal-content available">
      <span className="date-time">2023.11.23 11:00, 목요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
    
  </div>
  
 
  <div className="modal-section">
    <h2>이태현 원장</h2>
    <div className="modal-content available">
      <span className="date-time">2023.11.24 11:00, 금요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
    <div className="modal-content available">
      <span className="date-time">2023.11.24 11:00, 금요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
 
    <div className="modal-content unavailable">
      <span className="date-time">2023.11.24 17:00, 금요일</span>
      <span className="action">예약불가</span>
    </div>
    <div className="modal-content available">
      <span className="date-time">2023.11.24 11:00, 금요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
  </div>
  
  <div className="modal-footer">
    <button className="close-button">Close</button>
  </div>
</div>
      </div>    
    );
  }

export default Patientmain;