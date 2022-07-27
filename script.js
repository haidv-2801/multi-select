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
      (me.el_items = me.el.querySelector('.multi-select__items'));
  },

  initEvents: function () {
    let me = this;

    if (me.el_input) {
      me.el_input.addEventListener('keydown', me.handleChangeInput);
      me.el_input.addEventListener('focus', (e) =>
        me.handleFocusInput.bind(me)(e)
      );
      me.el_input.addEventListener('blur', (e) =>
        me.handleBlurInput.bind(me)(e)
      );
    }

    if (me.el_items) {
      me.el_items.addEventListener('change', me.handleSelectItem.bind(me));
    }

    window.onclick = (e) => me.handleClickOutSide(e, me);
  },

  handleClickOutSide: (e, me) => {
    if (me.el_items.contains(e.target) || me.el_input.contains(e.target))
      return;
    me.hideMenu();
  },

  handleFocusInput: function (e) {
    let me = this;

    me.el_items.classList.remove('hide');
  },

  handleBlurInput: function (e) {},

  hideMenu: function (e) {
    let me = this;

    me.el_items.classList.remove('hide');
    me.el_items.classList.add('hide');
  },

  showMenu: function (e) {
    let me = this;

    me.el_items.classList.remove('hide');
  },

  handleChangeInput: function (e) {
    const value = e.target.value;
    console.log(value);
  },

  handleSelectItem: function (e) {
    let me = this;

    me.el_input.value = me.getCheckedValues().join(';');
  },

  handleSearch: function (text) {},

  getCheckedNodes: function () {
    let me = this;

    return me.el_items.querySelectorAll('li input[type="checkbox"]:checked');
  },

  getCheckedValues: function () {
    let me = this,
      checkedNodes = Array.from(me.getCheckedNodes()).map((node) => node.value);

    return checkedNodes;
  },
};

multiSelect.init('.multi-select');
