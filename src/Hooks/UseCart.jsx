import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from '@tanstack/react-query'

const UseCart = () => {
    const { user } = useContext(AuthContext)
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
          },
      })
      return [cart, refetch]
}

export default UseCart;