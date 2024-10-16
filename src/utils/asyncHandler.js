/**
 * Asynchronous request handler wrapper
 * 
 * This function wraps an asynchronous request handler and provides error handling.
 * It uses promises to handle asynchronous operations and passes any errors to the next middleware.
 * 
 * @param {Function} requestHandler - The asynchronous request handler function to be wrapped
 * @returns {Function} A middleware function that can be used in Express routes
 */
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};

export { asyncHandler };

// Commented out legacy implementation using try/catch
/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
};
*/