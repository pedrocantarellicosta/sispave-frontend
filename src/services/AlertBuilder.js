export class AlertBuilder {
    constructor() {
    }

    setType(type = 'success') {
        this.type = type;
        return this;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    setText(text) {
        this.text = text;
        return this;
    }

    setTimer(timer) {
        this.timer = timer;
        return this;
    }

    setPosition(position = 'center') {
        this.position = position;
        return this;
    }

    showConfirmButton(display = true, text = 'Ok', color) {
        this.showConfirmButton = display;
        if(display && text) this.confirmButtonText = text;
        if(color) this.confirmButtonColor = color;
        
        return this;
    }

    showCancelButton(display = false, text = 'Cancel', color) {
        this.showCancelButton = display;
        if(display && text) this.cancelButtonText = text;
        if(color) this.cancelButtonColor = color;

        return this;
    }

    showAsToast() {
        this.toast = true;
        return this;
    }

    buildDefault(option, type = 'success') {
        switch(option) {
            case 'toast':
                return this
                    .setType(type)
                    .setTimer(1500)
                    .setText('Done')
                    .showAsToast()
                    .showConfirmButton(false)
                    .setPosition("top-end")
        }
    }

}