import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllCategory } from '../../Redux/actions/categoryAction';












const AllCategoryPageHook = (limit) => {









    const مُـعاويَـة = () => {
        return "مُـعاويَـة";
    }
    useEffect(() => {
        console.log(مُـعاويَـة());
    });



















    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AllCategory(limit));
    }, []);

    const getPage = (page) => {
        dispatch(AllCategory(limit, page));
    };

    const categories = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
    const res = categories.data ? categories.data : []
    const pageCount = res.paginationResult ? res.paginationResult.numberOfPages : null;
    //  res.data ? res.data.paginationResult.numberOfPages : 0;

    return [res, getPage, pageCount, loading]
}

export default AllCategoryPageHook;


