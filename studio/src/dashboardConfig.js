export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62208cd402673aadd8b0953c",
                  title: "Sanity Studio",
                  name: "blog-studio-1pkw3xjc",
                  apiId: "4691cd15-a314-4cf4-9038-1578da74c6a2",
                },
                {
                  buildHookId: "62208cd44a50f7919cc2349f",
                  title: "Blog Website",
                  name: "blog-web-qm8mwh88",
                  apiId: "dc98e58e-ce53-47d3-8c28-2d6bf57afc36",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cphthomas/blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://blog-web-qm8mwh88.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
