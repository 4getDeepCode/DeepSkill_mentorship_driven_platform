const express=require('express');
const router=express.Router();
const authRoute=require('./authRoutes');


const Routes=[
    {
        path:"/auth",
        route:authRoute
    },
 
    
];
Routes.forEach((route)=>{
    router.use(route.path, route.route)
});

module.exports=router;
