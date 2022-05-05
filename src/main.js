import App from './App.vue'
import { createApp } from 'vue'



import Explore from './components/ExploreTab.vue'

const app = createApp(App);


app.component('ExploreTab', Explore)
app.mount('#app')
