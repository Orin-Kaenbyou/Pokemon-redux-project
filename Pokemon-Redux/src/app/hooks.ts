import { useDispatch, useSelector } from "react-redux";
import { type appDispatch, type RootState } from "./store";


export const useAppDispatch = useDispatch.withTypes<appDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();