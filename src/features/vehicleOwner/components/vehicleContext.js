import { createContext, useState } from "react";

export const ContentContext = createContext();

export function ContentProvider(props){
    const [vid, setVid] =useState();
    return(
        <ContentContext.Provider value={[vid, setVid]}>
            {props.children}
        </ContentContext.Provider>
    );
}