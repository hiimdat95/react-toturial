export default {
    Mutation: {
        createMessage: async (paren, args, { models, user }) => {
            try {
                await models.Channel.create({ ...args, userId: user.id });
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
    }
};