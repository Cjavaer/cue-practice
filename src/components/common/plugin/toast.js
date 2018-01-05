import uiToast from '@/components/common/ui/uiToast';
let showToast ={};
showToast.install = (Vue , options) => {
    const ToastController = Vue.extend(uiToast);
    /**
   * @param {toastMsg} String  弹出框内容
   */
    Vue.prototype.$showToast = (opt = options) => {
        const instance = new ToastController().$mount();
        let duration = 2500,cb = function(){};
        instance.toastMsg = typeof opt == 'string' ? opt : opt.toastMsg;
        if( Object.prototype.toString.call(opt).slice(8,-1) == "Object" && Object.keys(opt).length > 1){
            for(var obj in opt){
                if( Object.prototype.toString.call(opt[obj]).slice(8,-1) == 'Number'){
                    duration = opt.duration;
                }else if( Object.prototype.toString.call(opt[obj]).slice(8,-1) == 'Function'){
                    cb = opt.cb;
                }
            }
        }
        document.body.addEventListener('DOMNodeInserted',function(e){
            if(e.target){
                instance.$refs.baseLayer.mount = false;
            }
        })
        if(instance.$refs.baseLayer.mount){
            document.body.appendChild(instance.$el);
        }
        instance.$refs.baseLayer.visiable = true;
        setTimeout(()=>{
            instance.close();
            cb && cb.call(opt.view);
        },duration);
    };
};
export default showToast
