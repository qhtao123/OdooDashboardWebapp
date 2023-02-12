let _odoo;
class odoo {
  constructor(o) {
    _odoo = o;
  }
  static getAjax = () => {
    return _odoo.ajax;
  };
  static getRpc = () => {
    return _odoo.rpc;
  };
  static getUserContext = () => {
    return _odoo.session.user_context;
  };
}
export default odoo;
