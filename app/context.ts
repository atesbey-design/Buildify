"use client"
import React ,{createContext, useContext, useState} from "react";

interface IContext {
    data: any;
    setData: any;
}

const defaultContext: IContext = {
    data: "",
    setData: (data : any) => {
      data = data;
    },
};

const Context = createContext<IContext>(defaultContext);

export function useAppContext() {
    return useContext(Context);
}

type Props = {
    children: React.ReactNode;
};

