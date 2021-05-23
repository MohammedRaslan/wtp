<template>
  <div class="container-fluid">
      <div class="row homeTopRow" style="margin:0px">
          <img src="\storage\logo.svg" alt="">
      </div>
      <div class="row" style="padding-top: 20px;">
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 " style="margin:6px 0px">
              <div class="col-12 cards">
                    <span class="cardIcon">
                        <i class="fas fa-2x fa-solar-panel"></i>
                    </span >
                    <h4 class="cardTitle">Projects</h4>
                    <span class="count">
                        <p v-if="projects">{{projects.length}}</p>
                        <p v-else class="numberLoading">0</p>
                    </span>
                    <button class="cardButton newProjectTrickButton">
                        <i class="fas fa-plus"></i>
                        <p>Project</p>
                    </button>
              </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 " style="margin:6px 0px">
              <div class="col-12 cards">
                    <span class="cardIcon">
                        <i class="fas fa-2x fa-cart-arrow-down" style="color:#69c649d1"></i>
                    </span >
                    <h4 class="cardTitle">Downloads</h4>
                    <span class="count">
                        <p v-if="projects" >{{downloads}}</p>
                        <p v-else class="numberLoading">0</p>
                    </span>
              </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 " style="margin:6px 0px">
              <div class="col-12 cards">
                    <span class="cardIcon">
                        <i class="fas fa-2x fa-eye" style="color:#416bfbdb"></i>
                    </span >
                    <h4 class="cardTitle">Views</h4>
                    <span class="count">
                        <p v-if="projects">{{projects.length}}</p>
                        <p v-else class="numberLoading">0</p>
                    </span>
              </div>
          </div>
           <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 " style="margin:6px 0px">
               <div class="col-12 cards">
                    <span class="cardIcon">
                        <i class="fas fa-2x fa-heart" style="color:rgb(240, 92, 92)"></i>
                    </span >
                    <h4 class="cardTitle">Love</h4>
                    <span class="count">
                        <p v-if="projects">{{likes}}</p>
                        <p v-else class="numberLoading">0</p>
                    </span>
               </div>
          </div>
          <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12" style="padding:0px;border:8px solid transparent">
            <div class="col-12 users">
                <h5 style="color:rgba(0,0,0,.7)">Following</h5>
                <div  v-if="following" class="content">
                        <div v-if="following.length > 0" >
                            <router-link class="user" v-for="follow in following" :key="follow.id" :to="{name:'visitProfile',params:{username:follow.name}}">
                                <span>
                                    <img  :src="follow.img" alt="">
                                </span>
                            </router-link>
                        </div>
                       <span v-else style="padding-left:10px;">
                           <p style="color:rgba(0,0,0,.7);font-weight:600">No Following Yet</p>
                       </span>
                </div>
                <div v-else class="content">
                    <span class="user loading"></span>
                    <span class="user loading"></span>
                    <span class="user loading"></span>
                    <span class="user loading"></span>
                    <span class="user loading"></span>
                </div>
            </div>
            <div class="col-12 users">
                <h5 style="color:rgba(0,0,0,.7)">Followers</h5>
                <div  v-if="followers" class="content">
                    <div v-if="followers.length > 0">
                            <router-link class="user" v-for="follow in followers" :key="follow.id" :to="{name:'visitProfile',params:{username:follow.name}}">
                                <span>
                                    <img  :src="follow.img" alt="">
                                </span>
                            </router-link>
                    </div>
                    <span v-else style="padding-left:10px;">
                           <p style="color:rgba(0,0,0,.7);font-weight:600">No Followers Yet</p>
                    </span>
                </div>
                <div v-else class="content">
                    <span class="user loading"></span>
                    <span class="user loading"></span>
                    <span class="user loading"></span>
                    <span class="user loading"></span>
                    <span class="user loading"></span>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
    return{
        projects: this.$parent.projects,
        followers: this.$parent.followers,
        following: this.$parent.following,
        downloads:0,
        likes:0,
    }
    },
     beforeRouteLeave (to, from, next){
        if(to.name == 'dashboard'){
            next({name: 'home'});
        }
        next();
    },
    methods:{

        count(){
            if(this.projects !=null){
                this.projects.forEach(project => {
                this.likes += project.like.length;
                this.downloads += project.download.length;
                });
            }
        },
    },
    components: {

  },
    mounted(){
        this.$Progress.start();
        this.$root.currentUser()
        EventBus.$on('updateDashboard', () => {
            this.projects= this.$parent.projects;
            this.followers= this.$parent.followers;
            this.following= this.$parent.following;
            this.count();
        });

    },
    created(){
        this.$Progress.finish();
    }
}
</script>

<style>
    .homeTopRow img{
        width: 40px;
        height: 40px;
    }
    .cards{
        background-color: white;
        height: 300px;
        padding: 21px 22px 10px 22px;
        border-radius: 8px;
        position: relative;
        box-shadow: 0 0 20px #1919194a;
    }
    .cardIcon{
        display: flex;
        padding-top: 5px;
        margin-bottom: 17px;
        color: rgba(0,0,0,.7);
    }
    .count{
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .count p{
            color: rgba(0,0,0,.7);
            font-size: 60px;
    }
    .cardTitle{
        color: rgba(0,0,0,.8);
    }
    .cardButton{
        padding: 2px 15px;
        margin: 3px;
        position: absolute;
        bottom: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(119, 197, 233, 0.829);
        width: fit-content;
        background: transparent;
        transition: all .3s linear;
    }
    .cardButton:hover{
        background: rgba(119, 197, 233, 0.829);
    }
    .cardButton i{
        color: rgba(78, 172, 216, 0.829);
        margin-right: 5px;
    }
    .cardButton p{
        margin: 0px;
        color: rgba(78, 172, 216, 0.829);
        font-weight: 500;
    }
    .users{
        height: 150px;
        padding: 21px 22px 10px 22px;
        border-radius: 8px;
        position: relative;
        background-clip: padding-box;
        border: 4px solid #f6f6f6;
        background: cornflowerblue;
    }
    .users .content{
        display: flex;
        align-content: center;
        padding-top: 16px;
    }
    .user{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin: 0px 4px;
        text-decoration: none;
    }
    .user img{
           width: 40px;
    height: 40px;
    border-radius: 20px;
    }

</style>