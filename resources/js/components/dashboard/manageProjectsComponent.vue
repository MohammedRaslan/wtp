<template>
    <div class="container-fluid" style="position:relative">
        <div id="manageProjectForm" class=" manageProjectContainer closedFromContainer container-fluid" style="">
           <span class="newProjectButton" @click="clearForm"><i @click="clearForm" class="fas fa-times-circle"></i></span>
           
           <form @submit.prevent="projectUpload"  method="post" class="row manageProjectForm" style="margin:0px">
                <div class="col-12">
                    <div class="errorDiv" v-if="project.errors.has('title')">
                        <span  class="optionsCount error" >!</span>
                        <has-error :form="project" field="title"></has-error>
                    </div>
                    <input  type="text" v-model="project.title" name="title" class="form-control" placeholder="Title" require>
                </div>
                <div class="col-12">
                     <div class="errorDiv" v-if="project.errors.has('description')">
                        <span  class="optionsCount error" >!</span>
                        <has-error :form="project" field="description"></has-error>
                    </div>
                    <textarea  class="form-control" v-model="project.description" name="description" cols="2" rows="3" placeholder="Description" require></textarea>
                </div>
                <div class="col-12 row br">
                    <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 customDropdownList" style="padding-left: 0;">
                            <span class="optionsTitle" >
                                <p>Category</p>
                                 <div class="errorDiv" v-if="project.errors.has('category')">
                                    <span  class="optionsCount error" >!</span>
                                    <has-error :form="project" field="category"></has-error>
                                </div>
                                <i class="moreOptions fas fa-chevron-circle-down"></i>
                             </span>
                            <div class="dropList" >
                                <div v-if="!categories" style="padding:3px;0px">
                                    <span class="loading option"></span>
                                    <span class="loading option" ></span>
                                    <span class="loading option" ></span>
                                    <span class="loading option" ></span>
                                </div>
                                <li v-for="category in categories" :key="category.id" @click="updateCategory(category.id)"  class="option">
                                    <input @change="updateSelectedCatetory(category.id)" name="category" type="radio"  class="optionCheckbox" :checked="project.category == category.id" :value="category.id" >
                                    <p>{{category.title}}</p>
                                </li>    
                            </div>
                    </div>
                    <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 customDropdownList" style="padding-right: 0;">
                            <span class="optionsTitle" >
                                <p>Subcategory</p>
                                <div class="errorDiv" v-if="project.errors.has('subcategory')">
                                    <span  class="optionsCount error" >!</span>
                                    <has-error :form="project" field="subcategory"></has-error>
                                </div>
                                <i class="moreOptions fas fa-chevron-circle-down"></i>
                             </span>
                            <div class="dropList" >
                                    <div v-if="!selectedCategory.subcategory" style="padding:3px;0px">
                                <li class="option">
                                    <p style="color: rgba(120, 120, 120, 0.8);">Please Select A Category!</p>
                                </li>  
                                    </div>
                                <li v-for="subcategory in selectedCategory.subcategory" @click="updateSubcategory(subcategory.id)" :key="subcategory.id"   class="option">
                                    <input  name="subcategory" type="radio" class="optionCheckbox"  :checked="project.subcategory == subcategory.id" :value="subcategory.id"  v-model="project.subcategory">
                                    <p>{{subcategory.title}}</p>
                                </li>    
                            </div>
                    </div>
                </div>
                <div class="col-12 row br">
                    <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 customDropdownList" style="padding-left: 0;">
                            <span class="optionsTitle" >
                                <p>Programs</p>
                                 <div class="errorDiv" v-if="project.errors.has('programs')">
                                    <span  class="optionsCount error" >!</span>
                                    <has-error :form="project" field="programs"></has-error>
                                </div>
                                <i class="moreOptions fas fa-chevron-circle-down"></i>
                             </span>
                            <div class="dropList" >
                                    <div v-if="!programs.length" style="padding:3px;0px">
                                        <span class="loading option"></span>
                                        <span class="loading option" ></span>
                                        <span class="loading option" ></span>
                                        <span class="loading option" ></span>
                                    </div>
                                <li v-for="program in programs" :key="program.id" @click="updateProgram(program.id)" class="option">
                                    <input  type="checkbox" class="optionCheckbox" :checked="project.programs.includes(program)" :value="program.id" v-model="project.programs" >
                                    <p>{{program.title}}</p>
                                </li>    
                            </div>
                    </div>
                   <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 customDropdownList " style="padding-right: 0;">
                            <span class="optionsTitle" > 
                                <p>Tags</p>
                                <div class="errorDiv" v-if="project.errors.has('tags')">
                                    <span  class="optionsCount error" >!</span>
                                    <has-error :form="project" field="tags"></has-error>
                                </div>
                                <i class="moreOptions fas fa-chevron-circle-down"></i>
                             </span>
                            <div class="dropList" >
                                    <div v-if="!tags.length" style="padding:3px;0px">
                                        <span class="loading option"></span>
                                        <span class="loading option" ></span>
                                        <span class="loading option" ></span>
                                        <span class="loading option" ></span>
                                    </div>
                                        <div style="position:relative;margin: 0px;padding:7px 0px 0px 0px;">
                                            <input class="searchTagsInput form-control form-control-sm" style="padding:18px .5rem" placeholder="Search.."/> <i class="fas fa-search searchTag" style="position: absolute;top: 17px;right: 14px;cursor:pointer;"></i>
                                        </div>
                                        <ul class="tags" style="padding:2px 8px 0px 3px;max-height: 165px;"> 
                                                <li v-for="tag in tags" :key="tag.id"  class="option" @click="updateTags(tag.id)" >
                                                    <input  type="checkbox" class="optionCheckbox" :checked="project.tags.includes(tag.id)" :value="tag.id" v-model="project.tags">
                                                    <p>{{tag.title}}</p>
                                                </li>   
                                         </ul> 
                            </div>
                    </div>
                    
                </div>
                <div class="row" style="    margin-top: 2px;">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <input hidden id="img"  @change="selectImg" name="imgs[]" style="width: 56%;padding-left: 15px;" type="file" class="form-control-file" require multiple>
                        <button class="btn btn-primary col-12 btn-sm" @click="clickImg" type="button">
                        <div class="errorDiv" v-if="project.errors.has('imgs')">
                                <span  class="optionsCount error" >!</span>
                                <has-error :form="project" field="imgs"></has-error>
                        </div>
                        Choose Image</button> 
                        <div v-if="project.imgs" class="formImages">
                            <div v-for="(img,index) in selectedImgs" :key="index+'pimg'">
                                <span @click="removeImg(index)">
                                <i class="far fa-times-circle"></i>
                                </span>
                                <img :src="img" alt="invalid image" >
                            </div>
                        </div>  
                                         
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <input hidden id="file"  @change="selectFile" style="width: 56%;padding-left: 15px;" name="file" type="file" class="form-control-file" require>
                        <button class="btn btn-primary col-12 btn-sm" @click="clickFile" type="button">
                        <div class="errorDiv" v-if="project.errors.has('file')">
                                <span  class="optionsCount error" >!</span>
                                <has-error :form="project" field="file"></has-error>
                        </div>
                            Choose File</button>                    
                    </div>
                </div>
                <div class="col-12 row">
                    <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 row" style="margin:0px">
                        <div class="form-check col-6" style="padding-top: 5px;">
                            <input :class="{ 'is-invalid': project.errors.has('type') }" class="form-check-input" type="radio" name="free" :checked="!project.type" :value="false" v-model="project.type">
                            <label class="form-check-label" for="price">
                                Free
                            </label>
                        </div>
                        <div class="form-check col-6" style="padding-top: 5px;">
                            <input :class="{ 'is-invalid': project.errors.has('type') }" class="form-check-input" type="radio" name="free" :checked="project.type"  :value="true" v-model="project.type">
                            <label class="form-check-label" for="price">
                                Premium
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                        <input :class="{ 'is-invalid': project.errors.has('price') }" class="form-control" type="number" placeholder="$" name="price" required :disabled="!project.type" v-model="project.price">
                    </div>
                </div>
                <div class="col-12 row">
                        <button type="submit" class="submitButton" :disabled="loading">
                            <div v-if="loading" id="spinner-grow" class="spinner-border spinner-border-sm" role="status" style="margin: 0px 9px;">
                                <span class="sr-only" >Loading...</span>
                            </div>
                            <span v-if="!loading">Submit</span>
                        </button>
                </div>
           </form>
        </div>
        <div v-if="projects == null" class="noProjects">
                    <div class="spinner-border" style="width: 5rem; height: 5rem;color:gainsboro" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
        </div>
        <div v-else-if="projects.length > 0" class="row">
            <div v-for="project in projects" :key="project.id" class="col-md-6 col-xl-6 col-sm-12 col-lg-6">
                  <div  class="card" >
                        <img :src="'/storage/'+project.img" class="card-img-top">
                    <div class="card-body" style="padding-bottom:5px">
                        <h5 class="card-title">{{project.title}}</h5>
                        <p class="card-text">{{project.description}}</p>
                        <div class="projectcsp">
                            <p style="font-weight: 600;margin: 0 57px 0 0;">Category</p><span><p>{{project.category.title}}</p></span>
                        </div>
                        <div class="projectcsp">
                            <p style="font-weight: 600;margin: 0 40px 0 0;">Subategory</p><span><p>{{project.subcategory.title}}</p></span>
                        </div>
                        <div class="projectcsp">
                            <p style="font-weight: 600;margin: 0 57px 0 0;">Programs</p>
                            <span v-for="program in project.program" :key="program.id" style="width:auto;padding:0px 11px"><p>{{program.title}}</p></span>
                        </div>
                        <div class="projectTags" style="padding:0px">
                            <li v-for="tag in project.tag" :key="tag.id">
                                <span>{{ tag.title }}</span>
                            </li>
                        </div>
                        <p class="card-text"><small class="text-muted">{{project.created_at|newDate}}</small></p>
                    </div>
                        <div class="projectButtons">
                            <button @click="editProject(project)">
                                <i class="fas fa-edit" style="color: #3fb73f;"></i>
                            </button>
                            <button @click="deleteProject(project.id)" >
                                <i class="fas fa-trash-alt" style="color: #fb5252;"></i>
                            </button>
                        </div>
                       
                    </div>
            </div>
              
        </div>
        <div v-else class="noProjects">
                <span >
                <i class="fas fa-solar-panel" style="font-size: 154px;"></i>
                <h3>No Projects Yet!</h3> 
                </span>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            projects: this.$parent.projects,
            subcategories: [],
            loading:null,
            categories: null,
            programs : [],
            tags : [],
            selectedCategory:{},
            selectedImgs:null,
            project:new Form({
                id:null,
                title:'',
                description: '',
                category: null,
                subcategory: null,
                programs:[],
                tags:[],
                price:null,
                type:false,
                imgs:null,
                file:null
            }),
        }
    },
    methods:{

        formData(e)
        {
            this.$root.currentUser()
            axios.get('/fromData').then(({data})=>{
                if(data){
                    this.programs = data.programs;
                    this.categories = data.categories;
                    this.tags = data.tags;
                    }else{
                       this.$router.push({name:'home'});
                    }
            });
        },

        updateSelectedCatetory(category)
        {
            this.subcategory = null;
            this.selectedCategory = (this.categories.filter(val => val.id == category))[0];
        },

        projectUpload()
        {
            this.$Progress.start();
            this.loading = true;
            if(this.project.id != null){
                this.project.submit('post','/editUserProject',{
                     transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }]
                }).then((data)=>{
                    if(data)
                    {
                        var projectIndex = this.$parent.projects.findIndex(obj => obj.id == data.data.id);
                        this.$parent.projects[projectIndex] = data.data;
                        this.project.reset();
                        document.getElementsByClassName('newProjectButton')[0].click();
                        this.$Progress.finish();
                    }
                })
                .catch(()=>{
                        this.$Progress.finish();
                });
            }else{
             
            this.project.submit('post','/userProject', {
                    transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }]
                }).then((data)=>{
                    if(data)
                    {   
                        this.$parent.projects.unshift(data.data);
                        this.projects = this.$parent.projects;
                        this.user.storage = this.user.storage + data.data.size;
                        document.getElementsByClassName('newProjectButton')[0].click();
                        this.clearForm();
                        this.$Progress.finish();
                    }
                })
                .catch(()=>{
                        this.$Progress.finish();

                });
          
            }
            this.loading = null;
        },

        deleteProject(id){
            this.loading = true;
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                axios.get('/deleteProject/'+id)
                .then(({data})=>{
                    if(data){
                        this.user.storage = data-1;
                        $('#deleteConfirm').modal('hide');
                        $('.modal-backdrop').remove();
                        this.$parent.projects = this.$parent.projects.filter( p => p.id !== id );
                        this.projects = this.projects.filter( p => p.id !== id );
                       Toast.fire({
                            icon: 'success',
                            title: 'Deleted successfully'
                        })}
                    
            })
            .catch(({data})=>{
                        Toast.fire({
                            icon: 'error',
                            title: 'Can\'t Be Deleted '
                        });
                });
            }
                })
            this.loading = false;
        },
        removeImg(index){
            this.project.imgs.splice(index,1)
            this.selectedImgs.splice(index,1)
        },
        clickImg(){
           document.getElementById("img").click();
        },

        clickFile(){
           document.getElementById("file").click();
        },

        selectFile (e)
        {
            this.project.file = e.target.files[0];
        },

        selectImg (e)
        {
            var files = Array.from(e.target.files);
            this.selectedImgs = null;
            this.selectedImgs = [];
            if(files){
                this.project.imgs = files;
                var files_count = files.length;
                for (let i=0; i<files_count; i++){
                var reader = new FileReader();
                reader.onload = (e)=>{
                     this.selectedImgs.push(e.target.result);    // HERE
                }
                reader.readAsDataURL(files[i]);
                }
            }
        },

        updateCategory(category)
        {
           if(this.project.category == category){
                this.project.category = null;
            }else{
                this.project.category = category;
            }
            this.updateSelectedCatetory(category);

        },

        updateSubcategory(subcategory)
        {
            if(this.project.subcategory == subcategory){
                this.project.subcategory = null;
            }else{
                this.project.subcategory = subcategory;
            }
        },
        
        updateProgram(program)
        {
            if(this.project.programs.includes(program)){
                this.project.programs = this.project.programs.filter(val => val != program);
            }else{
                this.project.programs.push(program);
            }
        },

        updateTags(tag)
        {
            if(this.project.tags.includes(tag)){
                this.project.tags = this.project.tags.filter(val => val != tag);
            }else{
                this.project.tags.push(tag);
            }
        },

        clearForm()
        {
            console.log('x');
              this.project.reset();
              this.selectedImgs = null;
              document.getElementById('img').value = "";
              document.getElementById('file').value = "";
        },

        editProject(project)
        {
            EventBus.$emit('editProject',project);
        },
        
    },
    mounted(){
         EventBus.$on('updateDashboard', () => {
                this.projects= this.$parent.projects;
          });

          EventBus.$on('editProject', (project) => 
          {     
                document.getElementsByClassName('newProjectButton')[0].click();
                this.project.id = project.id;
                this.project.title = project.title;
                this.project.description  = project.description;
                this.project.type  = project.type == 'free'?false:true;
                this.project.category = project.category.id;
                this.project.subcategory = project.subcategory.id;
                this.project.programs = project.program.map((e) => e = e.id);
                this.project.tags = project.tag.map((e) => e = e.id);  
                this.updateSelectedCatetory(project.category.id);
          });
        this.$Progress.start();
    },
    created(){
        this.formData();
        this.$Progress.finish();
    },
    beforeDestroy() {
    EventBus.$off('editProject');
}
}
</script>

<style>
.errorDiv{
    position: absolute;
    right: 37px;
    top: 7px;
    padding: 1px 3px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.errorDiv span{
    position: relative!important;
    top: 0px!important;
    right: 0px!important;
    margin-right: 2px;
}
.errorDiv:hover .invalid-feedback{
    display: flex;
}
.invalid-feedback{
    margin: 0px!important;
    transition: all .3s linear;
    font-size: 80%;
    color: white;
    border: 1px solid;
    border-radius: 3px;
    padding: 1px 5px;
    background: #dc3545;
    font-weight: 500;
}
    .cardImgDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 300px;
    }
    .cardImgDiv img{
        max-width: 100%;
        max-height: 100%;
    }
    .projectcsp span{
    width: 50%;
    padding: 0px 4px;
    border-radius: 20px;
    margin: 0px 10px 0px 0px;
    display: flex;
    box-shadow: 0 0 20px #1919194a;
    justify-content: center;
    }
    .projectcsp{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 6px 0px;
    }
    .projectcsp span p{
        margin: 0;
    font-weight: 500;
    color: rgba(32, 32, 32, 0.7);
    }
    .projectButtons{
        display: flex;
        justify-content: flex-end;
        padding: 0px 0px 6px 0px;
    }
    .projectButtons button{
        margin: 0px 7px 3px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        border: none;
        background: white;
        box-shadow: 0 0 8px rgba(0,0,0,.3);
        transition: all .2s linear;
    }
    .projectButtons button:hover{
        /* background: rgb(221, 221, 221); */
        box-shadow: 0 0 8px rgba(0,0,0,.6);
    }
    .projectButtons button i{
            padding: 6px 8px;
    }
    .closedFromContainer{
        cursor: pointer;
    }
    .manageProjectContainer{
        position: relative;
        padding: 0px 25px 0px  25px;
        margin-bottom: 10px;
        box-shadow: 0px 0px 20px rgba(0,0,0,.3);
        border-radius: 20px;
        top: 0;
        right: 0;
        background: white;
        transition: all .3s linear;
         animation: newProjectAnimation 3s ease-in-out infinite 0s;
    }
    .manageProjectForm{
        margin: 0px;
        padding: 10px;
        background: white;
        padding-top: 10px;
        display: none;
    }
     .newProjectButton{
        font-size: 31px;
        position: relative;
        left: 94%;
        top: -1px;
        cursor: pointer;
        color: white;
        transition: all .4s linear;
    }
    .newProjectButton i{
        transform: rotate(45deg);
        transition: all .1s linear;

    }
    .manageProjectForm  .col-12{
        padding: 5px 0px;
        margin: 0px!important;
        position: relative;
    }
    .manageProjectForm .optionsTitle{
        margin: 0px;
    }
    .moreOptions {
        font-size: 20px;
    }

    .tags{
        max-height: 250px;
        overflow: auto;
    }
    .openedFormContainer{
        border-radius: 30px;
        margin-bottom: 10px;
        padding-bottom: 37px;
        padding-top: 0px;
        animation: none!important;
    }
   
    .openedFormContainer .newProjectButton i{

        animation: newProjectIAnimation 3s ease-in-out infinite 0s;

        transform:rotate(0deg);
    }
    .error{
        background: rgb(229, 111, 111)!important;
        color: white!important;
        right: 35px!important;
    }
    .formImages{
        display: flex;
    }
    .formImages div{
        position: relative;
        margin: 3px;
    }
    .formImages div:hover span{

        display: flex;
    }
    .formImages div span{
        position: absolute;
        color: white;
        display: none;
        z-index: 2;
        height: 100%;
        width: 100%;
        background: #0000004a;
    }
    .formImages div i{
        position: absolute;
        cursor: pointer;

    right: 0;
    }
    .formImages img{
        width: 50px;
        height: 50px;
        border-radius: 3px;
    }
    @keyframes newProjectIAnimation {
        0% {color: #5680e9}
        50% { color:#8860d0}
        100% {color: #5680e9}

        }
    @media (max-width: 768px) {
        
        .br{
            padding:0px!important;
        }
        .customDropdownList{
            margin: 4px 0px 4px 0px;
             padding: 0px 0px !important;
        }
    }
</style>