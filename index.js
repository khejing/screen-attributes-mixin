import delay from 'lodash/function/delay.js';

function isFullScreen(){
    if(window.innerHeight === screen.height){
        return true;
    }else{
        return false;
    }
}

function getScreenAttributes(){
    let h = window.innerHeight;
    let w = window.innerWidth;
    if (w > 1024) {
        w = 1024;
        if (h > 768) {
            h = 768;
        }
    }

    /*let type;
    if(w >= 768){
        type = "lg";
    }else{
        type = "sml";
    }*/

    return {
        screenWidth: w,
        screenHeight: h,
        //screenType: type
    };
}

const ScreenAttributes = {
    componentDidMount(){
        window.addEventListener('resize', this.onScreenAttributesChange);
    },
    componentWillUnmount(){
        window.removeEventListener('resize', this.onScreenAttributesChange);
    },
    onScreenAttributesChange(){
        delay(function(){
            this.setState(getScreenAttributes());
        }.bind(this), 0);
    }
};

export {getScreenAttributes, isFullScreen};
export default ScreenAttributes;