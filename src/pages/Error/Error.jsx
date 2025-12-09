// client/src/pages/Error/Error.jsx
function Error({ error }) {
  console.error(error);

  return (
    <div style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
      <h1>Something went wrong 😢</h1>
      <p>{error?.message || String(error) || "Unknown error occurred."}</p>
    </div>
  );
}

export default Error;
