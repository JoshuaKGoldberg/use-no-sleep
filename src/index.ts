import NoSleep from "nosleep.js";
import { useEffect, useMemo, useState } from "react";

export const useNoSleep = (enabled: boolean) => {
    const [alreadyEnabled, setAlreadyEnabled] = useState(false);
    const noSleep = useMemo(() => new NoSleep(), []);

    useEffect(() => {
        if (alreadyEnabled === enabled) {
            return;
        }

        if (enabled) {
            noSleep.enable();
        } else {
            noSleep.disable();
        }

        setAlreadyEnabled(enabled);
    }, [alreadyEnabled, enabled, noSleep]);
};

export default useNoSleep;
