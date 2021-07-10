import '../css/app.css'
import Alpine from 'alpinejs'
import search from './search.js'

window.Alpine = Alpine // Optional

Alpine.data('search', search)

Alpine.start()
