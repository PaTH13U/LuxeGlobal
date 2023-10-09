import HomePage from "../pages/HomePage/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import SignInPage from "../pages/SignInPage/SignInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import TypeProductsPage from "../pages/TypeProductsPage/TypeProductsPage"

export const routes=[{
    path:'/',
    page:HomePage,
    issShowHeader:true
},
{
    path:'/order',
    page:OrderPage,
    issShowHeader:true
},
{
    path:'/product',
    page:ProductsPage,
    issShowHeader:true
},
{
    path:'/type',
    page:TypeProductsPage,
    issShowHeader:true
},
{
    path:'/signin',
    page:SignInPage,
    issShowHeader:false
},
{
    path:'/signup',
    page:SignUpPage,
    issShowHeader:false
},
{
    path:'/productdetail',
    page:ProductDetailPage,
    issShowHeader:true
},
{
    path:'*',
    page:NotFoundPage
},
]