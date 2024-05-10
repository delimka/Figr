import Spinner from "react-bootstrap/Spinner";

function Skeleton() {
  return (
    <div style={{ minHeight: "100svh", display:"grid", placeItems: "center", backgroundColor:"#F8F9FA"}}>
      <Spinner animation="border" role="status" style={{color:"#FF7F00"}}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Skeleton;
