/** @format */

import React from "react";
import { ScrollView, View } from "react-native";
import { Alert } from "react-native-web";
import styled from "styled-components/native";
import {
    SafeAreaViewContainer,
    TextInputTheme,
    SpacingLarge,
    PrimaryButton,
    H1,
} from "../../../components/common.style";
import { ModalView, ItemChoise } from "../../../components/modalView.view";
import { IpRoute } from "../../../components/environmentVeriables";
import {PlanContentContext} from "../components/planContext";

var serviceArea;
var serviceRoute;
var dayno; 
var personno;
var arealist = [], routelist = [];
export const TravellerPlanScreen = ({navigation}) => {

  const {days, setDays, persons, setPersons, budget, setBudget, area, setArea, route, setRoute} = React.useContext(PlanContentContext);
  // const [persons, setPersons] = React.useContext(PlanContentContext);
  // const [budget, setBudget] = React.useContext(PlanContentContext);
  // const [area,setArea] = React.useContext(PlanContentContext);
  // const [route,setRoute] =React.useContext(PlanContentContext);



  const day= [1,2,3,4];
  const Person = [1,2,3,4,5];

  

  const getArea = () => {
    fetch(IpRoute+"/getAllAreaRoute", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(res.status())
        if (data == "wrong credential") {
          Alert.alert(data);
        } else {
          var j=0;
          for (var i=0;i<data.length;i++){
            arealist[j++]= data[i].area;
          }
          console.log(data);
          
        }
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };

  const selectAreaValue=(item)=>{
    console.log("my slected item", item);
    serviceArea = item;
    
  }


  const getRoute = (area,day) => {
    console.log(area+", "+day);
    fetch(IpRoute + "/getRouteForTraveller", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: area,
        day: day
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      //console.log(res.status())
      if (data == "wrong credential") {
        Alert.alert(data);
      } else {
        var cnt=0;
    
        for(var i=1;i<=data[data.length-1].planid;i++){
          for(var j=0; j<data.length;j++){
            if(i == data[j].planid && data[j]!= undefined && routelist[cnt]==undefined){
               routelist[cnt]=(data[j].route+", ");
            }
            else if(i == data[j].planid && data[j]!= undefined){
              routelist[cnt] += (data[j].route+", ");
            }
          }    
            cnt++;
          
        }
        
        
      console.log(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const selectRouteValue=(item)=>{
    console.log("my slected item", item);
    serviceRoute = item;
  }

  React.useEffect(()=>{
    getArea();
  },[])

  const selectDayValue=(item)=>{
    console.log("my slected item", item);
    dayno = item;
    console.log("in select day"+serviceArea);
    getRoute(serviceArea,dayno);
  }

  const selectPersonValue=(item)=>{
    console.log("my slected item", item);
    personno = item;
  }

  const onpressbtn=()=>{
    if (budget == "") {
      Alert.alert("Fill all fields");
    }
    else{
    setArea(serviceArea);
   // setRoute(serviceRoute);
    setBudget(budget);
    setDays(dayno);
    setPersons(personno);
    console.log (serviceArea+" "+serviceRoute+" "+budget+" "+dayno)
    console.log (area+" "+route+" "+days+" "+persons+" "+budget)
    navigation.navigate("TravellerHottelResultScreen");
    }
  }

  

  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Plan Generate</H1>

        <SpacingLarge />

        <ModalView
          Title="Area"
          Array={arealist}
          PickerValue={selectAreaValue}
        ></ModalView>

        <ModalView
          Title="Days"
          Array={day}
          PickerValue={selectDayValue}
        ></ModalView>

        {/* <ModalView
          Title="Route"
          Array={routelist}
          PickerValue={selectRouteValue}
        ></ModalView> */}

      <TextInputTheme 
      label="Budget"
      onChangeText={setBudget}
      value={budget}
      ></TextInputTheme>

       

        <ModalView
          Title="Persons"
          Array={Person}
          PickerValue={selectPersonValue}
        ></ModalView>


        <SpacingLarge />
        <PrimaryButton
          icon="plus-circle" onPress={onpressbtn}
        >
          Generate
        </PrimaryButton>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
