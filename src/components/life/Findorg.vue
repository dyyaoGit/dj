<!--找组织-->
<template>
  <div id="page-lddyzzz" class="page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link to="/life" class="button iconfont icon-fa-left	 button-clear button-calm"
                   style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">流动党员找组织</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>

    <div class="scroll-content  has-header">
      <template>
        <baidu-map @ready="handler" class="map">
        </baidu-map>
      </template>

    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  import BaiduMap from 'vue-baidu-map'
  Vue.use(BaiduMap, {
    ak: 'aCXUfddC2L3ui3nrfw9plyV999HMUxHs'
  })
  export default{
    computed: {
      bg(){
        return require('../../assets/redflag.png')
      }
    },

    methods: {
      handler ({BMap, map}) {
        map.centerAndZoom(new BMap.Point(114.011062, 33.014674), 5);
        map.enableScrollWheelZoom();
        var index = 0;
        var myGeo = new BMap.Geocoder();
        var adds = [

          {
            address: "河南省驻马店市黄淮学院信息工程学院党总支",
            lable: "信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032",
            size: {
              x: 20,
              y: -10
            }

          },
          {
            address: "北京市昌平区科&#10;技经营管理学院沙河新校区",
            lable: "信息工程学院学生流动党支部\n支部书记：高洋 电话：13526395586",
            size: {
              x: 20,
              y: -10
            }

          },
          {
            address: "河南省驻马店市黄淮学院信息工程学院学生党支部",
            lable: "信息工程学院学生党支部\n支部书记：杨鑫 电话：0396-2853187",
            size: {
              x: 20,
              y: -31
            }
          },
        ];

        function bdGEO() {
          var add = adds[index];
          geocodeSearch(add, index);
          index++;
        }

        function geocodeSearch(add, index) {
          myGeo.getPoint(add.address, function (point) {
            if (point) {
              var address = new BMap.Point(point.lng, point.lat);
              Math.random()
              addMarker(address, new BMap.Label(add.lable, {offset: new BMap.Size(add.size.x, add.size.y)}));
            }
          }, "驻马店市");
        }

        // 编写自定义函数,创建标注
        function addMarker(point, label) {
          var marker = new BMap.Marker(point);
          map.addOverlay(marker);
          marker.setLabel(label);
          marker.disableMassClear();
          marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        }

        adds.forEach(function (indnmexs, item) {
          bdGEO();
        })

        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl({
          // 靠左上角位置
          anchor: BMAP_ANCHOR_TOP_LEFT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: true
        });
        map.addControl(navigationControl);
        // 添加定位控件
        var geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function (e) {
          // 定位成功事件
          var address = '';
          address += e.addressComponent.province;
          address += e.addressComponent.city;
          address += e.addressComponent.district;
          address += e.addressComponent.street;
          address += e.addressComponent.streetNumber;
//            alert("当前定位地址为：" + address);
        });
        geolocationControl.addEventListener("locationError", function (e) {
          // 定位失败事件
          alert(e.message);
        });
        map.addControl(geolocationControl);

      }
    }
  }
</script>
<style>
  .map {
    width: 100%;
    height: 100%;
  }
</style>
