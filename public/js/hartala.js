jQuery(document).ready(function ($){
     function RemoveActiveState(className) {
        $('body').find("."+className).removeClass(className);
 }
    function ajaxload(url,fatherdiv,tabactive,id=null,append=null){
        $('.loading').css({"display":"flex"});
        RemoveActiveState(tabactive);
        url = id==null? url: url+"/"+id;
       var jqxhr = $.get(url, function(data) {
          $("."+fatherdiv).fadeOut(3,function(){
              $(this).empty();
              $(this).html(data);
              if(append !== null){
                  $(this).append(append);
              }
              $(this).fadeIn();
          });
        }).done(function() {
        $('.loading').css({'display':'none'});
        return true;
      }).fail(function(data){
        $('.loading').css({'display':'none'})
          alert('Something went wrong!');
          return false;
      });
    }
    
    $('body').on('click','.home',function(){
      ajaxload("home","mainWindow","tabActive");
      $(this).addClass("tabActive");
    });
    $('body').on('click','.users',function(){
        ajaxload("users","mainWindow","tabActive");
        $(this).addClass("tabActive");
       // window.history.pushState('','','users');
    });

    
     $('body').on('click','.projects',function(){
        ajaxload("Projects","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });

    $('body').on('click','.reports ',function(){
        ajaxload("Reports","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });

    $('body').on('click','.votes ',function(){
        ajaxload("votes","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });

    $('body').on('click','.categoryType',function(){
        ajaxload("categoryType","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });

    $('body').on('click','.categories',function(){
        ajaxload("categories","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });

    $('body').on('click','.programs',function(){
        ajaxload("programs","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });

    $('body').on('click','.offers',function(){
        ajaxload("offers","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });

    $('body').on('click','.tags',function(){
        ajaxload("tags","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });

    $('body').on('click','.membership',function(){
        ajaxload("membership","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });
    

    $('body').on('click','.programManage',function(){
        ajaxload("programManage","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    $('body').on('click','.reportsManage',function(){
        ajaxload("reportsManage","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    
    $('body').on('click','.votesManage',function(){
        ajaxload("votesManage","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });

    $('body').on('click','.programStatistics',function(){
        ajaxload("programStatistics","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });

    $('body').on('click','.categoryTypeStati',function(){
        ajaxload("categoryTypeStati","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    
    $('body').on('click','.tagManage',function(){
        ajaxload("tagsManage","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });

    $('body').on('click','.categoryTypeManage',function(){
        ajaxload("categoryTypeManage","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    
    $('body').on('click','.listUserReprots',function(){
        ajaxload("listUserReprots","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    
    $('body').on('click','.listUserVotes',function(){
        ajaxload("listUserVotes","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    
    $('body').on('click','.subCategories',function(){
        ajaxload("subCategories","mainWindow","tabActive");
        $(this).addClass("tabActive");
    });

    
      $('body').on('click','.proStati',function(){
        ajaxload("proStati","projectContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    
    $('body').on('click','.membershipStati',function(){
        ajaxload("membershipStati","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    $('body').on('click','.manageMembership',function(){
        ajaxload("manageMembership","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    
    $('body').on('click','.NavTitlesManage',function(){
        ajaxload("NavTitlesManage","homeContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    
     $('body').on('click','.proSearch',function(){
        ajaxload("proSearch","projectContainer","topNavActive");
        $(this).addClass("topNavActive");
    });
    $('body').on('click','.category',function(){
        $id = $(this).attr('id');
        ajaxload("searchProjectsByCategory","projSearchResultContainer","categoryProActive",$id);
        $(this).addClass("categoryProActive");
    });
    
    $('body').on('click','.searchProjects',function(){
        $token = $(".projectTitle").val();
        ajaxload("searchProjectsByToken","projSearchResultContainer","categoryProActive",$token);
    });

    $('body').on('click','.stati',function(){
      ajaxload("statistics","homeContainer","topNavActive");
      $(this).addClass("topNavActive");
    }); 
    $('body').on('click','.manageProjects',function(){
      ajaxload("manageProjects","projectContainer","topNavActive");
      $(this).addClass("topNavActive");
    });
    
    $('body').on('click','.noti',function(){
        ajaxload("notification","homeContainer","topNavActive");
        $('.mainWindow').find('.noti').addClass("topNavActive");
    });
    $('body').on('click','.emailMessages',function(){
        ajaxload("emailMessages","homeContainer","topNavActive");
        $('.mainWindow').find('.emailMessages').addClass("topNavActive");
    });
    
    $('body').on('click','.notificationIcon',function(){
        ajaxload("home","mainWindow","tabActive");
        $('.home').addClass("tabActive");
        ajaxload("notification","homeContainer","topNavActive");
    });
    
    $('body').on('click','.userSearch',function(){
        ajaxload("userSearch","userContainer","topNavActive");
         $(this).addClass("topNavActive");
    });

    $('body').on('click','.manageAdmins',function(){
        ajaxload("manageAdmins","userContainer","topNavActive");
         $(this).addClass("topNavActive");
    });

    $('body').on('click','.projectsOffers',function(){
        ajaxload("projectsOffers","homeContainer","topNavActive");
         $(this).addClass("topNavActive");
    });
    $('body').on('click','.membershipOffers',function(){
        ajaxload("membershipOffers","homeContainer","topNavActive");
         $(this).addClass("topNavActive");
    });
    $('body').on('click','.searchs',function(){
        ajaxload("searchedUser","searchResualtContainer","null");  
    });
    
    $('body').on('click','.userStati',function(){
        ajaxload("userStatistics","userContainer","topNavActive"); 
         $(this).addClass("topNavActive");
    });
    $('body').on('click','.subCategory',function(){
        $id= $(this).attr('id');
        ajaxload("subCategoryProjects","resultsContainer","subCategoryProActive",$id); 
         $(this).addClass("subCategoryProActive");
    }); 
    
    $('body').on('click','.addproduct',function(){
        ajaxload("addProjectView","projectContainer","topNavActive"); 
         $(this).toggleClass("topNavActive");
    });
    $('body').on('click','.ctgoryStati',function(){
        ajaxload("ctogryStatistics","ctgoryContainer","topNavActive"); 
         $(this).toggleClass("topNavActive");
    });

    $('body').on('click','.reportsStati',function(){
        ajaxload("reportsStati","homeContainer","topNavActive"); 
         $(this).toggleClass("topNavActive");
    });


    
    $('body').on('click','.votesStati',function(){
        ajaxload("votesStati","homeContainer","topNavActive"); 
         $(this).toggleClass("topNavActive");
    });

    $('body').on('click','.manageCtgories',function(){
        ajaxload("manageCtgories","ctgoryContainer","topNavActive"); 
         $(this).toggleClass("topNavActive");
    });
    $('body').on('click','.projectInof',function(){
        $id= $(this).closest('.card').attr('id');
        if(ajaxload("projectInfo","InfoDiv",null,$id)){
            $('.InfoDiv').fadeIn();
        } 
         
    });
    $('body').on('click','.projectOfferInfo',function(){
        $id = $(this).attr('id');
        if(ajaxload("projectOfferInfo","InfoDiv",null,$id)){
            $('.InfoDiv').fadeIn();
        }          
    });
    $('body').on('click','.messageInfo',function(){
        $id = $(this).attr('id');
        if(ajaxload("messageInfo","InfoDiv",null,$id)){
            $('.InfoDiv').css({'background':'rgba(0,0,0,.4)'});
        }          
    });

    $('body').on('click','#addVoteQuestion',function(){
        $input = $('input[name="question"]');
        $('.submitedQuestion').find('.question').html($($input).val());
        $input.val('');
    });

    $('body').on('click','#addVoteAnswer',function(){
        $input = $('input[name="answer"]');
        $tr = `<tr >
        <td><input type="text" value="`+$($input).val()+`" class="form-control" /></td>
        <td><input type='button' class='btn btn-danger delete-report'   value='Delete'/></td>
      </tr>`;
      $('.table-answers').append($tr);
      $input.val('');
        // $('#updateReportOptions').click();
    });
    
    $('body').on('click','.membershipInfo',function(){
        $id = $(this).attr('id');
        if(ajaxload("membershipInfo","InfoDiv",null,$id)){
            $('.InfoDiv').fadeIn();
        }          
    });
    $('body').on('click','.membershipOfferInfo',function(){
        $id = $(this).attr('id');
        if(ajaxload("membershipOfferInfo","InfoDiv",null,$id)){
            $('.InfoDiv').fadeIn();
        } 
    });
    
    $('body').on('click','.deleteMembershipOffer',function(){
        if(confirm("Are you sure you want to delete this Offer?")){
        $id = $(this).attr('id');
        $offer = $(this).closest('tr');
        
        $.ajax({
            url  : "deleteMembershipOffer/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    $offer.fadeOut();
                }else{
                    alert('Something went wrong!');
                }
                    
            }
        })}
    });
    $('body').on('click','.deleteProjectOffer',function(){
        if(confirm("Are you sure you want to delete this Offer?")){
        $id = $(this).attr('id');
        $offer = $(this).closest('tr');
        
        $.ajax({
            url  : "deleteProjectOffer/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    $offer.fadeOut();
                }else{
                    alert('Something went wrong!');
                }
                    
            }
        })}
    });

    $('body').on('click','.ban-admin',function(){
        if(confirm("Are you sure you want to Edit this Admin?")){
        $button = $(this);
        $id = $(this).attr('id');
        $admin = $(this).closest('tr');
        
        $.ajax({
            url  : "deleteAdmin/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response['state'] == 'true'){
                   $button.toggleClass('btn-warning btn-success').val(response['data']);
                }else{
                    alert('Something went wrong!');
                }
                    
            }
        })}
    });

    $('body').on('click','.ToggleProjectsIcon',function(){
        if($(this).hasClass('lessIcon')){
            $('.cardRows').find(".extraProjects").css({'display':'none'});
        }else{
            $('.cardRows').find(".extraProjects").css({'display':'flex'});
        }
        $(this).toggleClass('moreIcon lessIcon');
    });
    $('body').on('click','.form-check-input',function(){
        if($('.premiumProject').is(':checked')){
            $("#projectPrice").prop("disabled",false)
        }else{
            $("#projectPrice").prop("disabled",true).val(null);
        }
    });
    $('body').on('click','.sub_category',function(){
        $category = $(this).closest('.ctgory');
        $id = $category.attr('id');
        $.ajax({
            url  : "getSubCategories/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
              if(response != 'false'){
            $subCategoriesRows ='';
            jQuery.each(response, function( i, subc ) {
                $subCategoriesRows += "<tr id='"+subc.id+"'> <td><input type='text' class='form-control' value='"+subc.title+"'/></td><td><input type='button' class='btn btn-primary update-subc' id='"+subc.id+"' value='Edit'/></td><td><input type='button' class='btn btn-danger delete-subc' id='"+subc.id+"' value='Delete'/></td></tr>";
            });
             $('.subCaegoriesTable').empty().append($subCategoriesRows);
              }else{
                  return false;
              }
            }
    });
    $('.SubCategories').attr('id',$id);
        $('.SubCategories').find('h4').html($category.find('h5').html());
        $('.SubCategories').slideDown().css({'display':'flex'}) ;
    });

    $('body').on('submit','#submitCategory',function(event){
        event.preventDefault();
        $form = $(this);
        $form.find('button').attr('disabled',true).html('<div class="spinner-grow spinner-border-sm" role="status"><span class="sr-only"></span></div>');
        $.ajax({
         url:"addCategory",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(data)
         {
            $form.siblings('.notificationsDiv').empty().fadeOut();
            $test = $(".topNavActive");
            ajaxload("manageCtgories","ctgoryContainer","topNavActive"); 
            ($test).toggleClass("topNavActive");
         },
         error:function(response){
            $form.find('button').attr('disabled',false).html('Submit')
             $('.loading').css({'display':'none'});
             $errors ='';
             jQuery.each(response['responseJSON']['errors'], function( i, error ) 
             {
                 $errors += "<li> "+ error +" </li>";
             });
             $form.siblings('.notificationsDiv').removeClass('success').addClass('error')
                                                          .html($errors).fadeIn().css({'display':'flex'});
         }
        });
       
    });
    

    $('body').on('submit','.emailForm',function(event){
        event.preventDefault();
        $form = $(this);
        $form.find('button').attr('disabled',true).html('<div class="spinner-grow spinner-border-sm" role="status"><span class="sr-only"></span></div>');
        $.ajax({
         url:"addMessage",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         { $('.notificationsDiv').empty().hide();
             if(response['state'] == "true"){
            $form.find('button').attr('disabled',false).html('Submit');
             if (response['find'] != "true"){
                $row = "<tr id='"+response['id']+"'> <td><p>"+response['for']+"</p></td><td><p>"+response['title']+"</p></td><td><input type='button' class='btn btn-primary messageInfo' id='"+response['id']+"' value='info'/></td></tr>"
                $(".messagesTable").append($row);
                $form.find('input').val('');
                $form.find('textarea').val('');
             }
            }else{
                alert("Something went wrong");
                $form.find('button').attr('disabled',false).html('Submit');
            }
        },
        error:function(response){
            $form.find('button').attr('disabled',false).html('Submit');
            $('.loading').css({'display':'none'});
            $errors ='';
            jQuery.each(response['responseJSON']['errors'], function( i, error ) 
            {
                //$form.find('input[name="'+i+'"]').css({'border':'1px solid rgb(252, 0, 0,.2)'});
                $errors += "<li> "+ error +" </li>";
            });
            $form.siblings('.notificationsDiv').addClass('error')
                                                         .html($errors).fadeIn().css({'display':'flex'});
        }
        });
        
       
    });

    $('body').on('submit','.projectOfferForm',function(event){
        event.preventDefault();
        $form = $(this);
        $.ajax({
         url:"addProjectOffer",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         { if(response['state'] == "true"){
             if (response['find'] == "true"){
                 alert("Edited Successfuly");
             }else{
            $row = "<tr id='"+response['id']+"'> <td><p>"+response['title']+"</p></td><td><p>"+response['discount']+"</p></td><td><input type='button' class='btn btn-primary offerInfo' id='"+response['id']+"' value='info'/><input type='button' class='btn btn-danger deleteOffer' id='"+response['id']+"' value='Delete'/></td></tr>"
            $(".ProjectsOffersTable tr:first").before($row);
            $form.find('input').val('');
            $form.find('textarea').val('');
            alert('Done!');
             }
            }else{
                alert("Something went wrong");
            }
        }
        });
    });
    $('body').on('click','#updateVoting',function(){
        $voting = Array();
        $question = $('.submitedQuestion').find('.question').html();
        $voting.push($question);
         $('.table-answers').find('tbody').find('.form-control').each(function(i,input){
             $voting.push($(input).val())
        })
        console.log($voting)
        $voting = JSON.stringify($voting);
        // var data = new FormData();
        // data.append('options','$options')
        // console.log(data);
        $.ajax({
         url:"/UpdateVoting/"+$voting,
         method:"get",
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         { if(response==true){
                 alert("Edited Successfuly");
         }
         else{
            alert("failed Successfuly");
             }
        }
    })
});

        $('body').on('click','#updateReportOptions',function(){
            $optionList = Array();
             $('.reprotsTable').find('.form-control').each(function(i,input){
                 $optionList.push($(input).val())
            })
            $options = JSON.stringify($optionList);
            // var data = new FormData();
            // data.append('options','$options')
            // console.log(data);
            $.ajax({
             url:"/UpdateReportsOptions/"+$options,
             method:"get",
             dataType:'JSON',
             contentType: false,
             cache: false,
             processData: false,
             success:function(response)
             { if(response==true){
                     alert("Edited Successfuly");
             }
             else{
                alert("failed Successfuly");
                 }
            }
        })
    });
    $('body').on('submit','.membershipOfferForm',function(event){
        event.preventDefault();
        $form = $(this);
        $.ajax({
         url:"addMembershipOffer",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response){
             if(response['state'] == "true"){
             if (response['find'] == "true"){
                 alert("Edited Successfuly");
             }else{
            $row = "<tr id='"+response['id']+"'> <td><p>"+response['title']+"</p></td><td><p>"+response['discount']+"</p></td><td><input type='button' class='btn btn-primary offerInfo' id='"+response['id']+"' value='info'/><input type='button' class='btn btn-danger deleteMembershipOffer' id='"+response['id']+"' value='Delete'/></td></tr>"
            $(".membershipOffersTable tr:first").before($row);
            $form.find('input').val('');
            $form.find('textarea').val('');
            alert('Done!');
             }
            }else{
                alert("Something went wrong");
            }
        }
        });
        
       
    });

    $('body').on('submit','#add_admin',function(event){
        event.preventDefault();
        $.ajax({
         url:"addAdmin",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         {
             if(response['state'] == 'true'){
                ajaxload("manageAdmins","userContainer","topNavAxctive");
             }else{
                 alert(response['data']);
             }
           
         }
        });
    });
    $('body').on('submit','#add_program_form',function(event){
        event.preventDefault();
        $.ajax({
         url:"addProgram",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         {
             if(response == 'true'){
                $test = $(".topNavActive");
                ajaxload("programManage","homeContainer","topNavActive"); 
                ($test).toggleClass("topNavActive");
             }else{
                 alert('not Added');
             }
           
         }
        });
       
    });
    $('body').on('submit','#add_tag_form',function(event){
        event.preventDefault();
        $.ajax({
         url:"addTag",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         {
             if(response == 'true'){
                $test = $(".topNavActive");
                ajaxload("tagsManage","homeContainer","topNavActive"); 
                ($test).toggleClass("topNavActive");
             }else{
                 alert('not Added');
             }
           
         }
        });
       
    });

    $('body').on('submit','#add_categoryType_form',function(event){
        event.preventDefault();
        $.ajax({
         url:"addcategoryType",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         {
             if(response == 'true'){
                $test = $(".topNavActive");
                ajaxload("categoryTypeManage","homeContainer","topNavActive"); 
                ($test).toggleClass("topNavActive");
             }else{
                 alert('not Added');
             }
           
         }
        });
       
    });
    

    $('body').on('submit','#add_NavTitle_form',function(event){
        event.preventDefault();
        $.ajax({
         url:"addNavTitle",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         {
             if(response == 'true'){
                $test = $(".topNavActive");
                ajaxload("NavTitlesManage","homeContainer","topNavActive"); 
                ($test).toggleClass("topNavActive");
             }else{
                 alert('not Added');
             }
           
         }
        });
       
    });

    
    $('body').on('submit','#add_report_form',function(event){
        event.preventDefault();
        $.ajax({
         url:"UpdateReportsOptions",
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         {
             if(response == 'true'){
                $test = $(".topNavActive");
                ajaxload("tagsManage","homeContainer","topNavActive"); 
                ($test).toggleClass("topNavActive");
             }else{
                 alert('not Added');
             }
           
         }
        });
       
    });
    $('body').on('click','.delete_category',function(){
        if(confirm("Are you sure you want to update this Category?")){

        $Category= $(this).closest('.ctgory');
        $cid = $Category.attr('id');
        $Category.fadeOut();
        $.ajax({
            url  : "deleteCategory/"+$cid,
            type : "get",
            dataType : 'JSON',
            success:function(response){
              
            }
        })}
    });
    
    $('body').on('click','.edit_program',function(){
        $id = $(this).closest('.program').attr('id');
        $(".editForm").find('form').find('input[name="id"]').attr('value',$id);
       $(".editForm").slideDown().css({'display':'flex'});
    });

    $('body').on('click','.searchTag',function(){
       $input = $(this).siblings('input')
        $token = $input.val();
        if($token != ''){
            $ul = $input.parent().siblings('ul');
            $li = $input.parent().siblings('ul').find('li').each(function(i,li){
                if($(li).find('p').text() == $token){
                    $(li).css({'background-color':'wheat'});
                    setTimeout( function() {
                        $(li).css({'background-color':'white'});
                   }, 500);
                    $ul.find('li:first').before($(li));
                }
                
            });
        } 
    });

    $('body').on('click','.editCategory',function(){
        $button = $(this);
        $button.attr('disabled',true);
        $id = $(this).closest('.ctgory').attr('id');
        ajaxload('categoryInfo','editForm','x',$id);
        //$(".editForm").find('form').find('input[name="id"]').attr('value',$id);
        $('.editForm').css({'display':'flex'});
        $button.attr('disabled',false);
    });

    $('body').on('click','.update-tag',function(){
        $id = $(this).attr('id');
        $title = $(this).closest('tr').find('.form-control').val();
        $.ajax({
            url  : "editTag/"+$id+"/"+$title,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    alert('Tag Updated Successfuly');
                }else{
                    alert('Something went wrong!');
                }
            }
        });
    });

    $('body').on('click','.update-NavTitle',function(){
        $id = $(this).attr('id');
        $title = $(this).closest('tr').find('.form-control').val();
        $.ajax({
            url  : "editNavTitle/"+$id+"/"+$title,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    alert('Tag Updated Successfuly');
                }else{
                    alert('Something went wrong!');
                }
            }
        });
    });
    
    $('body').on('click','.update-categoryType',function(){
        $id = $(this).attr('id');
        $title = $(this).closest('tr').find('.form-control').val();
        $.ajax({
            url  : "editcategoryType/"+$id+"/"+$title,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    alert('Tag Updated Successfuly');
                }else{
                    alert('Something went wrong!');
                }
            }
        });
    });
    
    $('body').on('click','.delete-categoryType',function(){
        if(confirm("Are you sure you want to update this Category Type?")){

        $id= $(this).attr('id');
        $row = $(this).closest('tr');
        $.ajax({
            url  : "deletecategoryType/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    $row.fadeOut();
                }else{
                    alert('Something went wrong!');
                }
          
            }
        })}
    });

    $('body').on('click','.delete-NavTitle',function(){
        if(confirm("Are you sure you want to update this Link Title?")){

        $id= $(this).attr('id');
        $row = $(this).closest('tr');
        $.ajax({
            url  : "deleteNavTitle/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    $row.fadeOut();
                }else{
                    alert('Something went wrong!');
                }
          
            }
        })}
    });
    

    
    $('body').on('click','.delete-tag',function(){
        if(confirm("Are you sure you want to update this Tag?")){

        $id= $(this).attr('id');
        $row = $(this).closest('tr');
        $.ajax({
            url  : "deleteTag/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    $row.fadeOut();
                }else{
                    alert('Something went wrong!');
                }
          
            }
        })}
    });

    $('body').on('click','.delete-report',function(){
        $(this).closest('tr').remove();
    });

    $('body').on('click','.delete-voteAnswer',function(){
        $this = $(this);
        if(confirm('Do you need to Remove this Answer')){
            $id = $(this).attr('id');
            $.ajax({
                url  : "/deleteAnswer/"+$id,
                type : "get",
                dataType : 'JSON',
                success:function(response){
                    if(response == true){
                        $($this).closest('tr').remove();
                        $('#updateVoting').click();
                    }else{
                        alert('Something went wrong');
                    }
                }
            });
            
        }
    });
    
    $('body').on('click','#addReportMessage',function(){
        $value = $(this).closest('.colContainer').find('input').val();
        $tr = `<tr >
        <td><input type="text" value="`+$value+`" class="form-control" /></td>
        <td><input type='button' class='btn btn-danger delete-report'   value='Delete'/></td>
      </tr>`;
      $('.table-reports').append($tr);
        $('#updateReportOptions').click();

    });
    $('body').on('click','.fadeOut',function(){
        $(this).parent().slideUp();
     });
    

     $('body').on('submit','#update_form',function(event){
        event.preventDefault();
        $.ajax({
         url:"editCategory",
         method:"POST",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(data)
         {
             if(data == "true"){
                $test = $(".topNavActive");
                ajaxload("manageCtgories","ctgoryContainer","topNavActive"); 
                ($test).toggleClass("topNavActive");
             }else{
                 alert('gns');
             }
            
         }
        });
       
    });

    $('body').on('submit','#update_program_form',function(event){
        event.preventDefault();
        $.ajax({
         url:"editProgram",
         method:"POST",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(data)
         {
             if(data == "true"){
                $test = $(".topNavActive");
                ajaxload("programManage","homeContainer","topNavActive"); 
                ($test).toggleClass("topNavActive");
             }else{
                 alert('gns');
             }
            
         }
        });
       
    });

    
    $('body').on('submit','#subCategory_form',function(event){
        $input = $(this).find("input[name='title']");
        event.preventDefault();
        $id = $('.SubCategories').attr('id');
        $.ajax({
         url:"addSubcategory/"+$id,
         method:"post",
         data:new FormData(this),
         dataType:'JSON',
         contentType: false,
         cache: false,
         processData: false,
         success:function(response)
         {
            if(response['state'] == 'true'){
                $row = "<tr id='"+response['id']+"'> <td><input type='text' class='form-control' value='"+response['title']+"'/></td><td><input type='button' class='btn btn-primary update-subc' id='"+response['id']+"' value='Edit'/></td><td><input type='button' class='btn btn-danger delete-subc' id='"+response['id']+"' value='Delete'/></td></tr>";
                $('.subCaegoriesTable').append($row);
                $input.val(null);
                alert('Done!');
            }else{
                alert('something wrong');
            }
         }
        });
    });

    
    

    $('body').on('click','.update-subc',function(){
        $id = $(this).attr('id');
        $title = $(this).closest('tr').find('.form-control').val();
        $.ajax({
            url  : "editSubCategories/"+$id+"/"+$title,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    alert('Subcategory Updated Successfuly');
                }else{
                    console.log(response);
                    alert('Something went wrong!');
                }
            }
        });
    });

    $("body").on('click','.searchProjectIcon',function(){
        $name =  $(this).siblings('input').val();
        $list = $(".projectSearchResult");
        $.ajax({
            url  : "searchProject/"+$name,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response['state'] == 'true'){
                    $list.empty();
                    $.each(response['projects'],function(i,project){
                        $list.append("<li> <input type='checkbox' path='"+project.path+'/'+project.img+"' price='"+project.price+"' id='"+project.id+"' class='addProjectToOffer'>"+project.title+"</li>").slideDown();
                    });
                }else{
                    $list.empty().append("<li>no matches</li>").slideDown();
                }
            }
        });
    });

    $("body").on('click','.searchMembershipIcon',function(){
        $token =  $(this).siblings('input').val();
        $list = $(".membershipSearchResult");
        $.ajax({
            url  : "searchMembership/"+$token,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response['state'] == 'true'){
                    $list.empty();
                    $.each(response['memberships'],function(i,membership){
                        $list.append("<li> <input type='checkbox'  price='"+membership.cost+"' id='"+membership.id+"' class='addMembershipToOffer'>"+membership.title+"</li>").slideDown();
                    });
                }else{
                    $list.empty().append("<li>no matches</li>").slideDown();
                }
            }
        });
    });

    
    $('body').on('click','.addProjectToOffer',function(){
        $projcet = $(this);
        $offerDisCount = $('.discount').val();
            if(confirm('project price will be '+(parseInt($(this).attr('price')) *(parseInt($offerDisCount)/100) )+"$")){
                $projectId = $(this).attr('id');
                $offerId = $('.offerDetialsDiv').attr('id');
                $.ajax({
                    url  : "addOfferToProject/"+$projectId+"/"+$offerId,
                    type : "get",
                    dataType : 'JSON',
                    success:function(response){
                        if(response == 'true'){
                            $img = $projcet.attr('path');
                            $title= $projcet.closest('li').text();
                            $projcet.closest('li').remove();
                            $('.circlesDiv').append("<li  id='"+$projectId+"'><i class='far fa-times-circle removeProjectFromOffer'></i><img src='"+$img+"'/><p>"+$title+"</p></li>"); 
                        }else{
                            alert('Something went wrong');
                        }
                    }
                });
                
            }
    });

    
    $('body').on('click','.addMembershipToOffer',function(){
        $membership = $(this);
        $offerDisCount = $('.discount').val();
            if(confirm('Membership price will be '+(parseInt($(this).attr('price')) *(parseInt($offerDisCount)/100) )+"$")){
                $membershipId = $(this).attr('id');
                $offerId = $('.offerDetialsDiv').attr('id');
                $.ajax({
                    url  : "addMembershipToOffer/"+$membershipId+"/"+$offerId,
                    type : "get",
                    dataType : 'JSON',
                    success:function(response){
                        if(response == 'true'){
                            $title= $membership.closest('li').text();
                            $membership.closest('li').remove();
                            $('.circlesDiv').append("<li  id='"+$membershipId+"'><i class='far fa-times-circle removeMembershipFromOffer'></i><p>"+$title+"</p></li>"); 
                        }else{
                            alert('Something went wrong');
                        }
                    }
                });
                
            }
    });

    
    $('body').on('click','.removeMembershipFromOffer',function(){
        $membership = $(this).closest('li');
        $membershipId = $membership.attr('id');
        if(confirm('Are you sure! this can not be undone')){
            $.ajax({
                url  : "removeMembershipFromOffer/"+$membershipId,
                type : "get",
                dataType : 'JSON',
                success:function(response){
                    if(response == 'true'){
                        $membership.fadeOut();
                    }else{
                        alert('Something went wrong');
                    }
                }
            });
        }
        
         
         });
    $('body').on('click','.removeProjectFromOffer',function(){
        $projcet = $(this).closest('li');
        $projectId = $projcet.attr('id');
        if(confirm('Are you sure! this can not be undone')){
            $.ajax({
                url  : "removeOfferToProject/"+$projectId,
                type : "get",
                dataType : 'JSON',
                success:function(response){
                    if(response == 'true'){
                        $projcet.fadeOut();
                    }else{
                        alert('Something went wrong');
                    }
                }
            });
        }
        
         
         });
    $('body').on('click','.delete-subc',function(){
        if(confirm("Are you sure you want to update this SubCategory?")){

        $id= $(this).attr('id');
        $row = $(this).closest('tr');
        $.ajax({
            url  : "deleteSubcategory/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                if(response == 'true'){
                    $row.fadeOut();
                }else{
                    alert('Something went wrong!');
                }
          
            }
        })}
    });

    $('body').on('click','.delete_program',function(){
        if(confirm("Are you sure you want to update this Program?")){

        $program= $(this).closest('.program');
        $id = $program.attr('id');
        $program.fadeOut();
        $.ajax({
            url  : "deleteProgram/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
              
            }
        })}
    });

    $('body').on('click','.activeState',function(){
        $num = 10;
        $actual = 0;
        $seeMore = false;
        if ($(".num").length === 1){
          $actual =  $(".num").val();
          $num = parseInt($actual)+10;
          $seeMore = true;
        }
        if(!$seeMore){
            $buttons = "<input class='num' value='"+$num+"' type='hidden'/><input type='button' class='btn btn-primary activeState' value='Show More'/>";
            ajaxload("activeProjects/"+$actual,'projSearchResultContainer','activeProjects',null,$buttons);
            $('.activeState').addClass('activeProjects');
        }else{
            var jqxhr = $.get("activeProjects/"+$actual, function(data) {
                $('.cardRows:last').append(data);
                $('.num').val($num);
              }).done(function() {
             
            }).fail(function(data){
             
            });
        }
       
    });
    $('body').on('click','.pendingState',function(){
        $num = 10;
        $actual = 0;
        $seeMore = false;
        if ($(".num1").length === 1){
          $actual =  $(".num1").val();
          $num = parseInt($actual)+10;
          $seeMore = true;
        }
        if(!$seeMore){
            $buttons = "<input class='num1' value='"+$num+"' type='hidden'/><input type='button' class='btn btn-primary pendingState' value='Show More'/>";
            ajaxload("pendingProjects/"+$actual,'projSearchResultContainer','activeProjects',null,$buttons);
            $('.pendingState').addClass('activeProjects');
        }else{
            var jqxhr = $.get("pendingProjects/"+$actual, function(data) {
                $('.cardRows:last').append(data);
                $('.num1').val($num);
              }).done(function() {
             
            }).fail(function(data){
             
            });
        }
       
    });
    $('body').on('click','.rejectedState',function(){
        $num = 10;
        $actual = 0;
        $seeMore = false;
        if ($(".num2").length === 1){
          $actual =  $(".num2").val();
          $num = parseInt($actual)+10;
          $seeMore = true;
        }
        if(!$seeMore){
            $buttons = "<input class='num2' value='"+$num+"' type='hidden'/><input type='button' class='btn btn-primary rejectedState' value='Show More'/>";
            ajaxload("rejectedProjects/"+$actual,'projSearchResultContainer','activeProjects',null,$buttons);
            $('.rejectedState').addClass('activeProjects');
        }else{
            var jqxhr = $.get("rejectedProjects/"+$actual, function(data) {
                $('.cardRows:last').append(data);
                $('.num2').val($num);
              }).done(function() {
             
            }).fail(function(data){
             
            });
        }
       
    });
    $('body').on('click','.deleteProject',function(){
        if(confirm("Are you sure you want to Delete this Project?")){

        $card= $(this).closest('.card');
        $id = $card.attr('id');
        $.ajax({
            url  : "deleteProject/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
                $card.fadeOut();
            }
        })}
    });

    $('body').on('click','.approveProject',function(){
        if(confirm("Are you sure you want to approve this Project?")){
        $button =  $(this);
        $button.attr('disabled',true)
        $card= $(this).closest('.card');
        $state = $card.find('.state');
        $card.find('.loadingIcon').css({'display':'inline'});
        $id = $card.attr('id');
        $.ajax({
            url  : "approveProject/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
              if (response['state'] == "true"){
                  $card.find('.state').remove();
                  $card.append("<div class='appeovedProject state'><div class='loadingIcon'></div></div>");
                  $card.find('.approveProject').attr('disabled',true);
                  $card.find('.banProject').attr('disabled',false);
                  $card.find('.rejectProject').attr('disabled',false);
                  if(response['mail']==false){
                    alert('Action toke place successfully, but Something went wrong with sending email, So user will be notified from website notificaitions.');
                  }
              }else{
                $button.attr('disabled',false);
                alert('Something went wrong!.');
              }
            }
        }
        )}
    });

    $('body').on('click','.submitPrice',function(){
        $div= $(this).closest('.projectDetialsDiv');
        $id = $div.attr('id');
        $price = $div.find(".price").val();
        alert($price);
        $.ajax({
            url  : "submitPrice/"+$id+"/"+$price,
            type : "get",
            dataType : 'JSON',
            success:function(response){
              if (response == "true"){
                  alert("done");
              }
            }
        }
        )
    });
    
    $('body').on('click','.banProject',function() {
        if(confirm("Are you sure you want to Ban this Project?")){
            $button =  $(this);
            $button.attr('disabled',true)
            $card= $(this).closest('.card');
            $state = $card.find('.state');
            $card.find('.loadingIcon').css({'display':'inline'});
            $id = $card.attr('id');
        $.ajax({
            url  : "banProject/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
              if (response['state'] == "true"){
                  $card.find('.state').remove();
                  $card.append("<div class='bannedProject state'><div class='loadingIcon'></div></div>");
                  $card.find('.approveProject').attr('disabled',false);
                  $card.find('.banProject').attr('disabled',true);
                  $card.find('.rejectProject').attr('disabled',false);
                  if(response['mail']==false){
                    alert('Action toke place successfully, but Something went wrong with sending email, So user will be notified from website notificaitions.');
                  }
              }else{
                  $button.attr('disabled',false);
                  alert('Something went wrong!.');
              }
            }
        })}
    });
    
    $('body').on('click','.rejectProject',function() {
        if(confirm("Are you sure you want to Reejct this Project?")){
            $button =  $(this);
            $button.attr('disabled',true)
            $card= $(this).closest('.card');
            $state = $card.find('.state');
            $card.find('.loadingIcon').css({'display':'inline'});
            $id = $card.attr('id');
        $.ajax({
            url  : "rejectProject/"+$id,
            type : "get",
            dataType : 'JSON',
            success:function(response){
              if (response['state'] == "true"){
                  $card.find('.state').remove();
                  $card.append("<div class='rejectedProject state'><div class='loadingIcon'></div></div>");
                  $card.find('.approveProject').attr('disabled',false);
                  $card.find('.banProject').attr('disabled',false);
                  $card.find('.rejectProject').attr('disabled',true);
                  if(response['mail']==false){
                    alert('Action toke place successfully, but Something went wrong with sending email, So user will be notified from website notificaitions.');
                  }
              }else{
                $button.attr('disabled',false);
                alert('Something went wrong!.');
              }
            }
        })}
    });
    

    
    $("body").on("change","#categoryList",function(){
        $categoryID = $(this).children(":selected").attr("value");
        if($categoryID){
        $subCategoryList = $('#subCategoryList');
        $('#subCategoryList').find('option').not(':first').remove();
        $.ajax({
        url: 'getSubCategories/'+$categoryID,
        type: 'get',
        dataType: 'json',
        success: function(response)
       {
        $subc ="";
           if(response)
            { 
                $subCategoryList.css({'background-color':'wheat'});
                setTimeout( function() {
                    $subCategoryList.css({'background-color':'white'});
               }, 500);
               $.each(response,function(i,sc){
                   $subc+="<option  value='"+sc.id+"'>"+sc.title+"</option>";
               });
                $subCategoryList.append($subc);
                   
           }
              
            else{
                alert('Something went wrong!');
            }
        }
    
       });
    }else{
        $('#subCategoryList').find('option').not(':first').remove();
    }
   });
   $("body").on("submit","#projectFormContainer",function(event){
         $('.loading').css({"display":"flex"});
         $form = $(this);
       event.preventDefault();
      $.ajax({
        url:"addProject",
        method:"post",
        data:new FormData(this),
        dataType:'JSON',
        contentType: false,
        cache: false,
        processData: false,
        success:function(response)
        {
            if(response == 'true'){
                $('.loading').css({'display':'none'});
                $('.notificationsDiv').removeClass('error').addClass('success')
                .html('<li>Project Added Successfully!</li>');
                
               /* .setTimeout(500,function(this){
                    $(this).fadeOut();
                });*/
            }
            /*if(response == 'true'){
               $test = $(".topNavActive");
               ajaxload("tagsManage","homeContainer","topNavActive"); 
               ($test).toggleClass("topNavActive");
            }else{
                alert('not Added');
            }*/
          
        },
        error:function(response){
            $('.loading').css({'display':'none'});
            $errors ='';
            jQuery.each(response['responseJSON']['errors'], function( i, error ) 
            {
                //$form.find('input[name="'+i+'"]').css({'border':'1px solid rgb(252, 0, 0,.2)'});
                $errors += "<li> "+ error +" </li>";
            });
            $('.notificationsDiv').removeClass('success').addClass('error')
                                                         .html($errors).fadeIn().css({'display':'flex'});
        }
       });

});
$("body").on("click",".MembershipState",function(){
    $val = $(this).val();
    $(this).val($val=="0"?"1":"0");
});
$("body").on("click",".editMembershipState",function(){
    $button = $(this);
    $val = $(this).val();
    $newVal = $val=="0"?"1":"0";
    $(this).val($newVal);
    $id = $(this).closest('tr').attr('id');
    
    $.ajax({
        url: 'editMembershipState/'+$id+'/'+$newVal,
        type: 'get',
        dataType: 'json',
        success: function(response)
       {
           if (response != 'true'){
               alert("Something Went Wrong");
                $button.prop('checked',$val==0?false:true).val($val);
           }
       }
    })
});
$('body').on('click','.changeImageIcon',function(){
    $('#profile-image-upload').click();
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#pp').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }else{
        alert('fuck');
    }
}
$('body').on('change','#profile-image-upload',function(){
    $('.ppform').submit();
});
$("body").on("submit",".ppform",function(event){
    event.preventDefault();
    
    $.ajax({
        url:"changeAdminPP",
        method:"post",
        data:new FormData(this),
        dataType:'JSON',
        contentType: false,
        cache: false,
        processData: false,
        success:function(response){
            if(response =="true")
            {
                /*if ($("#profile-image-upload").files && $("#profile-image-upload").files[0])
                {
                    var reader = new FileReader();
                    reader.onload = function (e){
                        $('#pp').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(input.files[0]);
                    alert('fuck');
                }*/
                alert('updated successfully!');
            }else{
                alert('Something went wrong!');
            }
          
        },
        error:function(){
            alert('Something went wrong!');
        }
    });
});
$("body").on("submit","#membershipForm",function(event){
 $('.loading').css({"display":"flex"});
 $form = $(this);
 event.preventDefault();
 $.ajax({
   url:"addMembership",
   method:"post",
   data:new FormData(this),
   dataType:'JSON',
   contentType: false,
   cache: false,
   processData: false,
   success:function(response)
   {
    $('.loading').css({'display':'none'});
       if(response['state'] == 'true'){
           if(response['find']== 'true'){
            alert('Edited Successfully!');
           }else{
            ajaxload("manageMembership","homeContainer","x");
           }
       }else{
        alert('Something went wrong!')
       }
   },
   error:function(response){
    $('.loading').css({'display':'none'});
       if(response['responseJSON']['errors']){
       $errors ='';
       jQuery.each(response['responseJSON']['errors'], function( i, error ) 
       {
           //$form.find('input[name="'+i+'"]').css({'border':'1px solid rgb(252, 0, 0,.2)'});
           $errors += "<li> "+ error +" </li>";
       });
       $('.notificationsDiv').removeClass('success').addClass('error')
                                                    .html($errors).fadeIn().css({'display':'flex'});
        }else{
            alert('Something went wrong!');
        }
}
  });

});

 /* get values of checked checkboxes
       $tags = $("input:checkbox[name=tags]:checked").map(function(){
        return parseInt(this.value);
      }).get();
      $programs = $("input:checkbox[name=programs]:checked").map(function(){
        return parseInt(this.value);
      }).get();*/
})
