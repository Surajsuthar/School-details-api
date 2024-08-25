const {z} = require("zod")

exports.schoolValidater = z.object({
    name:z.string(),
    address : z.string(),
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
})

exports.usersValidater = z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
})