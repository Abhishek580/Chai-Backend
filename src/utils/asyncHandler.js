// const asyncHandler = (fn) => {() =>  {}}  --for understanding
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: "there is some error",
    });
  }
};

export { asyncHandler };
