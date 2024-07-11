import { Link } from "react-router-dom";

function Home() {
  return (

    <div 
    style={{backgroundImage:'url("https://i.pinimg.com/originals/ed/f7/a1/edf7a1fd9cafaebb8056611d6f882721.jpg")',
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"685px",
    width:"100%",
    marginTop:"-95px",
    overflow:"hidden"
  }}>
      <div style={{ display: "flex", justifyContent: "space-around", margin: "100px 0px 0px 0px" }}>
        <Link to="/dashboard">
          <h3 data-testid="home-link">Home</h3>
        </Link>
        <Link to="/login">
          <h3 data-testid="login-link">Login Page</h3>
        </Link>
      </div>
      <div style={{marginTop:"40px",fontStyle:"italic",
        backgroundImage:'url("https://img.freepik.com/free-vector/people-shopping-with-credit-card_53876-43130.jpg")',
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"350px",
        height:"350px",
        marginLeft:"30px",
        color:"skyblue",
        opacity:"0.7"
      }}>
      <h1>Online Shopping Sales</h1>
      </div>
      <div style={{marginTop:"-400px",fontStyle:"italic"}}>
      <h1>WellCome To</h1>
      <h1>Online Shopping Sales</h1>
      </div>
      <div style={{marginTop:"70px",fontStyle:"italic",
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvmweUhUP65H6_dbadrBowwjooAEtnrF2cttAmoP3PNOYN75g-Qw_ismL64oSLmxqLJg&usqp=CAU")',
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"350px",
        height:"350px",
        marginLeft:"900px",
        marginTop:"-80px",
        color:"wheat",
        opacity:"0.9"
      }}>
        <h2>Sales</h2>
      </div>
    </div>
  );
}
export default Home;
