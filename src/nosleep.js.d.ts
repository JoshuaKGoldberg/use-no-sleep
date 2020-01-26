declare module "nosleep.js" {
    class NoSleep {
        /**
         * Disables wake lock at some point in the future.
         *
         * @remarks
         * This does not need to be wrapped in any user input.
         */
        disable(): void;

        /**
         * Enables wake lock.
         *
         * @remarks
         * This function call must be wrapped in a user input event handler:
         * e.g. a mouse or touch handler.
         */
        enable(): void;
    }

    export = NoSleep;
}
