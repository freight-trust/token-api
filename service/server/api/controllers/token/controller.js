import TokenService from '../../services/token.service';

export class Controller {
  all(req, res) {
    TokenService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    TokenService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    TokenService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/contract/api/v1/token/${r.id}`)
        .json(r));
  }
}
export default new Controller();
