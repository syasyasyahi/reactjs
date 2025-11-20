import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  // setter dan getter
  const [angka, setAngka] = useState(5);
  const [name, setName] = useState("Joie");
  const ubahNama = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Selamat Datang, {name}</h1>
      <input type="text" placeholder="Type your name" onChange={ubahNama}/>
      <br/>
      <br/>
      <h3>Tambah angka</h3>
      <p>Angka {angka}</p>
      <button onClick={() => setAngka(angka * 5)}>Tambah Angka</button>


    </>

    // <div style={{display: "flex", gap: "1rem", padding:"30px"}}>
    //   <ProfileCard photo="https://i.pravatar.cc/150?img=46" name="Goldie" bio="If there is a will there is a whiskas" job="Senior Napper" />
    //   <ProfileCard photo="https://i.pravatar.cc/150?img=2" name="Joie" bio="Love Everybody" job="Lead human support" />
    //   <ProfileCard photo="https://i.pravatar.cc/150?img=37" name="Rosie" bio="No Rest Till Blood Shed" job="Managing director of human attack" />
    // </div>
  );
}

export default App;
