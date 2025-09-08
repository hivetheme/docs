import { defineConfig } from "vitepress";

export default defineConfig({
  head: [
    ["link", { rel: "stylesheet", href: "/assets/css/custom.css" }],
    ["script", { src: "/assets/js/custom.js" }],
  ],
  title: "HiveTheme",
  base: "/",
  themeConfig: {
    nav: [
      {
        text: "Documentation",
        items: [
          { text: "Edulab LMS", link: "/edulab/overview" },
          { text: "Transova", link: "/transova/overview" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hivetheme" }],
    sidebar: {
      "/edulab/": [
        {
          text: "Overview",
          link: "/edulab/overview",
        },

        {
          text: "Release",
          collapsed: false,
          items: [{ text: "Release Notes", link: "/edulab/releases" }],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [
            { text: "Installation", link: "/edulab/installation" },
            { text: "Update", link: "/edulab/update" },
          ],
        },

        {
          text: "Module Management",
          collapsed: false,
          items: [
            { text: "Install Module & Update", link: "/edulab/module/installation" },
            { text: "Enable Module", link: "/edulab/module/enable" },
            { text: "Disable Module", link: "/edulab/module/disable" },
            { text: "Uninstall Module", link: "/edulab/module/uninstall" },
          ],
        },

        {
          text: "Usage",
          collapsed: false,
          items: [
            {
              text: "Admin Dashboard",
              collapsed: true,
              items: [
                { text: "Language", link: "/edulab/admin/language" },
                {
                  text: "Localization",
                  collapsed: true,
                  items: [
                    { text: "Country", link: "/edulab/admin/country" },
                    { text: "State", link: "/edulab/admin/state" },
                    { text: "City", link: "/edulab/admin/city" },
                    { text: "Time Zone", link: "/edulab/admin/time-zone" },
                  ],
                },
                {
                  text: "Icon & Provider ",
                  link: "/edulab/admin/icon-provider",
                },
                { text: "Category", link: "/edulab/admin/category" },
                {
                  text: "Meeting Provider",
                  link: "/edulab/admin/meeting-provider",
                },
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Subject", link: "/edulab/admin/subject" },
                    { text: "Level", link: "/edulab/admin/level" },
                    {
                      text: "Create Course",
                      link: "/edulab/admin/create-course",
                    },
                    {
                      text: "Create Curriculum",
                      link: "/edulab/admin/curriculum-course",
                    },
                    { text: "Topic", link: "/edulab/admin/topic" },
                    { text: "Create Quiz", link: "/edulab/admin/quiz-create" },
                    {
                      text: "Create Course Bundle",
                      link: "/edulab/admin/create-course-bundle",
                    },
                  ],
                },

                {
                  text: "Student Manage",
                  link: "/edulab/admin/student-manage",
                },
                {
                  text: "Organization Manage",
                  link: "/edulab/admin/organization-manage",
                },
                {
                  text: "Instructor Manage",
                  link: "/edulab/admin/instructor-manage",
                },
                {
                  text: "Business Marketing",
                  collapsed: false,
                  items: [
                    {
                      text: "Coupon Manage",
                      link: "/edulab/admin/coupon-manage",
                    },
                  ],
                },
                {
                  text: "Testimonial Manage",
                  link: "/edulab/admin/testimonial-manage",
                },
                {
                  text: "Blog Manage",
                  collapsed: false,
                  items: [
                    {
                      text: "Blog Category",
                      link: "/edulab/admin/blog-category",
                    },
                    { text: "Blog", link: "/edulab/admin/blog-manage" },
                  ],
                },

                { text: "Notices board", link: "/edulab/admin/notice-board" },
                {
                  text: "Backend Settings",
                  link: "/edulab/admin/backend-settings",
                },

                {
                  text: "Theme Settings",
                  collapsed: false,
                  items: [
                    {
                      text: "Theme Activation",
                      link: "/edulab/admin/theme/theme-settings",
                    },
                    { text: "Setting", link: "/edulab/admin/theme/setting" },
                  ],
                },

                {
                  text: "Staff Manage",
                  collapsed: false,
                  items: [
                    {
                      text: "Permissions",
                      link: "/edulab/admin/staff-permissions",
                    },
                    { text: "Roles", link: "/edulab/admin/staff-role" },
                    { text: "Users", link: "/edulab/admin/staff-users" },
                  ],
                },
                {
                  text: "Payment Method",
                  link: "/edulab/admin/payment-method",
                },
                {
                  text: "Certificate Manage",
                  link: "/edulab/admin/certificate-manage",
                },
                { text: "Faq Manage", link: "/edulab/admin/faq-manage" },
              ],
            },

            {
              text: "Instructor Dashboard",
              collapsed: true,
              items: [
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Course", link: "/edulab/instructor/course" },
                    {
                      text: "Create Curriculum",
                      link: "/edulab/instructor/create-curriculum",
                    },
                    {
                      text: "Topic",
                      link: "/edulab/instructor/topic",
                    },
                    {
                      text: "Create Quiz",
                      link: "/edulab/instructor/quiz-create",
                    },
                    {
                      text: "Create Course Bundle",
                      link: "/edulab/instructor/bundle-course",
                    },
                  ],
                },
                {
                  text: "Student Manage",
                  link: "/edulab/instructor/student-manage",
                },
                {
                  text: "Quizes",
                  link: "/edulab/instructor/quizes",
                },
                {
                  text: "Assignments",
                  link: "/edulab/instructor/assignment",
                },
                {
                  text: "Noties Board",
                  link: "/edulab/instructor/notiesboard",
                },
                {
                  text: "Notifications",
                  link: "/edulab/instructor/notifications",
                },
                {
                  text: "Support Ticket",
                  collapsed: true,
                  items: [
                    {
                      text: "Support Ticket",
                      link: "/edulab/instructor/support-ticket",
                    },

                    {
                      text: "Student Support",
                      link: "/edulab/instructor/student-support",
                    },
                  ],
                },
              ],
            },

            {
              text: "Organization Dashboard",
              collapsed: true,
              items: [
                {
                  text: "Instructor Manage",
                  link: "/edulab/organization/instructor-manage.md",
                },
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Course", link: "/edulab/organization/course" },
                    {
                      text: "Create Curriculum",
                      link: "/edulab/organization/create-curriculum",
                    },
                    {
                      text: "Topic",
                      link: "/edulab/organization/topic",
                    },
                    {
                      text: "Create Quiz",
                      link: "/edulab/organization/create-quiz",
                    },
                    {
                      text: "Create Course Bundle",
                      link: "/edulab/organization/bundle-course",
                    },
                  ],
                },
                {
                  text: "Student Manage",
                  link: "/edulab/organization/student-manage",
                },

                {
                  text: "Noties Board",
                  link: "/edulab/organization/notiesboard",
                },
                {
                  text: "Notifications",
                  link: "/edulab/organization/notifications",
                },
                {
                  text: "Support Ticket",
                  collapsed: true,
                  items: [
                    {
                      text: "Support Ticket",
                      link: "/edulab/organization/support-ticket",
                    },
                  ],
                },
              ],
            },

            {
              text: "Student Dashboard",
              collapsed: true,
              items: [
                {
                  text: "Course Manage",
                  link: "/edulab/student/course-manage",
                },

                {
                  text: "Notifications",
                  link: "/edulab/student/notifications",
                },
                {
                  text: "Quizzes",
                  link: "/edulab/student/quizzes",
                },
                {
                  text: "Support Ticket",
                  collapsed: true,
                  items: [
                    {
                      text: "Support Ticket",
                      link: "/edulab/student/support-ticket",
                    },

                    {
                      text: "Course Support",
                      link: "/edulab/student/course-support",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          text: "Modules",
          collapsed: false,
          items: [
            {
              text: "Subscription",
              collapsed: false,
              items: [
                { text: "Install Subscription", link: "/edulab/module/subscription/install" },
                { text: "Add New Subscription", link: "/edulab/module/subscription/add-subscription" },
                { text: "Subscription Frontend", link: "/edulab/module/subscription/frontend" },
              ],
            },
          ],
        },

        {
          text: "Advanced",
          collapsed: false,
          items: [
            { text: "Composer", link: "/edulab/advanced/composer" },
            { text: "Cron Jobs", link: "/edulab/advanced/cron-jobs" },
          ],
        },
      ],
      "/transova/": [
        {
          text: "Overview",
          link: "/transova/overview",
        },

        {
          text: "Release",
          collapsed: false,
          items: [{ text: "Release Notes", link: "/transova/releases" }],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [{ text: "Installation", link: "/transova/installation" }],
        },
        {
          text: "Theme",
          collapsed: false,
          items: [
            {
              text: "Theme Install & Update",
              collapsed: true,
              items: [
                { text: "Install Theme By WordPress", link: "/transova/theme/wp-theme-installation" },
                { text: "Install Theme Via Manual", link: "/transova/theme/manual-theme-installation" },
                { text: "Install Theme Via FTP", link: "/transova/theme/ftp-theme-installation" },
                { text: "Theme Update", link: "/transova/theme/update-theme" },
              ],
            },
            {
              text: "Theme Activation",
              collapsed: true,
              items: [{ text: "Theme Activation", link: "/transova/theme/theme-activation" }],
            },
          ],
        },
        {
          text: "Plugin",
          collapsed: true,
          items: [
            { text: "Install Required Plugin", link: "/transova/plugin/required-plugin-installation" },
            { text: "Add New Plugin", link: "/transova/plugin/add-new-plugin" },
            { text: "Update Plugin", link: "/transova/plugin/update-plugin" },
          ],
        },

        {
          text: "Import Demo Content",
          link: "/transova/import-demo-content",
        },

        {
          text: "Theme Options",
          link: "/transova/theme-option",
        },

        {
          text: "Page Settings",
          link: "/transova/page-settings",
        },

        {
          text: "Menu Settings",
          link: "/transova/menu-settings",
        },

        {
          text: "Elementor",
          link: "/transova/elementor",
        },

        {
          text: "Source & Credits",
          link: "/transova/source-credits",
        },

        {
          text: "Support",
          link: "/transova/support",
        },
      ],
    },
  },
});
