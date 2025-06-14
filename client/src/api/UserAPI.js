import  { useState, useEffect } from 'react';
import axios from 'axios';

const UserAPI = (token) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/infor', {
                        headers: { Authorization: token },
                    });

                    setIsLogged(true);
                    setIsAdmin(res.data.role === 1);
                    console.log(res);
                } catch (err) {
                    alert(err.response.data.msg);
                }
            };
            getUser();
        }
    }, [token]);

    const addCart = async (product) => {
        if (!isLogged) return alert('Please log in.');

        const check = cart.every((item) => item.id !== product._id);

        if (check) {
            setCart([...cart, { ...product, quantity: 1 }]);
        } else {
            alert('This product is already in the cart.');
        }
    };

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart,
    };
};

export default UserAPI;
