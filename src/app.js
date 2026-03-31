 const express = require("express")
 const cookieParser = require("cookie-parser")
 

 const app = express()


 app.use(express.json())
 app.use(cookieParser())

/**
 * - Routes Required
 * - auth routes
 * - account routes
 * - transaction routes
 */
 const authRouter = require("./routes/auth.routes")
 const accountRouter = require("./routes/account.routes")  
 const transactionRoutes = require("./routes/transaction.routes")

/**
 * - Use Routes
 * - /api/auth for auth routes
 * - /api/account for account routes
 * - /api/transaction for transaction routes
 * 
 * Note: All routes should be prefixed with /api to follow RESTful API design principles and to allow for future expansion of the API without breaking existing routes.
 * For example, if we want to add a new route for reporting or analytics in the future, we can easily do so under the /api prefix without affecting the existing auth, account, or transaction routes.  
 */
 app.use("/api/auth", authRouter)
 app.use("/api/accounts", accountRouter)
 app.use("/api/transactions", transactionRoutes)


 module.exports = app