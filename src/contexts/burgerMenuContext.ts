import { ContextType } from "@customTypes/context";
import { createContext } from "react";

export const BurgerMenuContext = createContext<ContextType>({} as ContextType)