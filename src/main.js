import App from './App.vue'
import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import Footer from './components/FooterComp.vue'
import Explore from './components/ExploreTab.vue'

const app = createApp(App);

app.component('app-footer', Footer)
app.component('ExploreTab', Explore)
app.mount('#app')
