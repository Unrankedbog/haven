import {useMemo, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {api} from "../api/index.js";

export const FILTERS = {
    HITS : 'hits',
    NEW : 'new',
    SALES : 'sales'
}

export const usePopularProducts = () => {

    const [activeFilter, setActiveFilter] = useState(FILTERS.HITS);

    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: api.getProducts,
        staleTime: 5 * 60 * 1000,
    });

    const filteredProducts = useMemo(() => {
        if (!productsQuery.data) return [];

        let filtered = [];

        switch (activeFilter) {
            case FILTERS.HITS:
                filtered = productsQuery.data.filter(p => p.isHit === true);
            break;
            case FILTERS.NEW:
                filtered = productsQuery.data.filter(p => p.isNew === true);
            break;

            case FILTERS.SALES:
                filtered = productsQuery.data.filter(p => p.isSale === true);
            break;
            default: filtered = productsQuery.data;
        }
        return filtered.slice(0, 5);
    }, [productsQuery.data, activeFilter]);

    return {
        products: filteredProducts,
        activeFilter,
        setActiveFilter,
        isLoading: productsQuery.isLoading,
        isFetching: productsQuery.isFetching,
        isError: productsQuery.isError,
        error: productsQuery.error,
        refetch: productsQuery.refetch()
    };
}