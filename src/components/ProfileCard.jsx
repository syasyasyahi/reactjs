const ProfileCard = ({ photo, name, bio, job }) => {
  return (
    <div
      style={{
        width: "240px",
        background: "lavender",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 0 3px #e5e5e5",
        textAlign: "center",
        marginBottom: "1rem",
      }}
    >
      <img
        src={photo}
        alt=""
        style={{
          width: "100%",
          borderRadius: "50%",
          marginBottom: "15px",
          border: "4px solid white",
        }}
      />
      <h3 style={{ color: "black", margin: "5px 0", fontWeight: "bold", fontSize: "20px" }}>{name}</h3>
      <p style={{color:"black", fontSize: "14px", marginBottom: "10px"}}>{job}</p>
      <p style={{color:"black", fontSize: "14px", marginBottom: "15px"}}>{bio}</p>
      <button>Follow</button>
    </div>
  );
};

export default ProfileCard;
