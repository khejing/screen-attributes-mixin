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

function get16to9Dimensions(width, height){
    //分为全屏、横屏、竖屏3种情况
    if(isFullScreen()){
        return {
            width: width,
            height: height
        };
    }
    if(height > width){
        return {
            width: width,
            height: width * 9 / 16
        };
    }
    if(width > height){
        return {
            width: height * 16 / 9,
            height: height
        };
    }
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

export {getScreenAttributes, isFullScreen, get16to9Dimensions};
export default ScreenAttributes;
