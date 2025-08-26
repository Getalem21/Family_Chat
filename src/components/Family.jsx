import React from "react";
import "./Family.css";

const familyMembers = [
  { name: "Mom", status: "Online", img: "https://i.pravatar.cc/50?img=1" },
  { name: "Dad", status: "Offline", img: "https://i.pravatar.cc/50?img=2" },
  { name: "Brother", status: "Online", img: "https://i.pravatar.cc/50?img=3" },
  { name: "Sister", status: "Away", img: "https://i.pravatar.cc/50?img=4" },
];

function Family() {
  return (
    <div className="family-page">
      <h2>Family Members</h2>
      <div className="family-list">
        {familyMembers.map((member, index) => (
          <div key={index} className="family-card">
            <img src={member.img} alt={member.name} />
            <div>
              <h3>{member.name}</h3>
              <p className={`status ${member.status.toLowerCase()}`}>
                {member.status}
              </p>
            </div>
            <button className="chat-btn">Chat</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Family;
