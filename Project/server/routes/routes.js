const ManageAnnouncementController = require("../controllers/ManageAnnouncementController");
const ManageAttendanceController = require("../controllers/ManageAttendanceController");
const ManageInstructorController = require("../controllers/ManageInstructorController");
const ManageProfileController = require("../controllers/ManageProfileController");
const ManageReservationController = require("../controllers/ManageReservationController");
const ManageReservationScheduleController = require("../controllers/ManageReservationScheduleController");
const UserSignupController = require("../controllers/UserSignupController");

const jwt = require("jsonwebtoken");

const routes = (router) => {
    router.post("/register", new UserSignupController().Register);
    router.post("/login", new UserSignupController().Login);
    router.post(
        "/getSportActivities",
        new ManageReservationController().SendSportActivities
    );
    router.post(
        "/getSportActivityTimes",
        new ManageReservationController().GetSportActivityTimes
    );
    router.post("/reserve", new ManageReservationController().Reserve);
    router.post(
        "/myReservations",
        new ManageReservationController().SendMyReservations
    );
    router.post(
        "/cancelReservation",
        new ManageReservationController().CancelReservation
    );

    router.post(
        "/createAnnouncement",
        new ManageAnnouncementController().createAnnouncement
    )

    router.get(
        "/bringAnnouncement",
        new ManageAnnouncementController().bringAnnouncement

    )
    // router.get("/user", verifyToken, Ucontroller.getUserWithId);
    // router.post("/updateUser", verifyToken, Ucontroller.updateUser);
    // router.post("/addRecipe", verifyToken, Rcontroller.createRecipe);
    // router.get("/getRecipes", verifyToken, Rcontroller.getAllRecipes);
    // router.get("/getRecipe", verifyToken, Rcontroller.getRecipe);
    // router.get("/getUserRecipes", verifyToken, Rcontroller.getRecipesForUser);
    // router.get("/addToMyRecipes", verifyToken, Ucontroller.addToMyRecipes);
    // router.get(
    //     "/deleteRecipeForUser",
    //     verifyToken,
    //     Rcontroller.deleteRecipeForMe
    // );
    // router.get(
    //     "/deleteRecipeForAll",
    //     verifyToken,
    //     Rcontroller.deleteRecipeForEveryone
    // );
    // router.post("/updateRecipe", verifyToken, Rcontroller.updateRecipe);
    // router.post("/getUserWithName", verifyToken, Ucontroller.getUserWithName);
    // router.get("/followUser", verifyToken, Ucontroller.followUser);
    // router.get("/getFollowers", verifyToken, Ucontroller.getAllFollowers);
    // router.get("/getAllFollowings", verifyToken, Ucontroller.getAllFollowings);
    // router.get("/unfollowUser", verifyToken, Ucontroller.unfollowUser);
    // router.post("/rateRecipe", verifyToken, Rcontroller.rateRecipe);
    // router.get(
    //     "/getRatesOfTheRecipe",
    //     verifyToken,
    //     Rcontroller.getRatesOfRecipe
    // );
    // router.get("/getAllCategories", verifyToken, Ccontroller.getAllCategories);
    // router.get("/getCategory", verifyToken, Ccontroller.getParticularCategory);
    // router.get("/getHashtags", verifyToken, Rcontroller.getHashtagsOfRecipe);
    // router.post("/getTagRecipes", verifyToken, Rcontroller.getRecipesWithTag);
    // router.post(
    //     "/postImage",
    //     verifyToken,
    //     upload.single("image"),
    //     Rcontroller.postImage
    // );
    // router.get("/recipeImages/:id", Rcontroller.getImage);
    // router.get("/userImages/:id", Rcontroller.getUserImage);
};

module.exports = routes;
