<template>
  <div class="container-fluid dashboard" style="height:100%">
      <div class="row" style="height:100%">
            <div class="lcontainer col-lg-3 col-xl-2 col-md-12">

                <div class="userdiv">
                    <div class="userimg loading">
                        <img v-if="user.img" :src="user.img" alt="">
                    </div>
                    <p v-if="user.name">{{user.name}}</p>
                    <span v-else class="loading"></span>
                    <p v-if="user.email">{{user.email}}</p>
                    <span v-else class="loading"></span>
                </div>
                <div class="dashboardTabs">
                    <router-link :to="{name:'dashboardHome'}" ><i class="fas fa-warehouse"></i> Home</router-link>
                    <router-link :to="{name:'dashboardProfile'}"><i class="fas fa-user-cog"></i>  Profile</router-link>
                    <router-link :to="{name:'dashboardProjects'}"><i class="fas  fa-solar-panel"></i>Projects</router-link>
                </div>
                    <span class="more"><i class="fas fa-chevron-circle-down fa-2x "></i></span>
                    <div class="storage">
                        <div class="progress"  style="background:#5c676f">
                              <div v-if="user.storage && user.wholeStorage" class="progress-bar" role="progressbar" :style="{'width': Number(((user.storage*100)/user.wholeStorage).toFixed(2))}" :aria-valuenow="Number(((user.storage*100)/user.wholeStorage).toFixed(2))" aria-valuemin="0" aria-valuemax="100">{{Number(((user.storage*100)/user.wholeStorage).toFixed(2))}}%</div>
                       </div>
                    </div>
            </div>
            <div class="rcontainer col-lg-9 col-xl-10 col-md-12">
                 <router-view></router-view>   
            </div>
      </div>

  </div>
</template>

<script>
import AuthButtons from '../AuthButtonsComponent'
export default {
    data(){
        return{
            projects: null,
            followers: null,
            following: null,
            downloads:0,
            likes:0,
        }
    },
    beforeRouteEnter (to, from, next) {
        document.getElementsByClassName('navbar')[0].style.display = 'none',
        document.getElementsByClassName('body')[0].style.margin = '0px';
        next();
    },
    beforeRouteLeave (to, from, next){
        document.getElementsByClassName('navbar')[0].style.display = 'flex',
        document.getElementsByClassName('body')[0].style.margin = '56px 0px 0px 0px';
        next();
    },
    methods:{
        async userDashboard()
        {
        await  axios.get('/userDashboard')
            .then(({data})=>{
                if(data){
                    this.user = data.user;
                    this.projects = data.projects;
                    this.followers = data.followers;
                    this.following = data.following;
                    EventBus.$emit('updateDashboard');
                }else{
                this.$router.push({name:'home'});
                }
            })
            .catch(()=>{
                this.$router.push({name:'home'});
            });

        }
    },
  
    mounted(){
       this.$Progress.start();
        this.userDashboard();
        // this.$router.push({name:'dashboardHome'});
       
    },
    created(){
        this.$Progress.finish();
    }
}
</script>

<style>
    .lcontainer{
        border-left: 1px solid gray;
        background-color: white;
        display: flex;
        flex-direction: column;
    }
    .userdiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 5px 10px 5px;
    }
    .userdiv img{
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-fit: scale-down;;
    }
    .userimg{
        width: 80px;
        height: 80px;
        border-radius: 50px;
        -o-object-fit: contain;
        object-fit: contain;
        border: 2px solid white;
        margin-bottom: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .userdiv p{
        font-weight: 900;
        color: rgba(39, 38, 38, 0.75);
        margin-bottom: 0px;
        text-align: center;
    }
    .userdiv p:last-child{
        color: rgba(0,0,0,.5);
        text-align: center;
        font-size: 13px;
        margin-top: 4px;
    }
    .userdiv span{
        width: 120px;
        height: 20px;
        margin-bottom: 3px;
        border-radius: 2px;
    }
    .rcontainer{
        background-color: #f6f6f6;
        height: 93%;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-top: 30px;
    }
    .dashboardTabs{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 5px 10px 5px;
    }
    .dashboardTabs a i{
        margin-right: 5px;
    }
    .router-link-active
    {
        background: linear-gradient(90deg, rgba(81,17,177,1) 0%, rgba(28,21,175,1) 55%, rgba(12,182,227,1) 100%)!important;
        color:white;
    }
    .router-link-active:hover{
        color:white;
    }
    .dashboardTabs a{
        width: 100%;
        align-items: center;
        text-align: center;
        padding: 10px 0px;
        background: #fbfbfb;
        margin-bottom: 3px;
        font-weight: 500;
        transition: all .5s linear;
        border-radius: 3px;
    }
    .dashboardTabs a:hover{
        text-decoration: none;
        background-color:rgba(170, 170, 170, 0.75) ;
    }

    .more{
        display: none;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        color:teal;
    }

    .storage{
       position: absolute;
       bottom: 170px;
       width: 89%;
    }
    .progress-bar{
        font-weight: 500;
         padding: 0px 3px;
    }

    @media (max-width: 768px){
        .dashboardTabs{
            display: none;
        }
        .dashboardTabs a{
            width: 40%;
        }
        .more{
            display: flex;
        }
}
@media (max-width:991px){
    .rcontainer{
        height: auto;
    }
    .storage{
        position: relative;
        width: 40%;
        left: 30%;
        bottom: 0px;
        margin-top:5px ;
            margin-bottom: 9px;
    }
}
  @media  (max-width: 991px){
        .dashboardTabs a 
        {
         width: 40%;
        }
    }
</style>