import {useState, useEffect} from "react";

export function useConditionalEffect(operation, qualifier) {
    function conditionalOperation() {
        if (qualifier)
            operation();
    }

    useEffect(conditionalOperation, [qualifier]);
}

export function useCleanState(defaultValue) {
    const stateObj = {};
    [stateObj.get, stateObj.set] = useState(defaultValue);
    return stateObj;
}

