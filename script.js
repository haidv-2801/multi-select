var multiSelect = {
  init: function (el) {
    let me = this;

    me.initVars(el);
    me.initEvents();
  },

  initVars: function (el) {
    let me = this;

    (me.el = document.querySelector(el)),
      (me.el_input = me.el.querySelector("input[type='text']")),
      (me.el_items = me.el.querySelectorAll('.multi-select__items'));
  },

  initEvents: function () {
    let me = this;

    if (me.el_input) {
      me.el_input.addEventListener('keydown', me.handleChangeInput);
    }

    if (me.el_items) {
      me.el_items.forEach((item) => {
        item.addEventListener('change', me.handleSelectItem.bind(me));
      });
    }
  },

  handleChangeInput: function (e) {
    const value = e.target.value;
    console.log(value);
  },

  handleSelectItem: function (e) {
    let me = this,
      value = e.target.value;

    console.log(
      me.getCheckedNodes
        .bind(Array)()
        .map((node) => node)
    );
  },

  handleSearch: function (text) {},

  getCheckedNodes: function () {
    let me = this;

    return me.el_items[0].querySelectorAll('li input[type="checkbox"]:checked');
  },
};

multiSelect.init('.multi-select');
