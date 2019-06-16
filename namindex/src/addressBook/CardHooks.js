import React, { useState, useEffect } from "react";

const Card = () => {

  const [initials, setInitials] = useState("LK")
  const [name, setName] = useState("Lasha Krikheli")
  const [phone, setPhone] = useState("555-555-5555")
  const [email, setEmail] = useState("email@me.com")
  const [favorite, setFavorite] = useState("false")

  useEffect(() => {
    console.log(`Value has changed to: ${favorite}`)
  })

  const activeClass = favorite ? "active" : "";

  return (
    <section className="card-container">
      <header className="card-header">
        <span initials={initials} />
        <h2>{name}</h2>
        <div className={`favorite ${activeClass}`} onClick={() => { 
          setFavorite(!favorite)
        }}>
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {phone ? phone : "n/a"}
          </li>
          <li>
            <span>Email</span>
            {email ? email : "n/a"}
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Card;
