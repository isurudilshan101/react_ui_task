import React from 'react';
import './Notification.css';

function Notification({count_noti}) {
  return (
    <div className="noti_area">
       
        <i class="far fa-bell"></i>
        <div className="noti_count">{count_noti}</div>

        

    </div>
  )
}

export default Notification;