import {useQuery} from "@tanstack/react-query";
import {api} from "../api/index.js";

export const useBestSellers = () => {


    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: api.getProducts,
        staleTime: 5 * 60 * 1000,
    });

    const bestSellers = productsQuery.data ? productsQuery.data.filter(p => p.isBestSellers === true) : [];

    return {
        bestSellers,
        isLoading: productsQuery.isLoading,
        isFetching: productsQuery.isFetching,
        isError: productsQuery.isError,
        error: productsQuery.error,
        refetch: productsQuery.refetch()
    }
}