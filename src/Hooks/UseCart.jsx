import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";

const UseCart = () => {
    // const token = localStorage.getItem('access-token')
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data
          },
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}` , {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        //   },
      })
      return [cart, refetch]
}

export default UseCart;