import React, {useState} from "react"
import PriceSVG from "../../../assets/svg/price.svg";
import PositiveGrowth from "../../../assets/svg/positive-growth.svg";
import AnalyticCard from "../common/AnalyticCard";
import Profile from "../Profile";
import Seetings from "../Settings/Setting";
import { frontStoreLink } from "../../../config/apis";
import './dashboard.scss';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { menuEnum } from "../../../config/navMenu";

const analyticsData = [
  {
    title: "89,935",
    titleText: "Total Revanue",
    amount: "10.2",
    weekGrowth: "+1.101% this week",
    Icon: <PriceSVG />,
    growthIcon: (<PositiveGrowth />),
  },
  {
    title: "89,935",
    titleText: "Total Revanue",
    amount: "10.2",
    weekGrowth: "+1.101% this week",
    Icon: <PriceSVG />,
    growthIcon: (<PositiveGrowth />),
  },
  {
    title: "89,935",
    titleText: "Total Revanue",
    amount: "10.2",
    weekGrowth: "+1.101% this week",
    Icon: <PriceSVG />,
    growthIcon: (<PositiveGrowth />),
  },
  {
    title: "89,935",
    titleText: "Total Revanue",
    amount: "10.2",
    weekGrowth: "+1.101% this week",
    Icon: <PriceSVG />,
    growthIcon: (<PositiveGrowth />),
  }
]



export default function Dashboard() {
  const {auth} = useSelector((state: RootState) => state.auth);
  const [showProfileSideModel, setShowProfileSideModel] = useState<boolean>(false);
  const [showSettingModel, setShowSettingModel] = useState<boolean>(false);

  

 
  return (
    <>

     <Seetings showModel ={showSettingModel} setShowModel = {setShowSettingModel}/>
     <Profile showModel={showProfileSideModel} setShowModel={setShowProfileSideModel}/>
      
      <div className="ci--dashboard">
        <div className="ci--dashboard__title">
          Welcome Back, Hello World
        </div>
        <div className="ci--dashboard__staticstic">
          {analyticsData.map((item, i) => <AnalyticCard
            key={i}
            title={item.title}
            Icon={item.Icon}
            titleText={item.titleText}
            growthIcon={item.growthIcon}
            amount={item.amount}
            weekGrowth={item.weekGrowth}
          />)}
        </div>
        <div className="ci--dashboard__graphs">
          Store Link: {`${frontStoreLink}/${auth?.id}`}
        </div>

      </div>
      <div>Dashboard</div>
      

    </>
  )
}