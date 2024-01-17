import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllCategory } from '../../Redux/actions/categoryAction';

const HomeCategoriesHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(AllCategory(4, 1));
    }, []);
  
    const categories = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
    const res = categories.data ? categories.data : [];

    return [loading,res]
  
}

export default HomeCategoriesHook;
