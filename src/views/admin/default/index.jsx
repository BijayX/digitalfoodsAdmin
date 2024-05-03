
import { MdBarChart } from "react-icons/md";


import Widget from "components/widget/Widget";
// import CheckTable from "views/admin/default/components/CheckTable";
// import ComplexTable from "views/admin/default/components/ComplexTable";
// import DailyTraffic from "views/admin/default/components/DailyTraffic";
// import TaskCard from "views/admin/default/components/TaskCard";
// import tableDataCheck from "./variables/tableDataCheck.json";
// import tableDataComplex from "./variables/tableDataComplex.json";
import { useEffect, useState } from "react";
import api from "http/ApiService";

const Dashboard = () => {
  const [datas,setDatas] = useState({})
  

  useEffect(()=>{
    (
      async ()=>{
        const result = await api.getDatas('admin/misc/datas')
      
        setDatas(result)
      }
    )()
  },[])
  const totalOrderedUsers = datas && datas.allOrders?.map((order) => ({
    userId: order.user?._id, // Safely access _id property
  }));
   const uniqueTotalOrderedUsers = [...new Set(totalOrderedUsers?.map(user=>user.userId))]
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Orders"}
          subtitle={datas.orders}
        />
            <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Users"}
          subtitle={datas.users}
        />
            <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Products"}
          subtitle={datas.products}
        />
 
  
      </div>

      {/* Charts */}

  
    </div>
  );
};

export default Dashboard;