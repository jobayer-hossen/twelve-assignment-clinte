import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/loginpage/Login";
import Resister from "../pages/resisterpage/Resister";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/dashboard/instructor/AddClass";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MySelectedClasses from "../pages/dashboard/student/MySelectedClasses";
import Payment from "../pages/dashboard/student/Payment";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import Instructor from "../pages/instructor/Instructor";
import Classes from "../pages/classes/Classes";
import ManageClass from "../pages/dashboard/admin/ManageClass";
import MyEnrolledClasses from "../pages/dashboard/student/MyEnrolledClasses";
import PaymentHistory from "../pages/dashboard/student/PaymentHistory";
import AdminRoute from "./AdminRoute";
import FeedbackModal from "../pages/dashboard/admin/FeedbackModal";
import DashBoardCover from "../pages/dashboard/DashBoardCover";
import MyClasses from "../pages/dashboard/instructor/MyClasses";
import UpdateClass from "../pages/dashboard/instructor/UpdateClass";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/instructor',
                element:<Instructor/>
            },
            {
                path:'/classes',
                element:<Classes/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/resister',
                element:<Resister/>
            },
            
            {
                path:'dashboard',
                element:<PrivateRoute><DashBoardLayout/></PrivateRoute>,
                children:[
                    {
                        path:'/dashboard',
                        element:<DashBoardCover/>
                    },
                    // ------instructor
                    {
                        path:'addClass',
                        element:<InstructorRoute><AddClass/></InstructorRoute>
                    },
                    {
                        path:'myClasses',
                        element:<InstructorRoute><MyClasses/></InstructorRoute>
                    },
                    {
                        path:'myClasses/update/:id',
                        element:<InstructorRoute><UpdateClass/></InstructorRoute>,
                        loader: ({params}) => fetch(`https://twelve-assignment-server-indol.vercel.app/addClass/${params.id}`)
                    },
                    // student ----
                    {
                        path:'mySelectedClass',
                        element:<PrivateRoute><MySelectedClasses/></PrivateRoute>
                    },
                    {
                        path:'myEnrolledClass',
                        element:<MyEnrolledClasses/>
                    },
                    {
                        path:'paymentHistory',
                        element:<PaymentHistory/>
                    },
                    {
                        path:'goPayment/:id',
                        element:<Payment/>,
                        loader: ({params}) => fetch(`https://twelve-assignment-server-indol.vercel.app/goPayment/${params.id}`)
                    },
                    //  admin ------
                    {
                        path:'manageUser',
                        element:<AdminRoute><ManageUsers/></AdminRoute>
                    },
                    {
                        path:'manageClass',
                        element:<AdminRoute><ManageClass/></AdminRoute>
                    },
                    {
                        path:'manageClass/feedback/:id',
                        element:<AdminRoute><FeedbackModal/></AdminRoute>,
                        loader: ({params}) => fetch(`https://twelve-assignment-server-indol.vercel.app/addClass/${params.id}`)
                    },
                    
                ]
            }

        ]
    }
]);

export default router ;