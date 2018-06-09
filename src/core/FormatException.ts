

/**
 * Custom Error class of type Exception.
 */
export default class FormatException extends Exception {

    /**
     * Allows Exception to be constructed directly
     * with some type and message.
     */
    public constructor(
        message: string = ''
    ) {
        super(message);
    }
}
