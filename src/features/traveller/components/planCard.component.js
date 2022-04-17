/** @format */

import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import personIcon from "../../../../assets/icons/person.png";
import moneyIcon from "../../../../assets/icons/money.png";
import acIcon from "../../../../assets/icons/ac.png";
import { CardDetails } from "../../../components/roomCard.style";
import {
  IconTextContainer,
  CardParent,
  Row,
  Subtitle,
  Title,
  ImagePreview,
  ImagePreviewContainer,
  Icon,
  SpacingSmall,
} from "../../../components/common.style";

import { PlanContentContext } from "../components/planContext";
import { IpRoute } from "../../../components/environmentVeriables";
import { TouchableOpacity } from "react-native-web";
import { PlanCardDetails } from "../screens/travellerPlanCardDetails";

var keyid = 0;
var x = 0;
var temp = 0;
var routelist = [];
var tourGuideAvilability = [];
var vehicleAvilability = [];
export const PlanCard = ({ navigation }) => {
  const [travellerRoute, setTravellerRoute] =
    React.useState([]);

  const {
    days,
    setDays,
    persons,
    setPersons,
    budget,
    setBudget,
    area,
    setArea,
    route,
    setRoute,
  } = React.useContext(PlanContentContext);

  temp = 0;

  async function update(id) {
    await setRoute(travellerRoute[id]);
    console.log(" in parent id ", id);
    console.log("hotel info id", travellerRoute[id]);
    //console.log("in update card info ",hotelObject)
    //console.log(navigation);
    //navigation.navigate("TravellerPlansResultScreen");
  }

  const getRoute = (area, day) => {
    console.log(area + ", " + day);
    fetch(IpRoute + "/getRouteForTraveller", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: area,
        day: day,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(res.status())
        if (data == "wrong credential") {
          Alert.alert(data);
        } else {
          var cnt = 0;
          console.log(
            "plaid",
            data[data.length - 1].planid
          );
          console.log("arrlen", data.length - 1);
          for (
            var i = 1;
            i <= data[data.length - 1].planid;
            i++
          ) {
            for (var j = 0; j < data.length; j++) {
              if (
                i == data[j].planid &&
                data[j] != undefined &&
                routelist[cnt] == undefined
              ) {
                routelist[cnt] = data[j].route + " \n";
              } else if (
                i == data[j].planid &&
                data[j] != undefined
              ) {
                routelist[cnt] += data[j].route + " \n";
              }
              if (
                i == data[data.length - 1].planid &&
                j == data.length - 1
              ) {
                console.log("dhukse");
                console.log("routelist = ", routelist);
                setTravellerRoute(routelist);
                console.log("route", travellerRoute);
              }
            }
            cnt++;
          }
          temp = 0;

          console.log("data", data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    console.log("in route page", area, " ", days);
    getRoute(area, days);
  }, []);

  const list = travellerRoute.map((i) => (
    <PlanCardDetails
      id={temp++}
      routeName={i}
      update={update}
    />
  ));
  // const  {
  //   routes = [
  //     "Nilgiri",
  //     "Debotakhum"
  //   ],
  //   photos = [
  //       "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
  //       "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
  //     ],
  // } = planCardInfo;

  return <>{list}</>;
};
