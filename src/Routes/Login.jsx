import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    let userdata = {
      email, password
    }
    alert("successfully Loggin....!!")
    axios.post("https://reqres.in/api/login", userdata).then((res) => {
      loginUser(res.data.token)
      navigate("/dashboard")
    })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div style={{
      backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/000/964/117/non_2x/login-screen-landing-page-template-vector.jpg")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "600px",
      width: "100%"
    }}>
      <div>
        <h1 style={{ backgroundColor: "pink" }}>Login_Page</h1>
      </div>
      <div style={{
        //   marginTop:"350px",
        //  width:"30%",
        //  height:"300px",
        //  marginLeft:"200px"
      }}>
        <form data-testid="login-form" onSubmit={handlesubmit}>
          <div>
            <label>
              {/* Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
              <input onChange={(e) => setemail(e.target.value)} data-testid="email-input" type="email" placeholder="email" style={{ backgroundColor: "antiquewhite", width: "315px", marginLeft: "-555px",
              marginTop:"172px"

              }} />
            </label>
          </div><br />
          <div>
            <label>
              {/* Password &nbsp; */}
              <input onChange={(e) => setpassword(e.target.value)}
                data-testid="password-input"
                type="password"
                placeholder="password"
                style={{ backgroundColor: "antiquewhite", width: "315px", marginLeft: "-555px", marginBottom: "12px",
                  marginTop:"28px"
                  
                }}
              />
            </label>
          </div><br /><br /><br />
          <div>
            <input data-testid="form-submit" type="submit" value="SUBMIT" style={{ width: "315px", height: "50px", marginLeft: "-553px" ,
            marginTop:"-6px"

            }} />
          </div>
        </form>
        <br /><br /><br />
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
