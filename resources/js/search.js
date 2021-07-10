export default (props) => ({
  search: '',

  items: props.items.length !== 0 ? [...props.items] : ['foo', 'bar', 'baz'],

  get filteredItems() {
    return this.items.filter((i) => i.startsWith(this.search))
  },
})
