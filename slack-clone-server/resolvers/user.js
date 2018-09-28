export default {
    Query: {
        getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
        allUsers: (parent, args, { models }) => models.User.findAll(),
    },
    Mutation: {
        createUser: (parent, args, { models }) => {
            const user = models.User.create(args);
            return user;
        },
    }
};
