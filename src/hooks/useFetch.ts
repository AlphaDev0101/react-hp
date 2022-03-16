import { useEffect, useState } from 'react';

export const useFetch = (uri: string, errMenssage: string = 'Ocurrio un error al trar datos') => {
	const [fetchData, setFetchData] = useState<[]>([]);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const url = 'https://harry-potter-json-server.herokuapp.com';
	useEffect(() => {
		setLoading(true);
		const fetchLibros = async () => {
			try {
				const res = await fetch(url + uri);
				if (!res.ok) {
					throw new Error(`Http status ${res.status}`);
				}
				const data = await res.json();
				setFetchData(data);
			} catch (err) {
				console.error(err);
				setError(errMenssage);
			}
			setLoading(false);
		};
		fetchLibros();
	}, [uri]);

	return { fetchData, error, loading };
};
