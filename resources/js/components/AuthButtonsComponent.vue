<template>
<div>
    <forms />
    <template v-if="user.id">
        <div class="chatIcon"> 
            <span class="reddot" v-if="chatNotifications.length > 0"></span>
            <i v-if="message.message == ''"  class="toggleChat far fa-comment-alt" ></i>
            <i v-else @click="sendMessage" class="far fa-paper-plane"></i>
        </div>
        <div class="chatBox row">
            <div class="followingChats col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <li :class="{'firstChat': (chatNotifications.findIndex(e => e.message.sourceID == user.id) +1) && user.id != currentChat.id, 'currentChat':user.id == currentChat.id }" v-for="user in user.following" :key="user.id" @click="getChat(user.id)">
                    <img :src="user.img" :alt="user.name" >
                </li>
                <li :class="{'firstChat': (chatNotifications.findIndex(e => e.message.sourceID == user.id) +1) && user.id != currentChat.id, 'currentChat':user.id == currentChat.id }" v-for="user in others" :key="user.id" @click="getChat(user.id)">
                    <img :src="user.img" :alt="user.name" >
                </li>
            </div>
            <div  class="chatBody col-xl-9 col-lg-9 col-md-9 col-sm-12" style="padding:0px">
               <template v-if="currentChat.id">
                <div class="chatHeader">
                    <div>
                        <img :src="currentChat.img" :alt="currentChat.name">
                        <router-link style="text-decoration:none;color: white;font-weight: 500;" :to="{name:'visitProfile',params:{username : currentChat.name} }">{{currentChat.name}}</router-link>
                    </div>
                    <i class="fas fa-times-circle" @click="closeChat"></i>
                </div>
                <div class="chatMessages" id="chatMessages" v-if="chatMessages" v-chat-scroll>
                    <li :key="message.id" v-for="message in chatMessages" >
                        <span :class="{'floatRight':message.sourceID == user.id}">{{message.message}}</span>
                    </li>
                </div>
                <form  action=""  @submit.prevent="sendMessage">
                    <input  autocomplete="off" v-model="message.message" type="text" name="message" placeholder="Type">    
                </form>
                </template>
                 <div class="chooseChat" v-else>
                <img src='/storage/logo.jpeg' alt="" style="width:60px;60px">
                <span v-if="user.following.length > 0" >Choose one of the following and start chating </span>
                <span  v-else > Start Follow People To Chat With </span>
            </div>
            </div>
           
        </div>
    </template>
  
    <div class="tabs homeTabs">
        <router-link to="/"><span><i class="fas fa-home"></i><p>Home</p></span></router-link>
        <router-link :to="{name:'explore'}"> <span  ><i class="fab fa-wpexplorer" style="font-weight:600"></i><p>Explore</p></span></router-link>
        <router-link :to="{name:'following'}" v-if="this.user.id"><span><i class="fas fa-users"></i><p>Following</p></span></router-link>
    </div>
  <div class="authButtons">
      <i v-if="this.user.id == null" class="before fas fa-user showAuthButtons"></i>

        <div class="userColumnsbanale" v-if="this.user.id == null">
        <div style="display:flex;flex-direction:column">
            <button  type="button" class="btn btn-primary authButton" data-toggle="modal" data-target="#loginForm">
                <i class="fas fa-door-closed"></i>
                <p>login</p>
            </button>
            <button  type="button" class="btn btn-primary authButton" data-toggle="modal" data-target="#signUpForm">
                <i class="fas fa-user-plus"></i>
                <p>Sign Up</p>
            </button>
        </div>
        </div>
        <div v-else class="userColumnsbanale">
            <div class="userBanaleIcons">
                <i class="before fas fa-plus newProject newProjectButton" style="color:white" @click="navigateToAddProject" v-if="this.user.id != null"> </i>
                <i  class="before fas fa-user showAuthButtons"></i>
                <i class="before fas fa-bell notifications" @click="toggleShowNoti" :class="{'notify':notify==true}" v-if="this.user.id != null">
                    <span v-if="notificationCount>0" class="reddot"></span>    
                 </i>
                <div class="notificationList" v-if="notifications.length>0">
                    <h5 style="border-bottom:1px solid  #e2e2e2;text-align:center;margin-bottom: 3px;padding: 5px 0px 7px 0px;color:#414141">Notifications</h5>
                    <template v-for="notification in notifications"  >
                    <div v-if="notification.type == notificationTypes.liked" :key="notification.id">
                        <img :src="notification.user.userImg" :alt="notification.user.username">
                        <span> 
                            <router-link :to="{name:'visitProfile',params:{username : notification.user.username} }">
                             @{{notification.user.username}}
                            </router-link> <p> liked your Project {{notification.project.title}} </p></span>
                    </div>
                    <div  v-else-if="notification.type == notificationTypes.followed" :key="notification.id">
                        <img :src="notification.user.userImg" :alt="notification.user.username">
                        <span> 
                            <router-link :to="{name:'visitProfile',params:{username : notification.user.username} }">
                             @{{notification.user.username}}
                            </router-link> <p> starting following you</p></span>
                    </div>
                    </template>
                  
                </div>
            
            </div>
            <div class="userBanaleTabs">
                <router-link :to="{name: 'profile'}">
                    <button  type="button" class="btn btn-primary authButton" data-toggle="modal" data-target="#exampleModalCenter">
                        <img class="userAuthButtonsImg" v-if="user.img" :src="user.img" >
                        <img v-else class="userAuthButtonsImg" src="/storage/users/user.png">
                        <p>{{user.name}}</p>
                    </button>
                </router-link>
                <router-link to="/dashboard">
                    <button   type="button" class="btn btn-primary authButton">
                        <i class="fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </button>
                </router-link>
                <button type="button" class="btn btn-primary authButton" data-toggle="modal" @click="logOut">
                    <i class="fas fa-door-open"></i>
                    <p>logout</p>
                </button>
            </div>
        </div>
  </div>
  <div class="feedbackDiv">
    <i class="toggleShowFeedback fas fa-certificate"></i>
    <div class="feedbackContainer">
        <span>Feedback</span>
        <div class="feedbacks">
        <div @click="sendFeedback(feedback.type)" v-for="feedback in feedbacks" :key="feedback.type" class="feedback">
            <img :src="feedback.icon" :alt="feedback.title">
            <span class="feedbackTitle">{{feedback.title}}</span>
        </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import forms from './formsComponent';

export default {
    data(){
        return{
            others: [],
            currentChat:{},
            message:new Form({
                destinationID : null,
                message : '',
                sourceID: null,
            }),
            chatMessages:null,
            notifications:[],
            chatNotifications : [],
            feedbacks:[
                {'type':'satisfied',
                 'title':'Pleased',
                 'icon' : '/storage/feedback/pleased.svg'
                },
                {'type':'accepted',
                 'title':'Accepted',
                 'icon' : '/storage/feedback/huh.svg'
                },
                {'type':'ignored',
                 'title':'Ignored',
                 'icon' : '/storage/feedback/ignored.svg'
                },
            ],
            feedbackForm: new Form({
                type : "",
                message : ""
            }),
            notify:false,
            notificationCount:0,
            notifications:[],
            notificationTypes: {'liked':'App\\Notifications\\projectLiked','followed':'App\\Notifications\\followed','message':'App\\Notifications\\chatMessage'},
        }
    },
    components:{
        forms
    },
  methods:{ 
      closeChat(){
          this.currentChat = {};
          this.chatMessages = null;
      },
      getChat(id){
          this.currentChat = this.user.following[this.user.following.findIndex(e => e.id == id)];
          if(this.currentChat == undefined){
          this.currentChat = this.others[this.others.findIndex(e => e.id == id)];
          }
          this.chatMessages = null;
          this.message.destinationID = id;
          axios.get('/fetch/'+id).then((data)=>{
              this.chatMessages = data.data;
              this.chatNotifications = this.chatNotifications.filter((e)=>{
                  e.message.sourceID == id;
              });
          })
      },
        sendMessage(){
            this.message.sourceID = this.user.id;
            this.message.post('/sendMessage').then((data)=>{
                    this.chatMessages.push(data.data);
                    this.message.message = '';
                }).catch(()=>{
                    alert('error');
                });
        },

      logOut(){
            axios.get('/logOut').then(({data})=>{
                this.user = data;
                this.$router.push({name:'home'});
                EventBus.$emit('updateLogInImg')
            });
        },
     
        navigateToAddProject(){
            if(this.$route.name != "dashboardProjects"){
            this.$router.push({name:'dashboardProjects'});
            }
        },
    animate(){
        setTimeout(() => {
                var width = $('.authButtons').width() ;
                $('.authButtons').css({'right':'-143px' });
        }, 2000);
    },
    async sendFeedback(type){
        this.feedbackForm.type = type
        const { value: text } = await Swal.fire({
        input: 'textarea',
        inputPlaceholder: 'thanks for your attention, More improvments?',
        inputAttributes: {
            'aria-label': 'Type your message here'
        },
        showCancelButton: true
        })
        if (text) {
        this.feedbackForm.message = text
        this.feedbackForm.post('/feedback')
        .then(({ data }) => { 
              if(data)
              {
                Toast.fire({
                icon: 'success',
                title: 'Feedback Sent Successfully!'
                }) 
              }
              })
        .catch(()=>{
                Toast.fire({
                icon: 'error',
                title: 'Some thing went wrong!'
                }) 
          });
        }
        console.log(this.feedbackForm);
    },
    toggleShowNoti(){
        this.notificationCount = 0;
    }
  },
 async mounted(){
      this.animate();
    await this.$root.currentUser();
    if(this.user.id){
    
    this.notifications =  this.user.notifications;
    this.chatNotifications = this.user.chatNotifications;
    this.others = this.chatNotifications.filter((e)=>{
            if(e.other){
                return true;
            }
            return false;
    });
    this.others = this.others.map((e)=> e= e.other);
    var unique = Array.from(new Set(this.others.map(x => x.id))).map(id => {
        return this.others.find(x => x.id === id);
    });
    this.others = unique;
    this.notificationCount = this.notifications.length;
    window.Echo.private('App.User.' + this.user.id)
        .notification((notification) => {
            this.notificationCount++;
                
            if(notification.type == this.notificationTypes.message){
                if(notification.other){
                    if(!(this.others.findIndex(e=>e.id === notification.other.id) > -1)){
                       this.others.push(notification.other);
                    }
                }
                 if(notification.message.sourceID == this.currentChat.id){
                    this.chatMessages.push(notification.message);
                }else{
                    this.chatNotifications.unshift(notification);
                }
                
            }else{
                this.notify = true;
            setTimeout(()=>{
            this.notify = false;
            },4000);
                this.notifications.unshift(notification);
            }
        });
    // window.Echo.private('chat'+this.user.id)
    //        .listen('ChatMessage', (e) => {
    //            console.log(e.message);
    //    });
    }},
  created(){
      window.Echo.join(`chat`)
    .here((users) => {
        //
    })
    .joining((user) => {
        console.log(user.name);
    })
    .leaving((user) => {
        console.log(user.name);
    });

  }
}
</script>

<style>
.authButtons{
  display: flex;
  align-items: center;
  justify-content: center;
  top: 29%;
  position: fixed;
  right: 3px;
  transition: all .3s linear;
  z-index: 100;
  
}

.authButton{
  display: flex;
  align-items: center;
  border-radius: 3px;
  margin-left: 5px;
  margin-bottom: 2.5px;
  width: 140px;
  justify-content: center;
  padding-top: 2px;
  padding-bottom: 2px;
}
.authButton p{
  margin-bottom: 0px;
  font-weight: 600;
  margin-left: 3px;
  width: 90%;
}
 .authButtons .userColumnsbanale{
     display:flex;margin-left: 7px;
 }
 .authButtons .router-link-active{
     background: transparent!important;
     text-decoration: none;
 }
 .authButtons .router-link-active button{
         background: #2734c9!important;
    border-color: transparent;
 }
 .authButtons .userColumnsbanale .userBanaleTabs{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-content: center;
 }
.authButtons .userColumnsbanale .userBanaleIcons{
     display: flex;
     flex-direction: column;
     position: relative;
 }
.authButtons  .before{
  background: white;
  cursor: pointer;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: black;
  left: 0px ;
  font-size: 20px;
  border-radius: 32px;
  margin: 1px 0px;
}
 .authButtons a{
     text-decoration: none;
 }
 .userAuthButtonsImg{
     width:25px;height:24px;border-radius: 30px;
 }

 .newProject{
         animation: newProjectAnimation 3s ease-in-out infinite 0s!important;
         transition: all .3s linear;
         color: white;
 }
 .feedbackDiv{
    z-index: 9999;
    position: fixed;
    top: 11%;
    right: -137px;
    transition: all .2s linear;
    display: flex;
    flex-direction: row;
    align-items: center;
 }
 .showFeedback{
     right: 3px!important;
 }
 .feedbackDiv i{
    margin-right: 10px;
    font-size: 25px;
    color: #5bbc2e;
    cursor: pointer;
 }
 .feedbackContainer{
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
 }
 .feedbackDiv .feedbacks{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
 }
 .feedbackContainer span{
    text-align: center;
    font-weight: 600;
    color: #494949;
    border-bottom: 1px solid #d2d2d2;
 }
 .feedback{
    padding: 0px 5px;
    cursor: pointer;
    position: relative;
 } 
 .feedback:hover .feedbackTitle{
    display: flex;
    width: auto;
 }
 .feedbackContainer img{
    width: 30px;
    height: 30px;
 }
  .feedbackTitle{
    display: none;
    color: white!important;
    font-weight: 500;
    justify-content: center;
    border-radius: 3px;
    position: absolute;
    top: 35px;
    background: black;
    left: -10px;
    font-size: 11px;
    padding: 2px 3px;
    min-width: 60px;
 }
 .swal2-actions button{
  padding :2px 11px!important;
 }
  .notifications{
    background: #000000c4!important;
    color: #ffbf02!important;
    position: relative;
 }
 .reddot, .firstChat::before{
    content: '';
    font-size: 11px;
    background: red;
    color: white;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 10px;
    height: 10px;
    border-radius: 15px;
 }
 .currentChat{
    border: 2px solid #007bff !important;
    padding: 20px;
 }
 .notificationList{
    position: absolute;
    width:310px;
    max-width:310px;
    display: none;
    flex-direction: column;
    background: white;
    padding: 5px;
    border-radius: 5px;
    left: -318px;
    bottom: -162px;
    height: 200px;
    overflow: auto;
    box-shadow: 0 0 20px #0000007a;
 }
 .notificationList div{
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 4px 0px;
    transition: all .1s linear;
    border-radius: 4px;
    box-shadow: 0 0 8px #00000052;
 }
 .notificationList  .router-link-active{
     color: #007bff!important;
     background: white!important;
 }
 .notificationList div:hover{
     cursor: pointer;
    box-shadow: 0 0 8px #0000009f;
 }
 .notificationList div img{
     width: 20px;
    height: 20px;
    object-fit: scale-down;
 }
 .notificationList div span{
        display: flex;
        font-weight: 500;
        margin-left: 3px;
        font-size: 13px;
 }
 .notificationList span p{
     width: max-content;
     margin: 0px 0px 0px 2px;
 }
 .chatIcon:hover {
     font-size: 26px;
 }
 .chatIcon i{
     transition: all .1s linear;
     cursor: pointer;
 }
 .chatIcon{
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 11px;
    right: 10px;
    padding: 10px 8px 8px 8px;
    background: #5bbc2e;
    border-radius: 80px;
    color: white;
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 5px 20px #0000008a;
    font-size: 24px;
 }
 .chatBox{
    z-index: 100;
    position: fixed;
    bottom: 11px;
    display: none;
    right: 54px;
    width: 300px;
    height: 400px;
    background: white;
    overflow: auto;
    border-radius: 6px;
    box-shadow: 6px 5px 20px #0000008a;
 }
 .followingChats{
    height: 100%;
    overflow: auto;
    max-height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid #5bbc2e;
    padding: 5px 2px;
     
 }
 .chatBody{
     height: 100%;
     position: relative;
     display: flex;
     flex-direction: column;
     overflow: auto;
     max-height: 450px;
 }
.chatBody .chatHeader{
    padding: 5px 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 12%;
    background: #28a745;
    color: white;
    font-weight: 400;
    box-shadow: 0px 1px 20px #0000009e;
    text-transform: capitalize;
}
.chatHeader i{
    cursor: pointer;
}
.chatHeader img{
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 40px;
}
 .chatMessages{
    height: 81%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 5px;
    top: 0px;
    width: 100%;
 }
 .chatMessages li{
     width:100%;
     list-style: none;
     margin:3px 0px;
     max-width: 100%;
 }
 .chatMessages span{
     max-width: 100%;
    width: fit-content;
    background: #007bff;
    color: white;
    padding: 4px;
    border-radius: 9px;
 }
 .chatMessages .floatRight{
     float:right;
     background: #3bae13;
 }
 .chatBody form{
    padding: 0px;
 }
 .chatBody form input{
    width: 100%;
    border: none;
    padding: 2px 10px;
    border-top: 1px solid #cbc7c7;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
    color: #000000cf;
    transition: all .1s linear;
 }
 .chatBody form input:focus{
     outline: none;
    border-top: 2px solid #5bbc2e;
 }
 .followingChats li{
    list-style: none;
    margin: 5px;
    border: 1px solid #5bbc2e;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: all 0.2s linear;
 }

 .followingChats li img{
    width: 35px;
    height: 35px;
    border-radius: 30px;
 }

.chooseChat{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.chooseChat span {
    font-weight: lighter;
    text-align: center;
}
.chatBody .router-link-active{
    background: transparent!important;
}

    </style>