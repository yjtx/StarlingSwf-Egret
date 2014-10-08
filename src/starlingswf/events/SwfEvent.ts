/** Created with JetBrains WebStorm.
 * User: yjtx
 * Date: 14-9-4
 * Time: 下午7:58
 * Class: SwfEvents
 * Summary:
 */
module starlingswf {
    export class SwfEvent extends egret.Event{

        private _frames:Array<string>;
        public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false, frames:Array<string> = []) {
            super(type, bubbles, cancelable);

            this._frames = frames;
        }

        /**
         * 在将显示对象直接添加到舞台显示列表或将包含显示对象的子树添加至舞台显示列表中时调度。
         * 以下方法会触发此事件：DisplayObjectContainer.addChild()、DisplayObjectContainer.addChildAt()。
         * @constant {string} egret.Event.ADDED_TO_STAGE
         */
        public static SWF_FRAME:string = "swfFrame";

        public get frames():Array<string> {
            return this._frames;
        }
    }
}