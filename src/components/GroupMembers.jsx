function GroupMembers() {
    const members = [
      { id: "w1", name: "Wengelawit Girma" },
      { id: "a1", name: "Alazar Shawel" },
      { id: "m1", name: "Maraky Ayalneh" },
      { id: "h1", name: "Helen Zelalem" },
      { id: "y1", name: "Yordanos Belihu" },
      { id: "g1", name: "Gemechis Sinishaw" },
      { id: "a2", name: "ABDULBASIT HAMID" },
      { id: "e1", name: "Estifanos Zinabu" },
    ];
  
    return (
      <div>
        <h2>Group Members</h2>
        <ul>
          {members.map((member) => (
            <li key={member.id}>{member.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default GroupMembers;
  