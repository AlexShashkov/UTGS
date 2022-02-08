class BasicController {
  constructor(model) {
    this.model = model;
  }

  async get(req, res, next){
      let { count, rows } = await this.model.findAndCountAll(req.params);
      return res.status(200).json({
          count:count
          message:rows
      });
  };

  async getOne(req, res, next){
      let got = await this.model.findOne({req.params});
      return res.status(200).json({
          message: got
      });
  };

  async update(req, res, next){
      let id = req.params.id;
      let got = await this.model.findOne({
          id: ctx.session.user_id,
      });
      delete req.params.id;
      got.set(req);
      await got.save();

      return res.status(200).json({
          message: got
      });
  };

  async delete(req, res, next){
      let id = req.params.id;
      let got = await this.model.findOne({
          id:id
      });
      await got.destroy();
      return res.status(200);
  };

  async add(req, res, next){
      let got = await this.model.create(req.params);
      return res.status(200).json({
          message: got
      });
  };
}
module.exports = BasicController;
