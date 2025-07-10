declare namespace BP3D.Core {
    /** Enumeration of log contexts. */
    enum ELogContext {
        /** Log nothing. */
        None = 0,
        /** Log all. */
        All = 1,
        /** 2D interaction */
        Interaction2d = 2,
        /** Interior items */
        Item = 3,
        /** Wall (connectivity) */
        Wall = 4,
        /** Room(s) */
        Room = 5
    }
    /** Enumeration of log levels. */
    enum ELogLevel {
        /** An information. */
        Information = 0,
        /** A warning. */
        Warning = 1,
        /** An error. */
        Error = 2,
        /** A fatal error. */
        Fatal = 3,
        /** A debug message. */
        Debug = 4
    }
    /** The current log context. To be set when initializing the Application. */
    var logContext: ELogContext;
    /** Pre-check if logging for specified context and/or level is enabled.
     * This may be used to avoid compilation of complex logs.
     * @param context The log context to be verified.
     * @param level The log level to be verified.
     * @returns If this context/levels is currently logged.
     */
    function isLogging(context: ELogContext, level: ELogLevel): boolean;
    /** Log the passed message in the context and with given level.
     * @param context The context in which the message should be logged.
     * @param level The level of the message.
     * @param message The messages to be logged.
     */
    function log(context: ELogContext, level: ELogLevel, message: string): void;
}
