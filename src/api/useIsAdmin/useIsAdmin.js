import { useEffect, useState } from "react"

const useAdmin = (email) => {
	const [isAdmin, setIsAdmin] = useState(false)
	const [isLoading, setisLoading] = useState(true)
	useEffect(() => {
		fetch(`http://localhost:5000/users/admin/${email}`)
			.then(res => res.json())
			.then(data => {
				// console.log(data.isAdmin)
				setIsAdmin(data.isAdmin)
				setisLoading(false)
		})
	}, [email])
	return [isAdmin, isLoading];
}

export default useAdmin;