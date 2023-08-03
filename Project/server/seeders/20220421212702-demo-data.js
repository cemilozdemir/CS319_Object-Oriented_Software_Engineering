"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert("Users", [
            {
                user_id: "21902474",
                name: "Servet Gulnaroglu",
                email: "servet.gulnaroglu@ug.bilkent.edu.tr",
                hashed_password:
                    "$2b$10$a/gPxfYvVYCrUgAXiJR1zuQ9FXniDf/gc2qBh4GUOcDs8rYQGI2Zu",
                cell_phone: "05051468882",
                createdAt: new Date(),
                updatedAt: new Date(),
                user_type: "STUDENT",
            },
            {
                user_id: "21902832",
                name: "Emre Can Serin",
                email: "can.serin@ug.bilkent.edu.tr",
                hashed_password:
                    "$2b$10$a/gPxfYvVYCrUgAXiJR1zuQ9FXniDf/gc2qBh4GUOcDs8rYQGI2Zu",
                cell_phone: "05076346700",
                createdAt: new Date(),
                updatedAt: new Date(),
                user_type: "STUDENT",
            },
            {
                user_id: "21901905",
                name: "Mansur Ecin",
                email: "mansur.ecin@ug.bilkent.edu.tr",
                hashed_password:
                    "$2b$10$a/gPxfYvVYCrUgAXiJR1zuQ9FXniDf/gc2qBh4GUOcDs8rYQGI2Zu",
                cell_phone: "05422201772",
                createdAt: new Date(),
                updatedAt: new Date(),
                user_type: "STUDENT",
            },
            {
                user_id: "21902857",
                name: "Efe Kerem Kesgin",
                email: "kerem.kesgin@ug.bilkent.edu.tr",
                hashed_password:
                    "$2b$10$a/gPxfYvVYCrUgAXiJR1zuQ9FXniDf/gc2qBh4GUOcDs8rYQGI2Zu",
                cell_phone: "05312335743",
                createdAt: new Date(),
                updatedAt: new Date(),
                user_type: "STUDENT",
            },
            {
                user_id: "6572",
                name: "Firat Bingol",
                email: "firatbi@bilkent.edu.tr",
                hashed_password:
                    "$2b$10$a/gPxfYvVYCrUgAXiJR1zuQ9FXniDf/gc2qBh4GUOcDs8rYQGI2Zu456",
                cell_phone: "05312335000",
                createdAt: new Date(),
                updatedAt: new Date(),
                user_type: "INSTRUCTOR",
            },
            {
                user_id: "3032",
                name: "FitBuddies Admin",
                email: "fitbuddies@bilkent.edu.tr",
                hashed_password:
                    "$2b$10$a/gPxfYvVYCrUgAXiJR1zuQ9FXniDf/gc2qBh4GUOcDs8rYQGI2Zu",
                cell_phone: "05312335000",
                createdAt: new Date(),
                updatedAt: new Date(),
                user_type: "ADMIN",
            },
            {
                user_id: "5960",
                name: "SportHead Admin",
                email: "sport_head@bilkent.edu.tr",
                hashed_password:
                    "$2b$10$a/gPxfYvVYCrUgAXiJR1zuQ9FXniDf/gc2qBh4GUOcDs8rYQGI2Zu",
                cell_phone: "05312335000",
                createdAt: new Date(),
                updatedAt: new Date(),
                user_type: "SPORT_HEAD",
            },
        ]);
        await queryInterface.bulkInsert("Students", [
            {
                user_id: "21902474",
                penalty_points: 10,
                weight: 87.3,
                height: 1.82,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_id: "21902832",
                penalty_points: 100,
                weight: 70.3,
                height: 1.83,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_id: "21901905",
                penalty_points: 50,
                weight: 110,
                height: 1.82,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_id: "21902857",
                penalty_points: 10,
                weight: 100,
                height: 1.8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("Instructors", [
            {
                user_id: "6572",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("Admins", [
            {
                user_id: "3032",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);

        await queryInterface.bulkInsert("SportHeads", [
            {
                user_id: "5960",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("WorkoutPrograms", [
            {
                workout_program_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                workout_program_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("Exercises", [
            {
                exercise_id: "PUSH_UP",
                name: "Push-up",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                exercise_id: "ABDOMINAL_CRUNCHES",
                name: "Abdominal crunches",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("Announcements", [
            {
                announcement_id: 1,
                title: "About Masks",
                content:
                    "BBC News first reported last February that more than a million high-grade masks in use in the NHS in England had been withdrawn over safety concerns. The FFP3 face coverings, worn by medics working in intensive care, were branded Fang Tian and marked as 'FT-045A'",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                announcement_id: 2,
                title: "About Gym",
                content: "There can only 40 people in the gym. ",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("SportCenters", [
            {
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                name: "Dormitories Sports Hall",
                opening_hour: "08.30",
                closing_hour: "23.00",
                campus: "Main",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_center_id: "MAIN_SPORTS_HALL",
                name: "Main Sports Hall",
                opening_hour: "08.30",
                closing_hour: "22.00",
                campus: "Main",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_center_id: "MAIN_OUTDOOR_SPORTS_FACILITES",
                name: "Main Campus Open Air Facilities",
                opening_hour: "08.30",
                closing_hour: "23.00",
                campus: "Main",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_center_id: "EAST_SPORTS_HALL",
                name: "East Sports Hall",
                opening_hour: "08.30",
                closing_hour: "23.00",
                campus: "East",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_center_id: "EAST_OUTDOOR_SPORTS_FACILITIES",
                name: "East Campus Open Air Facilities",
                opening_hour: "08.30",
                closing_hour: "23.00",
                campus: "East",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("SportActivities", [
            {
                sport_activity_id: "BASKETBALL",
                sport_center_id: "MAIN_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Basketball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                sport_activity_id: "BADMINTON",
                sport_center_id: "MAIN_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Badminton",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "VOLLEYBALL",
                sport_center_id: "MAIN_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Volleyball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "GYM",
                sport_center_id: "MAIN_SPORTS_HALL",
                capacity: 10,
                is_team_sport: true,
                name: "Fitness",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "GROUP_EXERCICES",
                sport_center_id: "MAIN_SPORTS_HALL",
                capacity: 20,
                is_team_sport: true,
                name: "Group Exercises",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "MULTI_PURPOSE_PROGRAM",
                sport_center_id: "MAIN_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Multi-Purpose Program Studio",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "TABLE_TENNIS",
                sport_center_id: "MAIN_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Table Tennis",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "BADMINTON",
                sport_center_id: "EAST_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Badminton",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "BASKETBALL",
                sport_center_id: "EAST_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Basketball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "VOLLEYBALL",
                sport_center_id: "EAST_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Volleyball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "GYM",
                sport_center_id: "EAST_SPORTS_HALL",
                capacity: 10,
                is_team_sport: true,
                name: "Fitness",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "TABLE_TENNIS",
                sport_center_id: "EAST_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Table Tennis",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "ARCH_POLY",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Archery Polygon (Indoor)",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                sport_activity_id: "BASKETBALL",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Basketball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "BASKETBALL",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Basketball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "VOLLEYBALL",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Volleyball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "GYM",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 40,
                is_team_sport: true,
                name: "Fitness",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "GROUP_EXERCICES",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 20,
                is_team_sport: true,
                name: "Group Exercises",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "MARTIAL_ARTS",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 5,
                is_team_sport: true,
                name: "Martial Arts",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "SQUASH",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 5,
                is_team_sport: true,
                name: "Squash",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "SWIMMING_POOL",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 6,
                is_team_sport: true,
                name: "Swimming Pool (semi-olympic)",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "TABLE_TENNIS",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Table Tennis",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "WALKING_RUNNING",
                sport_center_id: "DORMITORIES_SPORTS_HALL",
                capacity: 1,
                is_team_sport: true,
                name: "Walking/Running Track",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "OPEN_AIR_BASKETBALL",
                sport_center_id: "EAST_OUTDOOR_SPORTS_FACILITIES",
                capacity: 1,
                is_team_sport: true,
                name: "Open-Air Basketball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "OPEN_AIR_VOLLEYBALL",
                sport_center_id: "EAST_OUTDOOR_SPORTS_FACILITIES",
                capacity: 1,
                is_team_sport: true,
                name: "Open-Air Volleyball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "MINI_FOOTBALL",
                sport_center_id: "EAST_OUTDOOR_SPORTS_FACILITIES",
                capacity: 1,
                is_team_sport: true,
                name: "Mini Football",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "INDOOR_TENNIS",
                sport_center_id: "MAIN_OUTDOOR_SPORTS_FACILITES",
                capacity: 1,
                is_team_sport: true,
                name: "Indoor Tennis",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "MINI_FOOTBALL",
                sport_center_id: "MAIN_OUTDOOR_SPORTS_FACILITES",
                capacity: 1,
                is_team_sport: true,
                name: "Mini Football",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "OPEN_AIR_BASKETBALL",
                sport_center_id: "MAIN_OUTDOOR_SPORTS_FACILITES",
                capacity: 1,
                is_team_sport: true,
                name: "Open-Air Basketball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "OPEN_AIR_VOLLEYBALL",
                sport_center_id: "MAIN_OUTDOOR_SPORTS_FACILITES",
                capacity: 1,
                is_team_sport: true,
                name: "Open-Air Volleyball",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "OUTDOOR_TENNIS",
                sport_center_id: "MAIN_OUTDOOR_SPORTS_FACILITES",
                capacity: 1,
                is_team_sport: true,
                name: "Outdoor Tennis",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "OLYMPIC_GRASS_FOOTBALL",
                sport_center_id: "MAIN_OUTDOOR_SPORTS_FACILITES",
                capacity: 1,
                is_team_sport: true,
                name: "Regulation (olympic) size Grass Football",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "SKATE_PARK",
                sport_center_id: "MAIN_OUTDOOR_SPORTS_FACILITES",
                capacity: 1,
                is_team_sport: true,
                name: "Skate Park",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                sport_activity_id: "CLIMBING_WALL",
                sport_center_id: "MAIN_OUTDOOR_SPORTS_FACILITES",
                capacity: 1,
                is_team_sport: true,
                name: "Climbing Wall / Border",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        // await queryInterface.bulkInsert("Sessions", [
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 1,
        //         session_id: 1,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 2,
        //         session_id: 2,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 3,
        //         session_id: 3,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 4,
        //         session_id: 4,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 5,
        //         session_id: 5,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 6,
        //         session_id: 6,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 7,
        //         session_id: 7,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 8,
        //         session_id: 8,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 9,
        //         session_id: 9,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 1,
        //         session_id: 10,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 2,
        //         session_id: 11,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 3,
        //         session_id: 12,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 4,
        //         session_id: 13,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 5,
        //         session_id: 14,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 6,
        //         session_id: 15,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 7,
        //         session_id: 16,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 8,
        //         session_id: 17,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         activity_day: new Date(Date.now()),
        //         slot: 9,
        //         session_id: 18,
        //         duration: 75,
        //         disinfection_duration: 15,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        // ]);

        await queryInterface.bulkInsert("HasExercises", [
            {
                exercise_id: "PUSH_UP",
                workout_program_id: 1,
                set_count: 3,
                rep_count: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                exercise_id: "ABDOMINAL_CRUNCHES",
                workout_program_id: 1,
                set_count: 5,
                rep_count: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                exercise_id: "PUSH_UP",
                workout_program_id: 2,
                set_count: 5,
                rep_count: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                exercise_id: "ABDOMINAL_CRUNCHES",
                workout_program_id: 2,
                set_count: 10,
                rep_count: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("AssignWorkoutPrograms", [
            {
                instructor_user_id: "6572",
                student_user_id: "21902474",
                workout_program_id: 1,
                assigned_date: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                instructor_user_id: "6572",
                student_user_id: "21902857",
                workout_program_id: 2,
                assigned_date: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("AssignWorkHours", [
            {
                instructor_user_id: "6572",
                sport_head_user_id: "5960",
                session_id: 1,
                assigned_date: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                instructor_user_id: "6572",
                sport_head_user_id: "5960",
                session_id: 2,
                assigned_date: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("MakeAnnouncements", [
            {
                announcement_id: 1,
                sport_head_user_id: "5960",
                sport_center_id: "MAIN_SPORTS_HALL",
                announcement_start_date: new Date(
                    Date.now() + 10 * 24 * 60 * 60 * 1000
                ),
                announcement_end_date: new Date(
                    Date.now() + 12 * 24 * 60 * 60 * 1000
                ),

                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                announcement_id: 2,
                sport_head_user_id: "5960",
                sport_center_id: "EAST_SPORTS_HALL",
                createdAt: new Date(),
                announcement_start_date: new Date(
                    Date.now() + 2 * 24 * 60 * 60 * 1000
                ),
                announcement_end_date: new Date(Date.now()),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        await queryInterface.bulkInsert("Warns", [
            {
                student_user_id: "21902474",
                sport_head_user_id: "5960",
                createdAt: new Date(),
                reasoning: "5 gun gelmedin",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                student_user_id: "21901905",
                sport_head_user_id: "5960",
                createdAt: new Date(),
                reasoning: "Maske takmadin",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        // await queryInterface.bulkInsert("Reserves", [
        //     {
        //         student_user_id: "21902474",
        //         session_id: 1,
        //         date_reserved: new Date(),
        //         is_absend: null,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         student_user_id: "21902857",
        //         session_id: 2,
        //         date_reserved: new Date(),
        //         is_absend: null,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        // ]);
        // await queryInterface.bulkInsert("HasSessions", [
        //     {
        //         sport_activity_id: "BASKETBALL",
        //         sport_center_id: "EAST_SPORTS_HALL",
        //         session_id: 1,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         sport_activity_id: "BASKETBALL",
        //         sport_center_id: "DORMITORIES_SPORTS_HALL",
        //         session_id: 2,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        //     {
        //         sport_activity_id: "INDOOR_TENNIS",
        //         sport_center_id: "DORMITORIES_SPORTS_HALL",
        //         session_id: 3,
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //     },
        // ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("HasExercises", null, {});
        await queryInterface.bulkDelete("AssignWorkoutPrograms", null, {});
        await queryInterface.bulkDelete("AssignWorkHours", null, {});
        await queryInterface.bulkDelete("MakeAnnouncements", null, {});
        await queryInterface.bulkDelete("Warns", null, {});
        await queryInterface.bulkDelete("Reserves", null, {});
        await queryInterface.bulkDelete("HasSessions", null, {});
        // await queryInterface.bulkDelete("HasSportActivities", null, {});
        await queryInterface.bulkDelete("Students", null, {});
        await queryInterface.bulkDelete("Instructors", null, {});
        await queryInterface.bulkDelete("Admins", null, {});
        await queryInterface.bulkDelete("SportHeads", null, {});
        await queryInterface.bulkDelete("WorkoutPrograms", null, {});
        await queryInterface.bulkDelete("Exercises", null, {});
        await queryInterface.bulkDelete("Announcements", null, {});
        await queryInterface.bulkDelete("SportCenters", null, {});
        await queryInterface.bulkDelete("SportActivities", null, {});
        await queryInterface.bulkDelete("Sessions", null, {});
        await queryInterface.bulkDelete("Users", null, {});
    },
};
