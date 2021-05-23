jQuery(document).ready(function ($){
    
    $lastHeight = $( window ).height();

    $(window).scroll(function() {
        if ($(this).scrollTop() >= $( window ).height()*0.3) {
          $('.homeSearchBox').css({'position':'fixed','top':'9px'});
          $('.navbar').removeClass('navbar-dark bg-dark').addClass("navbar-dark bg-primary");
        }else{
          $('.homeSearchBox').css({'position':'absolute','top':''});
          $('.navbar').addClass('navbar-dark bg-dark').removeClass("navbar-light");
        }
        if($(this).scrollTop() <= $lastHeight){
            $('.homeTabs').removeClass('hideTabs').addClass('showTabs').css({'display':'flex'});
        }else{
            $('.homeTabs').removeClass('showTabs').addClass('hideTabs').css({'display':'none'});
        }
        $lastHeight = $(this).scrollTop();
    });
  
    $('body').on('click','.more',(function(){
        $(this).find('i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up')
        $('.dashboardTabs').slideToggle(100).css({'display':'flex'});
    }));

    $('body').on('focusin','.searchBox',(function(){
        $('searchOptionsBox').find('dropList').slideUp(1);
        $('.searchOptionsBox').slideDown();
        $('.trickDiv').fadeIn(1);   
    }));

    $('body').on('click','.filter',(function(){
        $('searchOptionsBox').find('dropList').slideUp(1);
        $('.searchOptionsBox').slideToggle();
        $('.trickDiv').fadeToggle(1);   
    }));

    $('body').on('click','.trickDiv',(function(){
            $('.dropList').slideUp();
            $('.searchOptionsBox').slideUp();
            $('.trickDiv').fadeOut();
    }));

    $('body').on('click','.optionsTitle',function(){
        $selected = $(this).parent('.customDropdownList').find('.dropList');
        $('.dropList').not($selected).slideUp(300);
        $selected.slideToggle(300);
    });  

    $('body').on('click','.closeWindow',function(){
        $('.Window').css({'diplay':'none'});
        window.history.back();
    });  

    $('body').on('click','.copy',function(){
        $button =$(this);
        var dummy = document.createElement('input');
        text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
       $button.attr('data-before','Copied!')
       setTimeout(function(){
        $button.attr('data-before','Copy') 
       },1000)
    });

    $('body').on('change','.searchTagsInput',function(){
            search();
     });

    $('body').on('click','.closedFromContainer',function(){
        $(this).addClass('openedFormContainer').removeClass('closedFromContainer');
        $('.searchTagsInput').val('');
    $('.manageProjectForm').slideDown(300);
    });

    $('body').on('click','.fa-ellipsis-h',function(){
        $(this).parent('.moreOptions').find('ul').slideToggle();
    });

    $('body').on('click','.newProjectButton',function(){
        $('.manageProjectForm').slideToggle(300);
        $('.searchTagsInput').val('') ;
        $('.manageProjectContainer').toggleClass('openedFormContainer closedFromContainer');
        $(".rcontainer").animate( 
            { scrollTop: "0" }, 500);
        $('.dropList').slideUp();
    });
 
    $('body').on('click','.newProjectTrickButton',function(){
        $('.newProjectButton').click();
        setTimeout(()=>{
            $('.rcontainer').find('.newProjectButton').click()

        },100);
    });

    $('body').on('click','.searchTag',function(){
        search();
    });

    $('body').on('keyup','.searchTagsInput',function(){
        search();
    });

    function search(){
    $input = $('.searchTagsInput');
    $token = $input.val();
    if($token != ''){
        $ul = $input.parent().siblings('ul');
        $li = $input.parent().siblings('ul').find('li').each(function(i,li){
            if($(li).find('p').text().match($token)){
                $(li).css({'background-color':'wheat'});
                setTimeout( function() {
                    $(li).css({'background-color':'white'});
                }, 500);
                $ul.find('li:first').before($(li));
            }
            
        });
    } 
    }
     
    $('body').on('keyup','.searchInput',function(){
        $token = $(this).val();
        $parent = $('.searchOptionsBoxRow');
        if($token != ''){
            $parent.find('li').each(function(i,li){
                if($(li).find('p').text().match($token)){
                    $parent.find('li:first').before($(li));
                    $(li).css({'background-color':'rgb(0, 84, 130)'});
                    setTimeout( function() {
                        $(li).css({'background-color':'rgb(90, 185, 237)'});
                   }, 500);
                }
            })
        }
    });

    $('body').on('click','#deleteCoverButton',function(){
        $('#deleteConfirm').find('.modal-body').find('h6').text('Delete Cover!'); 
    });

    $('body').on('click','#deleteImgButton',function(){
        $('#deleteConfirm').find('.modal-body').find('h6').text('Delete Profile Picture!'); 
    });
    
    $('body').on('click', '.showAuthButtons',function(){
        $('.authButtons').css({'right':'3px'});
        $(this).removeClass('showAuthButtons').addClass('hideAuthButtons');
    });

    $('body').on('click', '.hideAuthButtons',function(){
        console.log('clicked');
        $('.authButtons').css({'right':'-143px'});
        $(this).removeClass('hideAuthButtons').addClass('showAuthButtons');
    });
    
    $('body').on('focusin','.formInput',function(){
        $this = $(this); 
        $(this).removeClass('is-invalid');
        $(this).parent().find('label').css({'top':'10px'});
        $($this).parent().addClass('borderBottom');

    });

    $('body').on('blur','.formInput',function(){
        $(this).parent().removeClass('borderBottom hasInvalidValue');
        if($(this).val().trim()  == ''){
            $(this).parent().removeClass('hasVal');
            $(this).parent().find('label').css({'top':'30px'});
        }else{
            $(this).parent().removeClass('hasVal');
        $(this).parent().find('label').css({'top':'10px'});
        }
    });

    $('body').on('click','.toggleShowFeedback',function(){
        $('.feedbackDiv').toggleClass('showFeedback');
    })
    
    $('body').on('click','.descriptionToggleShow',function(){
        $('.descriptionContainer').toggleClass('showless showmore');
        if($('.descriptionContainer').hasClass('showless')){
            $('.descriptionToggleShow').html('Show more');
        }else{
            $('.descriptionToggleShow').html('Show less');

        }
    });
    $('body').on('click','.notifications',function(){
        $('.notificationList').fadeToggle(300).css({'display':'flex'});
    });

    $('body').on('click','.toggleChat',function(){
        $('.chatBox').slideToggle(300).css({'display':'flex'});
    });
    
})
