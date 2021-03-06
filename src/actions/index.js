import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

           
export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('product', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}
             //lấy tất cả các sản phẩm
export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`product/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('product', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}


// request lên API lấy ra sản phẩm có id tương ứng
export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`product/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data)); //lưu vào store
        });
    }
}
        //lấy sản phẩm ở trong store
export const actGetProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`product/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}
