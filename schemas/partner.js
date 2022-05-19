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
            type: "reference",
            to: [{ type: "partnerType" }],
        }
    ]
}