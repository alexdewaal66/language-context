import {useState} from "react";

export function useCleanState(defaultValue) {
    const stateObj = {};
    [stateObj.get, stateObj.set] = useState(defaultValue);
    return stateObj;
}

