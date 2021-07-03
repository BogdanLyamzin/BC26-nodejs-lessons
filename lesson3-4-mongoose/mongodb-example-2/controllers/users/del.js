const { users: service } = require("../../services");

const del = async (req, res, next) => {
    const {id} = req.params;
    try {
        await service.del(id);
        res.status(204).json({
            status: "success",
            code: 204
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = del;
