import React, { useReducer } from "react"

export const _AppContext = React.createContext();

const initialAppState = {
    museum: "AIC",
    queryURL: "https://api.artic.edu/api/v1/artworks/search?limit=24&fields=id,image_id,title,artist_title",
    dataPage: 1,
    artData: [],
    dataLoaded: false,
    errorMessage: false,
    darkMode: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'museum':
            return { ...state, museum: action.museum }
        case 'queryURL':
            return { ...state, queryURL: action.queryURL }
        case 'dataPage':
            return { ...state, dataPage: action.dataPage }
        case 'artData':
            return { ...state, artData: action.artData }
        case 'dataLoaded':
            return { ...state, dataLoaded: action.dataLoaded }
        case 'errorMessage':
            return { ...state, errorMessage: action.errorMessage }
        case 'darkMode':
            return { ...state, darkMode: action.darkMode }
    }
}

export const AppContext = ({ children }) => {
    const value = useReducer(reducer, initialAppState);
    
    return(
        <_AppContext.Provider value={value}>
            { children }
        </_AppContext.Provider>
    );
}