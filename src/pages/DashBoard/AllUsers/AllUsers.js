import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
	const { } = useQuery({
		queryKey: ["users"],
		queryFn: () => {
			fetch()
		}
	})
	return (
		<div>
			<h1>All user</h1>
		</div>
	);
};

export default AllUsers;