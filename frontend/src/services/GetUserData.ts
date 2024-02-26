export const GetUserData = () => {
    const getUserData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/get-user-data'); // ovaj endpoint proširiti s dodatnim parametrom
            // potrebno je i provjeriti status code, ako je 200, spremiti podatke od korisnika u store
            const userData = await response.json();

        } catch (error) {
            console.error(error);
        }
    }

    return {
        getUserData
    }
}