import FA from './fa4/css/font-awesome.css';
import MAIN from './sass/main.scss';


export class Activator{
    start(context){
        this.styles = context.styles(FA, MAIN);
    }
    stop(context){
        this.styles.dispose();
    }
}