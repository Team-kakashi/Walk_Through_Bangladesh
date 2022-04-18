import React, { createContext, useState } from "react";

export const PlanContentContext = createContext();

export function PlanContentProvider(props){

    const [areasobj, setAreasobj] = useState([{}]);
    const [routesobj, setRoutesobj] = useState([{}]); 
    const [vehicleobj, setVehicleObj] = useState ([{}]);
    const [guideobj, setGuideObj] = useState ([{}]);
    
    
  const [days, setDays] = React.useState();
  const [persons, setPersons] = React.useState();
  const [budget,setBudget] = React.useState(0);
  const [area,setArea] = React.useState();
  const [route,setRoute] =React.useState();
  const [hotelObject,setHotelObject] = React.useState({});
  const [planid,setPlanid] = React.useState();
  

    return(
        <PlanContentContext.Provider value={{days, setDays, persons, setPersons,budget,setBudget,area,setArea,route,setRoute,
                                             setAreasobj, areasobj, routesobj, setRoutesobj, hotelObject, setHotelObject, planid, setPlanid,
                                             vehicleobj, setVehicleObj,guideobj, setGuideObj}}>
            {props.children}
        </PlanContentContext.Provider>
    );
}