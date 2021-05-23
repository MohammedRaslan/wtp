<template>
    <div class="row">
        <div class=" col-xl-10 col-lg-12 col-md-12 col-sm-12">
            <div class="col-12 cards" style="padding: 30px;margin-bottom: 15px">
                    <div class="manageItem" >
                            <span class="confirmButton" v-if="(newImgFile==true || newImgFile== null)" @click="uploadImgFile"> <i class="fas " :class="{'fa-check': newImgFile,'fa-cog': ((!newImgFile)||(newImgFile==null))}"></i></span>
                            <i class="hoverIcon fas fa-pen" @click="showSelectFile('pp')" style=" color: #495057!important;"></i>
                            <i v-if=" user.img != '/storage/users/user.png' " style="color: #d7304f;" class="fas fa-trash hoverIcon" @click="UpdateConfirmationToImg" id="deleteImgButton" data-toggle="modal" data-target="#deleteConfirm"></i>
                    </div>
                <span class="title"><i class="fas fa-camera-retro" style="color: ;"></i> <p>Pofile Picture</p></span>
                <div class="col-12 photoDiv">
                    <img :src="user.img" alt="" id="userPP">
                </div>
                    <input @change='selectedFile' type="file" name="pp" id="selectPPImageInput" hidden>
            </div>
        </div>
        <div class=" col-xl-10 col-lg-12 col-md-12 col-sm-12">

            <div class="col-12 cards" style="padding: 30px;margin-bottom: 15px">
                    <div class="manageItem" >
                            <span class="confirmButton" v-if="(newCoverFile==true || newCoverFile== null)" @click="uploadCoverFile"> <i class="fas" :class="{'fa-check': newCoverFile,'fa-cog': ((!newCoverFile)||(newCoverFile==null))}"></i></span>
                            <i class="hoverIcon fas fa-pen" @click="showSelectFile('cover')" style=" color: #495057!important;"></i>
                            <i v-if="user.cover != '/storage/users/covers/cover.jepg'" class="hoverIcon fas fa-trash" style="color: #d7304f;" @click="UpdateConfirmationToCover" id="deleteCoverButton" data-toggle="modal" data-target="#deleteConfirm"></i>
                    </div>
                <span class="title"><i class="fas fa-image" style="color: ;"></i> <p>Cover</p></span>
                <div class="col-12 coverDiv">
                    <img id="userCover" :src="user.cover" alt="">
                </div>
                    <input @change='selectedFile' type="file" name="cover" id="selectCoverImageInput" hidden>
            </div>
        </div>
        <div class=" col-xl-10 col-lg-12 col-md-12 col-sm-12">
            <div class="col-12 cards" style="padding: 30px;margin-bottom: 15px;position:relative">
                <!-- <div class="moreSocialOptions">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul>
                        <li>xx</li>
                        <li>xx</li>
                        <li>xx</li>
                    </ul>
                </div> -->
                <span class="title"><i class="fas fa-link" style="color: ;"></i> <p>Links</p></span>
                <div class="col-12 socialList">
                    <div class="socialListItem row">
                        <div style="background: #2964cc; " class="col-lg-8 col-xl-8 col-md-8 col-sm-12">
                            <i class="fab fa-facebook socialListItemIcon" ></i>
                            <input type="text" class="" style="border-color:rgba(41, 100, 204,0.4)" placeholder="example: www.facebook.com/saif.mohamed.23">
                        </div>
                        <div class="manageSocialItem col-lg-4 col-xl- col-md-4 col-sm-12">
                            <span class="confirmButton"  @click="uploadCoverFile"> <i class="fas fa-check"></i></span>

                            <i class="fas fa-pen hoverIcon"></i>
                            <i class="fas fa-trash hoverIcon" style="color: #d7304f;"></i>
                        </div>

                    </div>
                </div>
                <div class="col-12 socialList">
                    <div class="socialListItem row">
                        <div style="background:rgb(81, 139, 240)"  class="col-lg-8 col-xl-8 col-md-8 col-sm-12">
                            <i class="fab fa-twitter socialListItemIcon" ></i>
                            <input type="text" class="" style="border-color:rgba(81, 139, 240,0.4)" placeholder="example: www.twitter.com/saif.mohamed.23">
                        </div>
                        <div class="manageSocialItem col-lg-4 col-xl- col-md-4 col-sm-12">
                            <span class="confirmButton"  @click="uploadCoverFile"> <i class="fas fa-check"></i></span>

                            <i class="fas fa-pen hoverIcon"></i>
                            <i class="fas fa-trash hoverIcon" style="color: #d7304f;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" col-xl-10 col-lg-12 col-md-12 col-sm-12">
            <div class="col-12 cards" style="padding: 30px;margin-bottom: 15px;">
                <span class="title"></span>
                <div class="col-12"></div>
            </div>
        </div>

<div class="modal fade" id="deleteConfirm" tabindex="-1" role="dialog" aria-labelledby="deleteConfirm" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteConfirm">Delete Confirmation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <h6></h6>
      </div>
      <div class="modal-footer">
        <button type="button"  class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger"  id="deleteButton">Delete</button>
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
                newImgFile: false,
                newCoverFile: false,
        }
    },
    methods:{
        showSelectFile(type){
            if(type == 'pp'){
                document.getElementById('selectPPImageInput').click()
            }else{
                if(type == 'cover'){
                    document.getElementById('selectCoverImageInput').click()
            }
            }
        },
        UpdateConfirmationToImg(){
            document.getElementById('deleteButton').onclick = () => { this.deletePPImage(); }; 
        },
        UpdateConfirmationToCover(){
            document.getElementById('deleteButton').onclick = () => { this.deleteCoverImage(); }; 
        },
        selectedFile(e){
            var type = e.target.name;
            if(e.target.files && e.target.files[0]){
                var reader = new FileReader();
                reader.onload = (e)=>{
                    if(type == 'pp'){
                    document.getElementById('userPP').src = e.target.result;
                    this.newImgFile = true;
                    }
                    else{
                        if(type == 'cover'){
                             document.getElementById('userCover').src = e.target.result;
                             this.newCoverFile = true;
                        }
                    }
                }
                reader.readAsDataURL(e.target.files[0]);

            }else{
                this.newImgFile = false;
            }

        },

        submitPPImgForm(){
            document.getElementById('ppForm').submit();
        },

        async uploadImgFile(e){
            this.newImgFile = null;
            var formData = new FormData();
            formData.append('type',true);
            formData.append('pp',document.getElementById('selectPPImageInput').files[0]);
            document.getElementById('selectPPImageInput').files  = null;
          await  axios.post('/updateProfileImage', formData)
            .then((data)=>{
                    if(data)
                    {   
                        console.log(data.data);
                        this.user.img = data.data;
                        this.newImgFile = false;
                    }
                })
                .catch(()=>{
                        this.newImgFile = true;
                });

        },

        deletePPImage(){
            var formData = new FormData();
            formData.append('pp',null);
            formData.append('type',false);
            axios.post('/updateProfileImage', formData)
            .then((data)=>{
                    if(data)
                    {   
                        console.log(data.data);
                        $('#deleteConfirm').modal('hide');
                        $('.modal-backdrop').remove();
                        this.user.img = data.data;
                        this.newImgFile = false;
                    }
                })
                .catch(()=>{
                });
        },
        async uploadCoverFile(e){
            this.newCoverFile = null;
            var formData = new FormData();
            formData.append('type',true);
            formData.append('cover',document.getElementById('selectCoverImageInput').files[0]);
            document.getElementById('selectCoverImageInput').files  = null;
            console.log(formData);
            await axios.post('/updateCoverImage', formData)
            .then((data)=>{
                    if(data)
                    {   
                        console.log(data.data);
                        this.user.cover = data.data;
                        this.newCoverFile = false;
                    }
                })
                .catch(()=>{
                        this.newCoverFile = true;
                });
        },

        deleteCoverImage(){
            var formData = new FormData();
            formData.append('cover',null);
            formData.append('type',false);
            console.log(formData);
            axios.post('/updateCoverImage', formData)
            .then((data)=>{
                    if(data)
                    {   
                        $('#deleteConfirm').modal('hide');
                        $('.modal-backdrop').remove();
                        this.user.cover = data.data;
                        this.newCoverFile = false;
                    }
                })
                .catch(()=>{
                });
        }
    },
    mounted(){
        this.$root.currentUser();
        this.$Progress.start();
    },
    created(){
        this.$Progress.finish();

    }
}
</script>

<style>
    .title{
        display: flex;
        align-items: center;
        font-size: 24px;
        color: rgba(0,0,0,.7);
    }
    .title p{
        margin: 0px;
        margin-left: 11px;
        font-weight: 700;
    }
    .manageItem{
        position: absolute;right: 15px;top:10px;display: flex;align-items: center;
    }
    .manageSocialItem{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .photoDiv{
        display: flex;
        justify-content: center;
        height: 213px;
         align-items: center;
    }
    .photoDiv img{
        height: 150px;
        border-radius: 120px;
        width: 150px;
        object-fit: scale-down;
    }
    .coverDiv{
        display: flex;
        justify-content: center;
        height: 100%px;
        align-items: center;
    }
    .coverDiv img{
        width: 100%;
        max-height: 200px;
        border-radius: 3px;
            object-fit: cover;
    }
    .socialList{
        padding: 5px 32px;
    }
    .socialListItem{
        position: relative;
        display: flex;  
        align-items: center;
    }
    .socialListItem div:first-child{
        display: flex;
        padding:7px 10px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        align-items: center;
    }
    .socialListItemIcon{
        font-size: 38px;
        margin-right: 20px;
        color: white;
    }
    .socialListItem input{
        width: 100%;
        border: 2px solid;
        border-radius: 3px;
        padding: 5px;
        color: rgba(0,0,0,.8);
        font-weight: 500;
    }
    .confirmButton{
        display: flex;
        align-items: center;
        padding: 0px 12px;
        border-radius: 3px;
        background: #1ab632;
        margin-right: 10px;
        color: white;
        cursor: pointer;
    }
    .confirmButton p{
        margin: 0px;
        font-weight: 600;

    }
    .confirmButton:hover{
    box-shadow: 0 0 20px #2bd88857;
    }
    .manageItem i, .manageSocialItem i{
        padding: 7px 7px;
        cursor: pointer;
        border-radius: 3px;
    }
     .hoverIcon:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,.2);
    }
    .moreSocialOptions{
        position: absolute;
        right: 29px;
        top: 12px;
        font-size: 20px;
    }
    .moreSocialOptions i{
        cursor: pointer;
    }
    .moreSocialOptions ul{
        display: none;
        list-style: none;
        padding: 5px 10px;
        box-shadow: 0 0 20px rgba(0,0,0,.2);
        border-radius: 10px;
        position: absolute;
        z-index: 5;
        right: 24px;
        min-width: 157px;
        top: 20px;
        background: white;
    }
    .moreSocialOptions li{
        padding: 5px;
        border-bottom: 1px solid rgb(197, 197, 197);
        border-bottom-width: 60%;
        cursor: pointer;
        border-radius: 3px;
    }
    .moreSocialOptions.li:last-child{
        border-bottom: none;
    }
    .moreSocialOptions li:hover{
        cursor: pointer;
        background:rgb(245, 245, 245);
    }

    @media (max-width: 768px){
  
  .title{
      font-size: 24px;
  }
  }
 
</style>