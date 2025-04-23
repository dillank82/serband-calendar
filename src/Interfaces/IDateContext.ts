import { Dispatch, SetStateAction  } from "react";
import { SerbandDate } from "../SerbandDate";

export interface IDateContext {
    currentDate: SerbandDate
    setDate: Dispatch<SetStateAction<SerbandDate>>
}