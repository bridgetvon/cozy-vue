import App from './App.vue'
import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'animate.css'




import Footer from './components/FooterComp.vue'
import Explore from './components/ExploreTab.vue'

const app = createApp(App);

app.component('FooterComp', Footer)
app.component('ExploreTab', Explore)
app.mount('#app')
