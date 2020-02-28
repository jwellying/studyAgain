import imgSrc from './img.jpeg';

var App = {
    template:`
        <div>
            <img src='imgSrc'/>
        </div>
    `,
    data(){
        return{
            imgSrc:imgSrc
        }
    }
}
export default App;