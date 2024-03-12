import React from 'react';
import { useState } from "react";
import { useSelector } from "react-redux";
import PositiveGrowth from "../../../assets/svg/positive-growth.svg";
import PriceSVG from "../../../assets/svg/price.svg";
import { frontStoreLink } from "../../../config/apis";
import { RootState } from "../../../store";
import Profile from "../Profile";
import Seetings from "../Settings/Setting";
import AnalyticCard from "../common/AnalyticCard";
import './dashboard.scss';

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
  const { auth } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Seetings />
      <Profile />

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