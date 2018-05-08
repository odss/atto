import TEMPLATE from './login.html';


export default class UI {
    constructor(mediator){
        this.mediator = mediator
    }
    show() {
        document.body.classList.add('login');
        const $div = document.createElement('div');
        $div.innerHTML = TEMPLATE.trim();
        this.$dom = $div.firstChild;
        document.body.appendChild(this.$dom);

        this.$form = this.$dom.querySelector('#login-form');
        this.formHandler = e => this._submit(e);
        this.$form.addEventListener('click', this.formHandler, false);
    }
    dispose() {
        this.$form.removeEventListener('click', this.formHandler);
        this.formHandler = null;
        document.body.removeChild(this.$dom);
        document.body.classList.remove('login');
        this._template = '';
        this.$dom = null;
        this.$form = null;
    }
    wait(state) {
        if (this.$dom) {
            if (state) {
                this.$dom.classList.add('waiting');
            } else {
                this.$dom.classList.remove('waiting');
            }
        }
    }
    error(msg) {
        if(msg){
            this.$dom.classList.add('errors');
        }else{
            this.$dom.classList.remove('errors');
        }
        document.querySelector('#login-box-password-input').value = '';
        this.$dom.querySelector('.error').innerHTML = msg;
    }
    _submit(e) {
        e.preventDefault();
        var login = document.querySelector('#login-box-email-input').value;
        var password = document.querySelector('#login-box-password-input').value;
        this.mediator.login(login, password);
    }
}
