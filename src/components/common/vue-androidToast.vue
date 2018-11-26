<script>
  export default{
    install(Vue){
      var toast={};
      toast.show=function(mes){
        var div=document.createElement('div');
        div.className="toastWrap";
        div.innerText=mes;
      /*  var temp=`<div class="toastWrap">${mes}</div>`;

        div.innerHTML=temp;*/
        document.body.appendChild(div);
//       var cNode=document.getElementsByClassName("toastWrap")[0];
        div.addEventListener("webkitAnimationEnd",function(e){
          if(e.animationName=="topDown"){
           this.parentNode.removeChild(this);
          }
        })
      }
      Vue.prototype.$androidToast=toast;
    }



  }
</script>
<style>
  .toastWrap{
    color: white;
    z-index:999;
    padding:5px 10px;
    border-radius: 5px;
    text-align: center;
    min-width: 100px;
    position: fixed;
    left: 50%;
    background: rgba(0,0,0,0.6);
    transform:translate(-50%,100%)  ;
    /*transition: all 2s ;*/
    animation: downTop 1s forwards,topDown 1s 2s forwards ;
    opacity: 0;
    bottom: 100px;
  }
  @keyframes downTop{
    from{

    }
    to{
      bottom: 50%;
      transform:translate(-50%,0)  ;
      opacity: 1;
    }

  }
  @keyframes topDown{
    from{

    }
    to{
      transform:translate(-50%,100%)  ;
      opacity: 0;
    }

  }


</style>
