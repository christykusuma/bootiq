const express=require("express"),mongoose=require("mongoose"),cookieSession=require("cookie-session"),passport=require("passport"),keys=require("./config/keys");require("./models/User"),require("./models/City"),require("./models/Marker"),require("./services/passport");const bodyParser=require("body-parser");mongoose.connect(keys.mongoURI);const app=express();app.use(bodyParser.urlencoded({extended:!1})),app.use(bodyParser.json()),app.use(cookieSession({maxAge:2592e6,keys:[keys.cookieKey]})),app.use(passport.initialize()),app.use(passport.session());const authRoutes=require("./routes/authRoutes");authRoutes(app),require("./routes/cityRoutes")(app),require("./routes/markerRoutes")(app),require("./routes/yelpRoutes")(app),require("./routes/facebookRoutes")(app),"production"===process.env.NODE_ENV&&app.use(express.static("client/build"));const PORT=process.env.PORT||5e3;app.listen(PORT);