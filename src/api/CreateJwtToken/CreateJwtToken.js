import { useEffect, useState } from "react";

const CreateJwtToken = (email) => {
	const [token,setToken]=useState("")
	useEffect(() => {
		fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("accessToken", data.access_token);
          setToken(data.access_token);
        }
      });
	}, [email])

	return [token]
};

export default CreateJwtToken;