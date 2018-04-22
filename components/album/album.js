// components/album/album.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pictures: Array,
    urlKey:{
      type:String,
      value:"url"
    },
    basePath:{
      type:String,
      value:""
    },
    desKey:{
      type:String,
      value:"text"
    },
    sid:{
      type:null,
      value:"id"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tap:function(e){
      var detail={sid:e.currentTarget.dataset.sid};
      this.triggerEvent('pictureTap', detail,{});
    }
  },
  attached: function () { console.log(111,this.properties)}
})
