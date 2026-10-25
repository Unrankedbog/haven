import {useQuery} from "@tanstack/react-query";
import {api} from "../api/index.js";
import {useMemo} from "react";


export const usePopularCategories = () => {
    const categoriesQuery = useQuery({
       queryKey: ['categories'],
       queryFn: api.getCategories,
       staleTime: 5 * 60 * 1000,
    });
    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: api.getProducts,
        enabled: !!categoriesQuery.data,
        staleTime: 5 * 60 * 1000,
    });

    const data = useMemo(() => {
        if(!categoriesQuery.data || !productsQuery.data) return [];

        return categoriesQuery.data.filter(category => category.isPopular === true).map((category) => ({
            ...category,
            productCount: productsQuery.data.filter(
                product => product.categoryId === category.id,
            ).length,
        })).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
    }, [categoriesQuery.data, productsQuery.data]);
    return {
        data,
        isLoading: categoriesQuery.isLoading || productsQuery.isLoading,
        isFetching: categoriesQuery.isFetching || productsQuery.isFetching,
        isError: categoriesQuery.isError || productsQuery.isError,
        error: categoriesQuery.error || productsQuery.error,
        refetch: () => {
            categoriesQuery.refetch();
            productsQuery.refetch();
        }

    }
}