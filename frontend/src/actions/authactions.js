
import axios from "axios";

export const login = (data,navigate) => async (dispatch) => {
  
  try {
    const config={
        headers: {
                "Content-Type": "application/json",
             }
    }
    await axios.post('https://minip-seven.vercel.app/api/auth/login',data,config).then((data1)=>{
      dispatch({
        type: "LOGIN_USER",
        payload: data1.data,
      });

      if (!data1.success) {
        localStorage.setItem("token", data1.data.authtoken);
        navigate("/");
      }
    })

  } catch (err) {
    console.log(err);
    alert("please enter correct credentials");
  }
};

export const getUser = () => async(dispatch)=>{
  try {
    
      await axios.get('https://minip-seven.vercel.app/api/auth/getuser').then((data1)=>{
        dispatch({
          type: "GET_USER",
          payload: data1.data.user,
        });
  
      })
  
    } catch (err) {
      console.log(err);
    }
}

