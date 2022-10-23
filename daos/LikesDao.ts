import likesModel from "../mongoose/LikesModel";

export const findTuitsUserLiked =
    (uid: string) => likesModel
        .find({likedBy: uid})
        .populate('likedBy', 'username').exec();

export const findUsersThatLikedTuit =
    (tid: string) => likesModel
        .find({likedTuit: tid})
        .populate('likedTuit')
        .populate('likedBy', 'username')
        .exec();

export const findTuitLikesCount =
    (tid: string) => likesModel
        .find({likedTuit: tid}).count();

export const userLikesTuit =
    (uid: string, tid: string) => likesModel
        .create({likedTuit: tid, likedBy: uid});

export const userUnlikesTuit =
    (uid: string, tid: string) => likesModel
        .deleteOne({likedTuit: tid,
            likedBy: uid});
