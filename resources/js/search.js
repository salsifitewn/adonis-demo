export default (props) => ({
  search: '',

  items: props.items.length !== 0 ? [...props.items] : ['foo', 'bar', 'baz'],

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  get filteredItems() {
    return this.items.filter((i) => i.startsWith(this.search))
  },
})
