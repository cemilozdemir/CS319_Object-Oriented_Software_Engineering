"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            user_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            hashed_password: {
                type: Sequelize.STRING,
            },
            cell_phone: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Students", {
            user_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                references: {
                    model: "Users",
                    key: "user_id",
                },
            },
            penalty_points: {
                type: Sequelize.INTEGER,
            },
            weight: {
                type: Sequelize.FLOAT,
            },
            height: {
                type: Sequelize.FLOAT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Instructors", {
            user_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                references: {
                    model: "Users",
                    key: "user_id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Admins", {
            user_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("SportHeads", {
            user_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                references: {
                    model: "Users",
                    key: "user_id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Workout_programs", {
            workout_program_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Exercises", {
            exercise_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Announcements", {
            announcement_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING,
            },
            content: {
                type: Sequelize.STRING(1024),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Sport_centers", {
            sport_center_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(64),
            },
            name: {
                type: Sequelize.STRING(64),
            },
            campus: {
                allowNull: false,
                type: Sequelize.STRING(32),
            },
            opening_hour: {
                type: Sequelize.STRING(5),
            },
            closing_hour: {
                type: Sequelize.STRING(5),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Sport_activitys", {
            sport_activity_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            capacity: {
                type: Sequelize.INTEGER,
            },
            is_team_sport: {
                type: Sequelize.BOOLEAN,
            },
            name: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Sessions", {
            session_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            activity_day: {
                allowNull: false,
                type: Sequelize.DATEONLY,
            },
            slot: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            duration: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            disinfection_duration: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Has_exercises", {
            exercise_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Exercises",
                    key: "exercise_id",
                },
            },
            workout_program_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Workout_programs",
                    key: "workout_program_id",
                },
            },
            set_count: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            rep_count: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Assign_workout_programs", {
            instructor_user_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Instructors",
                    key: "user_id",
                },
            },
            student_user_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Students",
                    key: "user_id",
                },
            },
            workout_program_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Workout_programs",
                    key: "workout_program_id",
                },
            },
            assigned_date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Assign_work_hours", {
            instructor_user_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Instructors",
                    key: "user_id",
                },
            },
            sport_head_user_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Sport_heads",
                    key: "user_id",
                },
            },
            session_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Sessions",
                    key: "session_id",
                },
            },
            assigned_date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Make_announcements", {
            announcement_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Announcements",
                    key: "announcement_id",
                },
            },
            sport_head_user_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Sport_heads",
                    key: "user_id",
                },
            },
            sport_center_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Sport_centers",
                    key: "sport_center_id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            announcement_start_date: {
                allowNull: false,
                type: Sequelize.DATEONLY,
            },
            announcement_end_date: {
                allowNull: false,
                type: Sequelize.DATEONLY,
            },
        });
        await queryInterface.createTable("Warns", {
            student_user_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Students",
                    key: "user_id",
                },
            },
            sport_head_user_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Sport_heads",
                    key: "user_id",
                },
            },
            reasoning: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Reserves", {
            student_user_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Students",
                    key: "user_id",
                },
            },
            session_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Sessions",
                    key: "session_id",
                },
            },
            is_absend: {
                type: Sequelize.BOOLEAN,
            },
            date_reserved: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Has_sessions", {
            sport_center_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Sport_centers",
                    key: "sport_center_id",
                },
            },
            session_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Sessions",
                    key: "session_id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
        await queryInterface.createTable("Has_sport_activitys", {
            session_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Sessions",
                    key: "session_id",
                },
            },
            sport_activity_id: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: "Sport_activitys",
                    key: "sport_activity_id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropAllTables();
    },
};
