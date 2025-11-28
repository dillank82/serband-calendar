import { createContext } from "react";
import { IDateContext } from "../Interfaces/IDateContext";

export const DateContext = createContext<IDateContext | undefined>(undefined)