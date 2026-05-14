function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "10px", color: "white" }}>
        Yasaswetha Kanchi
      </h1>

      <h2 style={{ color: "#38bdf8", marginBottom: "20px" }}>
        Frontend React Developer
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "20px",
        }}
      >
        I build responsive and modern web applications using
        React, JavaScript, HTML and CSS.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 30px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "10px",
          color: "black",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        View Projects
      </button>

      <div style={{ marginTop: "80px" }}>
        <h2 style={{ color: "#38bdf8", marginBottom: "30px" }}>
          Projects
        </h2>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            margin: "20px auto",
            maxWidth: "600px",
          }}
        >
          <h3>E-Commerce Website</h3>

          <p style={{ lineHeight: "1.7" }}>
            Modern shopping website built using React with
            responsive UI, product pages and cart functionality.
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            margin: "20px auto",
            maxWidth: "600px",
          }}
        >
          <h3>Admin Dashboard UI</h3>

          <p style={{ lineHeight: "1.7" }}>
            Responsive admin dashboard with charts, tables,
            analytics cards and clean modern design.
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            margin: "20px auto",
            maxWidth: "600px",
          }}
        >
          <h3>Portfolio Website</h3>

          <p style={{ lineHeight: "1.7" }}>
            Personal portfolio website showcasing frontend
            development skills and projects using React.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;