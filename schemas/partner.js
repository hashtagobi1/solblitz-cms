const partnerTypes = [
    { title: "All", value: "All" },
    { title: "Promoters", value: "Promoters" },
    { title: "Web 3 Recruitment", value: "Web 3 Recruitment" },
    { title: "Launchpads", value: "Launchpads" },
    { title: "Discord Tools", value: "Discord Tools" },
    { title: "Staking", value: "Staking" },
]

export default {
    title: "Partner",
    name: "partner",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string"
        },
        {
            title: "Twitter",
            name: "twitter",
            type: "url"
        },
        {
            title: "Profile",
            name: "profile",
            type: "image"
        },
        {
            title: "Types",
            name: "types",
            type: "string",
            options: {
                list: [
                    ...partnerTypes
                ]
            }
        }
    ]
}