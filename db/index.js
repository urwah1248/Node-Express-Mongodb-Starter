const mongoose = require("mongoose")
const config = require("../utils/config")
const logger = require("../utils/logger")

exports.connect = (app) => {
    const connectWithRetry = () => {
      mongoose
        .connect(config.MONGODB_URI)
        .then(() => {
            logger.info("MongoDB is connected");
            app.emit("ready");
        })
        .catch((err) => {
            logger.error("MongoDB connection unsuccessful, retry after 2 seconds.", err);
            setTimeout(connectWithRetry, 2000);
        });
    };

    connectWithRetry();
};